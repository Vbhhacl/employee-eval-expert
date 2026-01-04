#  Employee Evaluation Expert System

An intelligent **Employee Performance Evaluation Tool** designed to streamline the feedback process. This web application functions as an "Expert System," analyzing key performance metrics (Punctuality, Efficiency, Teamwork) to automatically generate performance scores, categories, and actionable feedback suggestions.


## 🚀 Key Features
* **Multi-Metric Evaluation:** Input scores (1-10) for **Punctuality**, **Efficiency**, and **Teamwork**.
* **Automated Scoring:** Instantly calculates weighted average scores to determine performance levels.
* **Smart Feedback Engine:**
    * **Excellent (Score 9+):** Suggests leadership and mentoring roles.
    * **Good (Score 7-8):** Encourages refining specific skills.
    * **Average (Score <7):** Suggests setting measurable personal goals.
* **Session History:** A sidebar logs recent evaluations for quick comparison.
* **Dockerized:** Fully containerized application for easy deployment using Docker Compose.

## 🛠️ Tech Stack
* **Backend:** Python (Flask/FastAPI) - Handles the expert system logic.
* **Frontend:** HTML, CSS, JavaScript - Provides the user interface.
* **Infrastructure:** Docker & Docker Compose - Orchestrates the services.

## 📂 Project Structure
```bash
├── backend/         # Python application logic and API
├── frontend/        # HTML templates, CSS styles, and JS
├── docker-compose.yml # Container orchestration configuration
└── README.md
```
⚡ How to Run

Method 1: Using Docker (Recommended)
Since the project includes a docker-compose.yml file, this is the easiest way to run it.

Clone the Repository:
```bash
git clone [https://github.com/Vbhhacl/employee-eval-expert.git](https://github.com/Vbhhacl/employee-eval-expert.git)
cd employee-eval-expert
```
Start the Application:

```bash
docker-compose up --build
```
Access the App:

Open your browser and navigate to http://localhost:5000 (or the port defined in your docker-compose file).

Method 2: Manual Setup (Local)
If you prefer running without Docker:

Navigate to Backend:

```bash
cd backend
pip install -r requirements.txt
python app.py
```
Access the Frontend:

The backend should serve the frontend files, or open the index.html in the frontend folder directly (depending on specific API configuration).

## 📊 Usage Workflow
Enter Details: Fill in the Employee Name and Department.

Rate Metrics: Assign a score from 1 to 10 for Punctuality, Efficiency, and Teamwork.

Evaluate: Click "Evaluate" to trigger the expert system.

View the calculated Average Score and Performance Tier.

Read the Expert Suggestion for specific advice.

Save: Click "Save to History" to keep a temporary log of the session.


## 📸 Interface Preview

### 1. Evaluation Input
The clean, dark-mode interface allows managers to easily input scores (1-10) for Punctuality, Efficiency, and Teamwork.
<img width="1920" height="1028" alt="Screenshot 2025-10-30 192828" src="https://github.com/user-attachments/assets/95a3b4a5-52ec-413a-b07c-c73681e48172" />

### 2. Expert System Results
Once submitted, the system instantly calculates the weighted average, assigns a performance badge (e.g., "Excellent"), and generates specific feedback suggestions.
<img width="1920" height="1027" alt="Screenshot 2025-10-25 192315" src="https://github.com/user-attachments/assets/b171d440-6178-4021-90f1-bef8495c7f7a" />
