export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 h-full flex flex-col">
      <h2 className="text-2xl font-bold p-4">TrackerBea</h2>
      <nav className="flex-grow">
        <ul className="space-y-2 p-4">
          <li>
            <a
              href="/dashboard"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/habits"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Habits
            </a>
          </li>
          <li>
            <a
              href="/tasks"
              className="block px-4 py-2 rounded hover:bg-gray-700"
            >
              Tasks
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
