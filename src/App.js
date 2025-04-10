import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [darkTheme, setDarkTheme] = useState(false); 
  const [filter, setFilter] = useState("all");




  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);


  useEffect(() => { 
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); 
  };

  return (
    <div className={`todo-container ${darkTheme ? "dark" : ""}`}>
      <div className="header">
        <h2>To-Do List</h2>
        <button className="theme-toggle" onClick={toggleTheme}>
          <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} />
        </button>
      </div>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

    <div className="filter-buttons">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
    </div>


    <ul>
      <AnimatePresence>
        {tasks.filter(t => {
          if (filter === "all") return true;
          if (filter === "active") return !t.completed;
          if (filter === "completed") return t.completed;
          return true;
          })
          .map((t) => (

            
          <motion.li
            key={t.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            <span 
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                color: t.completed ? "white" : "black", 
                fontStyle: t.completed ? "italic" : "normal", 
                fontWeight: t.completed ? "normal" : "bold", 
                fontSize: t.completed ? "1.1em" : "1em",
                transition: "all 0.3s ease",
                
              }}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
    </div>
  );
};

export default App;
