import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    punctuality: "",
    efficiency: "",
    teamwork: "",
  });
  const [suggestion, setSuggestion] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const evaluatePerformance = () => {
    const { name, department, punctuality, efficiency, teamwork } = formData;
    if (!name || !department || !punctuality || !efficiency || !teamwork) {
      alert("Please fill all fields!");
      return;
    }

    const avg =
      (parseInt(punctuality) + parseInt(efficiency) + parseInt(teamwork)) / 3;

    let performance = "";
    let feedback = "";

    if (avg >= 8) {
      performance = "Excellent";
      feedback =
        "🌟 Exceptional consistency, leadership and collaboration. Keep inspiring your team!";
    } else if (avg >= 6) {
      performance = "Good";
      feedback =
        "✅ Strong performance with room for growth. Aim for more initiative and skill mastery.";
    } else if (avg >= 4) {
      performance = "Average";
      feedback =
        "⚙️ Performance is satisfactory but can improve. Focus on time management and teamwork.";
    } else {
      performance = "Poor";
      feedback =
        "❗ Below expected standards. Immediate mentoring and goal-setting is recommended.";
    }

    const newEmp = { id: Date.now(), name, department, performance, avg };
    setEmployees([...employees, newEmp]);
    setSuggestion(feedback);
    setFormData({
      name: "",
      department: "",
      punctuality: "",
      efficiency: "",
      teamwork: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-100 to-pink-100 p-10 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl rounded-3xl p-10"
      >
        <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-700 to-indigo-500 bg-clip-text text-transparent">
          Employee Evaluation Expert System
        </h1>

        {/* Form + Suggestion */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white/60 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Evaluate Employee
            </h2>

            {["name", "department", "punctuality", "efficiency", "teamwork"].map(
              (field) => (
                <div key={field} className="mb-4">
                  <label className="block mb-1 font-medium text-gray-700 capitalize">
                    {field === "punctuality" ||
                    field === "efficiency" ||
                    field === "teamwork"
                      ? `${field} (1-10)`
                      : field}
                  </label>
                  <input
                    type={field === "name" || field === "department" ? "text" : "number"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              )
            )}

            <button
              onClick={evaluatePerformance}
              className="mt-4 w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl shadow-md transition-transform hover:scale-105"
            >
              Evaluate
            </button>
          </div>

          {/* Suggestion / Feedback */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-indigo-100 p-6 rounded-2xl shadow-inner border-l-4 border-purple-500"
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-3">
              Expert Suggestion
            </h2>
            <p className="text-gray-700 min-h-[150px] leading-relaxed text-lg">
              {suggestion || "🧠 Feedback and evaluation insights will appear here after you evaluate an employee."}
            </p>
          </motion.div>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/60 rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Employee Evaluation Summary
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                  <th className="py-3 px-4">Name</th>
                  <th className="py-3 px-4">Department</th>
                  <th className="py-3 px-4">Average</th>
                  <th className="py-3 px-4">Performance</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr
                    key={emp.id}
                    className={`${
                      emp.performance === "Excellent"
                        ? "bg-green-100"
                        : emp.performance === "Good"
                        ? "bg-blue-100"
                        : emp.performance === "Average"
                        ? "bg-yellow-100"
                        : "bg-red-100"
                    } border-b border-gray-200 hover:bg-opacity-70 transition`}
                  >
                    <td className="py-2 px-4 font-medium">{emp.name}</td>
                    <td className="py-2 px-4">{emp.department}</td>
                    <td className="py-2 px-4">{emp.avg.toFixed(1)}</td>
                    <td className="py-2 px-4 font-semibold text-gray-800">
                      {emp.performance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
