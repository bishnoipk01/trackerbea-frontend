"use client";
import Button from "../../components/Button";

const Tasks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Tasks</h1>
      <Button onClick={() => console.log("Task Created")}>
        Create New Task
      </Button>
    </div>
  );
};

export default Tasks;
