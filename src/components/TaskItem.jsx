import { enqueueSnackbar } from "notistack";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ taskItem, setTasks }) => {
  const toggleStatus = () => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskItem.id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((task) => task.id !== taskItem.id));
    enqueueSnackbar("Task Deleted", { variant: "info" });
  };

  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={taskItem.completed}
          onChange={toggleStatus}
          className="w-5 h-5 cursor-pointer accent-emerald-400 max-sm:w-3"
        />

        <span
          className={`font-medium ${
            taskItem.completed ? "line-through text-slate-400" : ""
          }`}
        >
          {taskItem.text}
        </span>

        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold
          ${
            taskItem.completed
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {taskItem.completed ? "Completed" : "Pending"}
        </span>
      </div>

      <button onClick={deleteTask}>
        <MdDelete className="text-red-500 cursor-pointer text-xl" />
      </button>
    </div>
  );
};

export default TaskItem;
