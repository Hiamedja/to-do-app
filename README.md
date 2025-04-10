📝 To-Do List App
This is a simple and interactive To-Do List application built using React. It allows users to add tasks, mark them as completed, delete tasks, and switch between light and dark themes. The tasks are stored in localStorage to persist even after refreshing the page.

## 📦 Features
- ✅ Add, toggle, and delete tasks
- 🎨 Light/Dark theme toggle
- 📂 Local storage persistence
- 🔍 Filter by all, active, or completed
- 📱 Fully responsive design (mobile-friendly)
- 💫 Smooth animations with Framer Motion


🚀 Technologies Used
React: JavaScript library for building user interfaces.

FontAwesome: For the theme toggle icons (sun and moon).

Framer Motion: For smooth animations when tasks are added, toggled, or removed.

CSS: For styling the application.

localStorage: To persist tasks between page reloads.

📱 Responsive Design
This app is fully responsive and adapts seamlessly across various screen sizes, from desktop to tablet to mobile.
The layout adjusts using CSS media queries to ensure a smooth and user-friendly experience no matter the device.

⚙️ How It Works
Task Management
The app lets you add tasks, toggle their completion status, and delete tasks from the list.

Each task has an ID (generated using Date.now()), text, and a completed flag.

Theme Toggle
The app allows you to switch between dark mode and light mode. The theme is toggled using a button with an icon (sun or moon).

Local Storage
The task list is saved to localStorage every time a task is added or removed, so your tasks will persist even if you refresh the page.

Task Filtering
You can filter tasks by their status (All, Active, or Completed) using filter buttons.

🎨 Demo
![todo app](https://github.com/user-attachments/assets/ff315195-a42e-45d8-a352-8a1dd8d72a55)
![adding tasks](https://github.com/user-attachments/assets/89042c06-328c-4dc9-8a92-97f939d8ac01)
![Completed Tasks](https://github.com/user-attachments/assets/6e5c7729-5ad4-4fe8-99d4-6c992e599bca)
![active tasks](https://github.com/user-attachments/assets/6a4eff78-a7e1-4c91-858e-5c71d96eb2d1)
![dark Mode](https://github.com/user-attachments/assets/3b7c760e-f0c0-443f-bb53-ecdd23d4c7d1)


🛠️ Installation
Clone this repository to your local machine:
git clone https://github.com/Hiamedja/todo-list-app.git
Navigate to the project directory:

cd todo-list-app
Install the dependencies:

npm install
Start the app:

npm start
Open your browser and visit http://localhost:3000.

🖥️ How to Use
Add Tasks: Type your task in the input box and click the "Add Task" button.

Toggle Task Completion: Click the checkbox next to a task to mark it as completed or active.

Delete Tasks: Click the ❌ button next to a task to remove it.

Switch Themes: Click the sun/moon icon in the header to toggle between light and dark themes.

Filter Tasks: Use the filter buttons ("All", "Active", "Completed") to show only the tasks that match the selected filter.

💬 Contributions
Feel free to fork this project, create issues, and submit pull requests if you'd like to contribute! If you have any suggestions or improvements, please feel free to open an issue.

📌 License
This project is open-source and available under the MIT License.

