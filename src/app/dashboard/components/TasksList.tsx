export default function TasksList() {
  const tasks = [
    { name: "Complete Project Proposal", status: "Pending" },
    { name: "Team Meeting", status: "Completed" },
    { name: "Plan Habit Tracker Features", status: "Pending" },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded shadow mt-4">
      <h3 className="text-xl font-bold mb-2">Tasks</h3>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex justify-between items-center ${
              task.status === "Completed" ? "text-gray-500 line-through" : ""
            }`}
          >
            <span>{task.name}</span>
            <span
              className={`px-3 py-1 rounded text-sm ${
                task.status === "Completed" ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
