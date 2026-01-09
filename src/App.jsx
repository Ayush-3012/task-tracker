import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState("add");

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center gap-6 py-6">
      <Header />

      <div className="flex gap-4">
        <button
          onClick={() => setView("add")}
          className={`px-4 py-2 rounded hover:scale-105 hover:bg-emerald-400 transition-all duration-150 cursor-pointer ${
            view === "add" ? "bg-emerald-600" : "bg-slate-700"
          }`}
        >
          Add Task
        </button>

        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded hover:scale-105 hover:bg-emerald-400 transition-all duration-150 cursor-pointer ${
            view === "list" ? "bg-emerald-600" : "bg-slate-700"
          }`}
        >
          View Tasks
        </button>
      </div>

      {view === "add" && <TaskInput setTasks={setTasks} />}
      {view === "list" && <TaskList allTasks={tasks} setTasks={setTasks} />}

      <Footer />
    </div>
  );
};

export default App;
