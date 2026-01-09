import { enqueueSnackbar } from "notistack";
import { useState } from "react";

const TaskInput = ({ setTasks }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: taskText.trim(),
        completed: false,
      },
    ]);
    enqueueSnackbar("Task Added", { variant: "success" });

    setTaskText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black p-6 rounded-xl w-125 flex flex-col gap-4 max-md:w-96 max-sm:w-72"
    >
      <h2 className="text-xl font-bold text-center">Add New Task</h2>

      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task..."
        className="border px-3 py-2 rounded font-medium"
        required
      />

      <button className="bg-emerald-600 hover:scale-105 transition-all duration-150 cursor-pointer text-white py-2 rounded hover:bg-emerald-700">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
