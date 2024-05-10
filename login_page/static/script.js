let tasks = [];

let home= document.getElementById('home');
let refresh = document.getElementById('refresh');
let person = document.getElementById('person');

refresh.addEventListener('click' ,function() {
    location.reload();
});

home.addEventListener('click', function() {
    window.location.href = '/';
});
person.addEventListener('click', function(){
    window.location.href = '/personal';
});


function Add() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    let li = document.createElement('li');
    li.textContent = taskInput.value;
    li.id = tasks.length;


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'bttn';
    deleteBtn.onclick = function () {
        showConfirmation(li.id);;
    };
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
        toggleComplete(li.id);;
    };

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
        editTask(li.id);;
    };


    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);

    tasks.push({ 
        id: li.id,
        task: taskInput.value,
        completed: false
    });
    taskInput.value = '';
}
function showConfirmation(id) {
    let confirmationPopup = document.getElementById('confirmationPopup');
    confirmationPopup.style.display = 'block';

    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
        Delete(id); // Call Delete function if confirmed
        confirmationPopup.style.display = 'none'; // Hide the confirmation popup
    });

    document.getElementById('cancelDeleteBtn').addEventListener('click', function() {
        confirmationPopup.style.display = 'none'; // Hide the confirmation popup
    });
}

function Delete(id) {
    let taskList = document.getElementById('taskList');
    let li = document.getElementById(id);
    taskList.removeChild(li);
    tasks.splice(id, 1);
}
function toggleComplete(id) {
    let li = document.getElementById(id);
    let taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        li.classList.toggle('completed');
    }
    
}
function editTask(id) {
    let li = document.getElementById(id);
    let taskIndex = tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
        let newTask = prompt('Edit task:', tasks[taskIndex].task);
        if (newTask !== null) {
            tasks[taskIndex].task = newTask;
            li.textContent = newTask;
        }
    }
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'bttn';
    deleteBtn.onclick = function () {
        showConfirmation(li.id);;
    };
    let completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
        toggleComplete(li.id);;
    };

    let editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
        editTask(li.id);;
    };


    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);
}
function deleteAll() {
    const taskList = document.querySelectorAll('#taskList li');
    taskList.forEach(item =>item.remove());
    tasks = [];

}
function updateDigitalClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    document.getElementById('digitalClock').textContent = timeString;

    setTimeout(updateDigitalClock, 1000); 
}

updateDigitalClock(); 
const quotes = [
    { text: "Your limitation—it's only your imagination.",  },
    { text: "Push yourself, because no one else is going to do it for you.",  },
    { text: "Great things never come from comfort zones.", },
    { text: "Dream it. Wish it. Do it.",  },
    { text: "Success doesn’t just find you. You have to go out and get it.",  }
];
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteText').textContent = `"${quote.text}"`;
    document.getElementById('quoteAuthor').textContent = quote.author;
}
displayRandomQuote();
setInterval(displayRandomQuote, 5000);
