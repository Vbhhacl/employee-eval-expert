from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.types import JSON
from datetime import datetime


db = SQLAlchemy()


class Employee(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column(db.String(120), nullable=False)
	role = db.Column(db.String(120), nullable=True)
	created_at = db.Column(db.DateTime, default=datetime.utcnow)
	evaluations = db.relationship('Evaluation', back_populates='employee')


class Evaluation(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	employee_id = db.Column(db.Integer, db.ForeignKey('employee.id'))
	employee = db.relationship('Employee', back_populates='evaluations')
	score = db.Column(db.Integer)
	level = db.Column(db.String(50))
	suggestion = db.Column(db.String(400))
	facts = db.Column(JSON)
	created_at = db.Column(db.DateTime, default=datetime.utcnow)