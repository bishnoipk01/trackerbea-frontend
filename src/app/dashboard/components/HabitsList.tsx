export default function HabitsList() {
  const habits = [
    { name: "Morning Workout", progress: 80 },
    { name: "Read a Book", progress: 40 },
    { name: "Drink Water", progress: 100 },
  ];

  return (
    <div className="bg-gray-800 p-4 rounded shadow mt-4">
      <h3 className="text-xl font-bold mb-2">Habits</h3>
      <ul className="space-y-4">
        {habits.map((habit, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{habit.name}</span>
            <div className="w-2/3 bg-gray-700 rounded h-3 relative">
              <div
                className="bg-primary h-3 rounded absolute top-0 left-0"
                style={{ width: `${habit.progress}%` }}
              />
            </div>
            <span>{habit.progress}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
