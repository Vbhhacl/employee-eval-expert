from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# SQLite database setup
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///employees.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


# -----------------------------
# Database Model
# -----------------------------
class Employee(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    efficiency = db.Column(db.Float, nullable=False)
    teamwork = db.Column(db.Float, nullable=False)
    punctuality = db.Column(db.Float, nullable=False)
    performance = db.Column(db.String(50), nullable=True)
    suggestions = db.Column(db.String(200), nullable=True)


# -----------------------------
# Routes
# -----------------------------
@app.route('/')
def home():
    return jsonify({"message": "Employee Evaluation Expert System Backend is running!"})


@app.route('/employees', methods=['GET'])
def get_employees():
    employees = Employee.query.all()
    return jsonify([{
        'id': emp.id,
        'name': emp.name,
        'efficiency': emp.efficiency,
        'teamwork': emp.teamwork,
        'punctuality': emp.punctuality,
        'performance': emp.performance,
        'suggestions': emp.suggestions
    } for emp in employees])


@app.route('/employees', methods=['POST'])
def add_employee():
    data = request.get_json()
    emp = Employee(
        name=data['name'],
        efficiency=float(data['efficiency']),
        teamwork=float(data['teamwork']),
        punctuality=float(data['punctuality'])
    )
    db.session.add(emp)
    db.session.commit()
    return jsonify({'message': 'Employee added successfully!'})


@app.route('/evaluate/<int:emp_id>', methods=['POST'])
def evaluate_employee(emp_id):
    emp = Employee.query.get_or_404(emp_id)

    # Simple expert system logic
    score = (emp.efficiency + emp.teamwork + emp.punctuality) / 3

    if score >= 8.5:
        performance = 'Excellent'
        suggestion = 'Keep up the outstanding work! Consider mentoring others.'
    elif score >= 7:
        performance = 'Good'
        suggestion = 'Great job! Focus on refining your teamwork and punctuality.'
    elif score >= 5:
        performance = 'Average'
        suggestion = 'Needs improvement. Consider setting personal performance goals.'
    else:
        performance = 'Poor'
        suggestion = 'Immediate improvement required. Seek feedback and training.'

    emp.performance = performance
    emp.suggestions = suggestion
    db.session.commit()

    return jsonify({'id': emp.id, 'performance': performance, 'suggestion': suggestion})


@app.route('/history', methods=['GET'])
def get_history():
    employees = Employee.query.all()
    return jsonify([{
        'id': emp.id,
        'name': emp.name,
        'performance': emp.performance,
        'suggestions': emp.suggestions
    } for emp in employees])


# -----------------------------
# Main Entry Point
# -----------------------------
if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
