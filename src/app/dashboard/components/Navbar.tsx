export default function Navbar() {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center shadow">
      <h1 className="text-2xl font-bold">TrackerBea Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-primary px-4 py-2 rounded hover:bg-primary/80">
          Add Habit
        </button>
        <button className="bg-primary px-4 py-2 rounded hover:bg-primary/80">
          Add Task
        </button>
        <div className="bg-gray-700 p-2 rounded-full">
          <span className="material-icons text-white">account_circle</span>
        </div>
      </div>
    </div>
  );
}
