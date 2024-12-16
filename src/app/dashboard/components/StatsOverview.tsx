export default function StatsOverview() {
  return (
    <div className="bg-gray-800 p-4 rounded shadow">
      <h3 className="text-xl font-bold mb-2">Overview</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Streaks</h4>
          <p className="text-2xl">12 Days</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Tasks Completed</h4>
          <p className="text-2xl">5</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h4 className="font-bold">Upcoming Deadlines</h4>
          <p className="text-2xl">3</p>
        </div>
      </div>
    </div>
  );
}
