# team-A9-productivity
# To-Do List Web Application

A feature-rich To-Do List web application with a beautiful UI, motivational quotes, digital clock, and advanced task management features like timers and deadlines.

---

## 🚀 Features

- **Add, Edit, Complete, and Delete Tasks:** Manage your daily tasks efficiently.
- **Set Timers & Deadlines:** Assign countdown timers and deadlines to tasks.
- **Motivational Quotes:** Get a new motivational quote every few seconds.
- **Digital Clock:** Always-visible digital clock for time management.
- **Confirmation Popups:** Prevent accidental deletions with confirmation dialogs.
- **Responsive UI:** Clean, modern, and responsive design.
- **User Authentication (Flask version):** Register and login with username, password, and age (Flask app).
- **Personal Info Page (Flask version):** View your profile details after login.

---

## 🛠️ Technologies Used

- **Frontend:**
  - HTML5, CSS3 (custom and Google Fonts/Material Icons)
  - JavaScript (Vanilla JS for all logic)
- **Backend (Flask version):**
  - Python 3.x
  - Flask
  - SQLite (for user authentication)
- **APIs:**
  - [Quotable API](https://api.quotable.io/random) for fetching motivational quotes

---

## 📁 Project Structure

```
Project-main/
│
├── Folder/
│   ├── Index.html
│   ├── Java_Script.js
│   └── style.css
│
├── login_page/
│   ├── app.py
│   ├── private.db
│   ├── static/
│   │   ├── Todo.css
│   │   ├── style.css
│   │   ├── script.js
│   │   └── personal.css
│   └── templates/
│       ├── index.html
│       ├── login.html
│       └── personal.html
│
├── updated_1/
│   ├── app.py
│   ├── private.db
│   ├── static/
│   │   ├── Todo.css
│   │   ├── style.css
│   │   ├── script.js
│   │   ├── personal.css
│   │   └── alarm.mp3
│   └── templates/
│       ├── index.html
│       ├── login.html
│       └── personal.html
│
├── project1.html / project_updated.html / todolistmain.html
├── project1.js / script.js
├── project1.css / Todo.css
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/your-repo.git
cd Project-main
```

### 2. **Run the Static HTML/JS Version**

You can open `project1.html`, `project_updated.html`, or `todolistmain.html` directly in your browser for a fully client-side experience.

### 3. **Run the Flask Version (with User Login)**

#### a. **Install Python & Dependencies**

Make sure you have Python 3.x installed.

```bash
pip install flask
```

#### b. **Run the Flask App**

Navigate to either `login_page` or `updated_1` folder and run:

```bash
python app.py
```

#### c. **Access in Browser**

Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## ✨ Usage

- **Add a Task:** Enter your task and click "Add".
- **Edit/Complete/Delete:** Use the respective buttons next to each task.
- **Set Timer:** Click "Set Time" to assign a countdown to a task.
- **Start Timer:** Click "Start" to begin the countdown.
- **Set Deadline:** Click "Set DeadLine" to assign a due date.
- **Delete All:** Remove all tasks at once.
- **Login/Register (Flask):** Use the login page to register or sign in. After login, you can view your profile.

---

## 📦 Customization

- **Quotes:** Uses the Quotable API, but you can add your own quotes in the JS array.
- **Styling:** Modify `Todo.css` or `project1.css` for custom themes.
- **Sound:** Add your own `alarm.mp3` for custom alarm sounds (Flask version).

---

## 📝 Credits

- [Quotable API](https://api.quotable.io/)
- [Google Fonts & Material Icons](https://fonts.google.com/icons)
- [Font Awesome](https://fontawesome.com/) (for some button icons)

---

## 📄 License

This project is for educational purposes. Please check individual file headers for any additional licensing information.

---

Enjoy your productive day! 🚀
