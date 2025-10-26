import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Dashboard() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [goal, setGoal] = useState(0);

  const data = [
    { name: "Income", value: Number(income) },
    { name: "Expenses", value: Number(expenses) },
    { name: "Goal", value: Number(goal) },
  ];

  const COLORS = ["#00C6A7", "#0A2540", "#F5F7FA"];

  return (
    <div className="dashboard">
      <h1>Welcome to your Dashboard</h1>
      <div className="inputs">
        <input type="number" placeholder="Income" onChange={(e) => setIncome(e.target.value)} />
        <input type="number" placeholder="Expenses" onChange={(e) => setExpenses(e.target.value)} />
        <input type="number" placeholder="Savings Goal" onChange={(e) => setGoal(e.target.value)} />
      </div>

      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" nameKey="name" outerRadius={120}>
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
}
