export default function Calendar() {
  return (
    <div className="bg-gray-800 p-4 rounded shadow mt-4">
      <h3 className="text-xl font-bold mb-2">Calendar</h3>
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: 30 }, (_, index) => (
          <div
            key={index}
            className="bg-gray-700 p-4 rounded hover:bg-primary hover:text-white cursor-pointer"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
