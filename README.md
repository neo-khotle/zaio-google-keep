# zaio-google-keep

Google Keep Clone

A responsive Google Keep-inspired note-taking app built with HTML, CSS, and JavaScript. The project focuses on recreating the core note-taking experience while practicing DOM manipulation, event handling, local storage, responsive layouts, and basic CRUD functionality.

✨ Features
📝 Create and save notes
💾 Persist notes using localStorage
📖 View saved notes
✏️ Open and edit existing notes
📦 Archive and unarchive notes
🗑️ Delete notes
📂 Separate Notes and Archive sections
📱 Responsive layout for mobile, tablet, and desktop
🔍 Responsive search interface
📑 Collapsible sidebar navigation
🖥️ Responsive note-card grid
🛠️ Technologies Used
HTML5 — Page structure and forms
CSS3 — Styling, responsive design, Flexbox and CSS Grid
JavaScript — DOM manipulation, events, note management and localStorage
Material Symbols — Interface icons
Git & GitHub — Version control
📱 Responsive Design

The application is designed around three breakpoints:

Device	Screen Width	Layout
Mobile	≤ 599px	1 note per row
Tablet	600px–1023px	2 notes per row
Desktop	≥ 1024px	4 notes per row

The sidebar collapses on smaller screens and can be expanded when needed.

💾 How Notes Are Stored

Notes are stored in the browser using localStorage.

Each note is represented as an object containing:

{
    title: "My Note",
    note: "This is my note.",
    id: 123456789,
    archived: false
}

The archived property determines whether a note appears in the Notes section or the Archive section.

📚 What I Practiced

This project helped me practice:

DOM selection and manipulation
JavaScript functions
Event listeners
Form handling
Working with arrays and objects
localStorage
JSON conversion with JSON.stringify() and JSON.parse()
Creating HTML elements dynamically with JavaScript
CSS Grid and Flexbox
Responsive design and media queries
Building interactive UI components
Debugging and troubleshooting layout issues
🚀 Getting Started
1. Clone the repository
git clone https://github.com/your-username/google-keep-clone.git
2. Open the project

Open the project folder in VS Code.

3. Run the application

Open index.html in your browser.

No backend or installation is required.

🎯 Project Goal

The goal of this project was to strengthen my understanding of HTML, CSS, and beginner JavaScript by building a functional application rather than only working through isolated exercises.

I also used AI-assisted development during the project, while reviewing and debugging the generated code to understand how each part worked.

📌 Future Improvements
Search functionality
Note color customization
Pinning notes
Reminder functionality
Better note editing experience
Additional accessibility improvements

👤 Author

Neo Khotle

Computer Science graduate interested in web development, technology, and AI-assisted development.

⭐ If you found this project useful or interesting, feel free to explore the repository.
