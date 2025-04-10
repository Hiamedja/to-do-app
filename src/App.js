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




  useEffect(() => {//when the component mounts
    // Load tasks from local storage
    // Check if local storage has tasks
    // If it does, set tasks state to the saved tasks
    // If not, set tasks state to an empty array
    // Get tasks from local storage
    // Parse the tasks from local storage
    // If tasks exist, set them to the tasks state
    const savedTasks = JSON.parse(localStorage.getItem("tasks")); //It tries to retrieve data stored in the browser's
    //  local storage under the key "tasks". localStorage.getItem() 
    // returns a JSON string, so JSON.parse() is used to convert it back into a JavaScript array (if it exists)
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);


  useEffect(() => { //when the tasks state changes
    // Save tasks to local storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {//when the add task button is clicked
    // Check if task is empty
    // If it is, return
    // If not, add the task to the tasks state
    // Set the task state to an empty string
    // Create a new task object with a unique id, text, and completed status
    // Add the new task to the tasks state
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (id) => {//when the checkbox is clicked
    // Find the task with the given id
    // Toggle the completed status of the task
    // Update the tasks state with the new completed status
    // Map through the tasks and update the completed status of the task with the given id
    // If the task is completed, set it to false
    // If the task is not completed, set it to true
    // Return the updated tasks state
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTask = (id) => {//when the delete button is clicked
    // Filter out the task with the given id
    // Update the tasks state with the remaining tasks
    // Map through the tasks and filter out the task with the given id
    // Return the updated tasks state
    // Set the tasks state to the remaining tasks
    // Set the tasks state to the filtered tasks
    // Return the updated tasks state
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTheme = () => {//when the theme toggle button is clicked
    // Toggle the dark theme state
    // If the dark theme is true, set it to false
    // If the dark theme is false, set it to true
    // Set the dark theme state to the opposite of the current dark theme state
    // Return the updated dark theme state
    setDarkTheme(!darkTheme); 
  };

  // Render the component
  // The JSX that defines the UI of the component 
  return (//when the component is rendered
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

          // Map through the tasks and render each task
          // Use the AnimatePresence component to animate the tasks
          // Use the motion component to animate the tasks
          // Use the key prop to uniquely identify each task
          // Use the initial, animate, and exit props to define the animation
          // Use the transition prop to define the duration of the animation
          // Use the motion.li component to animate the list item

          <motion.li
            key={t.id}// unique id for each task 
            initial={{ opacity: 0, y: -10 }} // the initial state of the task
            animate={{ opacity: 1, y: 0 }}// when the task is added 
            exit={{ opacity: 0, x: 50 }} // when the task is removed
            transition={{ duration: 0.3 }} // duration of the animation
          >
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
            />
            <span 
              style={{ // style of the task text
                textDecoration: t.completed ? "line-through" : "none", // if the task is completed, add a line-through style
                color: t.completed ? "white" : "black", // if the task is completed, set the color to gray
                fontStyle: t.completed ? "italic" : "normal", // if the task is completed, set the font style to italic
                fontWeight: t.completed ? "normal" : "bold", // if the task is completed, set the font weight to normal
                fontSize: t.completed ? "1.1em" : "1em", // if the task is completed, set the font size to 0.8em
                transition: "all 0.3s ease", // duration of the animation
                
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
