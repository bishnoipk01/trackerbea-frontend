export default function Notifications() {
  const notifications = [
    "Complete your daily workout!",
    "Drink 2 more glasses of water.",
    "Team meeting scheduled at 4 PM.",
  ];

  return (
    <div className="bg-gray-800 p-4 rounded shadow mt-4">
      <h3 className="text-xl font-bold mb-2">Notifications</h3>
      <ul className="space-y-4">
        {notifications.map((notification, index) => (
          <li key={index} className="bg-gray-700 p-2 rounded">
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
}
