import TaskItem from "./TaskItem";

const TaskList = ({ allTasks, setTasks }) => {
  return (
    <div className="bg-white text-black p-6 rounded-xl w-125 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center">All Tasks</h2>

      {allTasks.length === 0 ? (
        <p className="text-center text-slate-500">No tasks added</p>
      ) : (
        allTasks.map((task) => (
          <TaskItem key={task.id} taskItem={task} setTasks={setTasks} />
        ))
      )}
    </div>
  );
};

export default TaskList;
