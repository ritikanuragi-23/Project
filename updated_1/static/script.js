// let tasks = [];

// let home= document.getElementById('home');
// let refresh = document.getElementById('refresh');
// let person = document.getElementById('person');

// refresh.addEventListener('click' ,function() {
//     location.reload();
//     // try adding local storage here
// }); 

// home.addEventListener('click', function() {
//     window.location.href = '/';
// });
// person.addEventListener('click', function(){
//     window.location.href = '/personal';
// });


// function Add() {
//     let taskInput = document.getElementById('taskInput');
//     let taskList = document.getElementById('taskList');
//     let taskText = taskInput.value.trim();

//     if (taskInput.value.trim() === '') {
//         alert('Please enter a task');
//         return;
//     }

//     let li = document.createElement('li');
//     li.textContent = taskInput.value;
//     li.id = tasks.length;  

//     let alarmTime = prompt('Set Alarm Time for the task (HH:MM format):');
// // validate time
//     if (!validateTime(alarmTime)) {
//         alert('Invalid time format. Please use HH:MM format.');
//         return;
//     }

//     const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);

// // Get the current time
//     const now = new Date();
//     const currentHours = now.getHours();
//     const currentMinutes = now.getMinutes();

// // Compare the alarm time with the current time
//     if (alarmHours < currentHours || (alarmHours === currentHours && alarmMinutes <= currentMinutes)) {
//         // The alarm time is in the past
//         alert('The alarm time is in the past. Please select a future time.');
//         return;
//     }


//     let deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
//     deleteBtn.className = 'bttn';
//     deleteBtn.onclick = function () {
//         showConfirmation(li.id);
//     };
    
//     let completeBtn = document.createElement('button');
//     completeBtn.innerHTML = '<i class="fas fa-check"></i>';
//     completeBtn.className = 'complete-btn';
//     completeBtn.onclick = function () {
//         toggleComplete(li.id);
//     };
    
//     let editBtn = document.createElement('button');
//     editBtn.innerHTML = '<i class="fas fa-edit"></i>';
//     editBtn.className = 'edit-btn';
//     editBtn.onclick = function () {
//         editTask(li.id);
//     };

//     li.appendChild(deleteBtn);
//     li.appendChild(completeBtn);
//     li.appendChild(editBtn);
//     taskList.appendChild(li);

//     tasks.push({
//         id: li.id,
//         task: taskInput.value,
//         completed: false,
//         alarmTime: alarmTime,
//         alarmSet: false
//     });

//     addTaskToList(taskText, alarmTime);

//     taskInput.value = '';
// }

// function validateTime(time) {
//     const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
//     return regex.test(time);
// }

// function addTaskToList(taskText, alarmTime) {
//     let taskList = document.getElementById('taskList');

//     checkAlarm(alarmTime);
// }

// function checkAlarm(alarmTime) {
//     setInterval(function() {
//         let currentTime = new Date();
//         let currentHours = currentTime.getHours();
//         let currentMinutes = currentTime.getMinutes();
//         let formattedCurrentTime = ('0' + currentHours).slice(-2) + ':' + ('0' + currentMinutes).slice(-2);

//         if (formattedCurrentTime === alarmTime && !tasks.find(task => task.alarmTime === alarmTime && task.alarmSet)) {
//             triggerAlarm();
//             updateTaskAlarmStatus(alarmTime);
//         }
//     }, 1000);
// }

// function updateTaskAlarmStatus(alarmTime) {
//     let task = tasks.find(task => task.alarmTime === alarmTime);
//     if (task) {
//         task.alarmSet = true;
//     }
// }

// function stopAlarm() {
//     let alarmSound = document.getElementById('alarmSound');
//     alarmSound.pause();
//     alarmSound.currentTime = 0; 
// }


// function showConfirmation(id) {
//     let confirmationPopup = document.getElementById('confirmationPopup');
//     confirmationPopup.style.display = 'block';

//     document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
//         Delete(id); 
//         stopAlarm();
//         confirmationPopup.style.display = 'none'; 
//     });

//     document.getElementById('cancelDeleteBtn').addEventListener('click', function() {
//         confirmationPopup.style.display = 'none'; 
//     });
// }
// function toggleComplete(id) {
//     let li = document.getElementById(id);
//     let taskIndex = tasks.findIndex(task => task.id === id);

//     if (taskIndex !== -1) {
//         tasks[taskIndex].completed = !tasks[taskIndex].completed;
        
//         if (tasks[taskIndex].completed) {
//             li.classList.add('completed'); // Add completed class for green color
//         } else {
//             li.classList.remove('completed'); // Remove completed class
//         }
//     }
// }

// function editTask(id) {
//     let li = document.getElementById(id);
//     let taskIndex = tasks.findIndex(task => task.id === id);

//     if (taskIndex !== -1) {
//         let newTask = prompt('Edit task:', tasks[taskIndex].task);
//         if (newTask !== null) {
//             tasks[taskIndex].task = newTask;
//             li.textContent = newTask;


//             let deleteBtn = document.createElement('button');
//             deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
//             deleteBtn.className = 'bttn';
//             deleteBtn.onclick = function () {
//                 showConfirmation(li.id);
//             };
            
//             let completeBtn = document.createElement('button');
//             completeBtn.innerHTML = '<i class="fas fa-check"></i>';
//             completeBtn.className = 'complete-btn';
//             completeBtn.onclick = function () {
//                 toggleComplete(li.id);
//             };
            
//             let editBtn = document.createElement('button');
//             editBtn.innerHTML = '<i class="fas fa-edit"></i>';
//             editBtn.className = 'edit-btn';
//             editBtn.onclick = function () {
//                 editTask(li.id);
//             };
        
//             li.appendChild(deleteBtn);
//             li.appendChild(completeBtn);
//             li.appendChild(editBtn);
//         }
//     }
// }

// function Delete(id) {
//     let taskList = document.getElementById('taskList');
//     let li = document.getElementById(id);
//     taskList.removeChild(li);
//     tasks = tasks.filter(task => task.id !== parseInt(id)); 
// }

// function triggerAlarm() {
//     let alarmSound = document.getElementById('alarmSound');
//     alarmSound.play();
// }

// function deleteAll() {
//     const taskList = document.querySelectorAll('#taskList li');
//     taskList.forEach(item =>item.remove());
//     tasks = [];
// }


// function updateDigitalClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;

//     document.getElementById('digitalClock').textContent = timeString;

//     setTimeout(updateDigitalClock, 1000); 
// }


// updateDigitalClock(); 
// const quotes = [
//     { text: "Your limitation—it's only your imagination.",  },
//     { text: "Push yourself, because no one else is going to do it for you.",  },
//     { text: "Great things never come from comfort zones.", },
//     { text: "Dream it. Wish it. Do it.",  },
//     { text: "Success doesn’t just find you. You have to go out and get it.",  }
// ];
// async function displayRandomQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
//         const data = await response.json(); 
//         document.getElementById('quoteText').textContent = data.content;
//         document.getElementById('quoteAuthor').textContent = data.author;
//     }  
//     catch(error){
//         console.error('Error fetching quote:', error);
//     }
// }

// displayRandomQuote();
// setInterval(displayRandomQuote, 5000)
let tasks = [];

// Load tasks from local storage on page load
window.addEventListener('load', function() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
        tasks = storedTasks;
        tasks.forEach(task => {
            addTaskToList(task.task, task.alarmTime, task.id, task.completed);
        });
    }
});

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
    let taskText = taskInput.value.trim();

    if (taskInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    let alarmTime = prompt('Set Alarm Time for the task (HH:MM format):');
    if (!validateTime(alarmTime)) {
        alert('Invalid time format. Please use HH:MM format.');
        return;
    }

    const [alarmHours, alarmMinutes] = alarmTime.split(':').map(Number);
    const now = new Date();
    const currentHours = now.getHours();
    const currentMinutes = now.getMinutes();

    if (alarmHours < currentHours || (alarmHours === currentHours && alarmMinutes <= currentMinutes)) {
        alert('The alarm time is in the past. Please select a future time.');
        return;
    }

    let newTask = {
        id: tasks.length,
        task: taskInput.value,
        completed: false,
        alarmTime: alarmTime,
        alarmSet: false
    };

    tasks.push(newTask);
    addTaskToList(taskText, alarmTime, newTask.id);

    // Save tasks to local storage
    saveTasks();

    taskInput.value = '';
}
function validateTime(time) {
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regex.test(time);
}
function addTaskToList(taskText, alarmTime, id, completed = false) {
    let taskList = document.getElementById('taskList');

    let li = document.createElement('li');
    li.textContent = taskText;
    li.id = id;

    if (completed) {
        li.classList.add('completed');
    }

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.className = 'bttn';
    deleteBtn.onclick = function () {
        showConfirmation(li.id);
    };

    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.className = 'complete-btn';
    completeBtn.onclick = function () {
        toggleComplete(li.id);
    };

    let editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    editBtn.className = 'edit-btn';
    editBtn.onclick = function () {
        editTask(li.id);
    };

    li.appendChild(deleteBtn);
    li.appendChild(completeBtn);
    li.appendChild(editBtn);
    taskList.appendChild(li);
}
function checkAlarm(alarmTime) {
    setInterval(function() {
        let currentTime = new Date();
        let currentHours = currentTime.getHours();
        let currentMinutes = currentTime.getMinutes();
        let formattedCurrentTime = ('0' + currentHours).slice(-2) + ':' + ('0' + currentMinutes).slice(-2);

        if (formattedCurrentTime === alarmTime && !tasks.find(task => task.alarmTime === alarmTime && task.alarmSet)) {
            triggerAlarm();
            updateTaskAlarmStatus(alarmTime);
        }
    }, 1000);
}

function updateTaskAlarmStatus(alarmTime) {
    let task = tasks.find(task => task.alarmTime === alarmTime);
    if (task) {
        task.alarmSet = true;
    }
}

function stopAlarm() {
    let alarmSound = document.getElementById('alarmSound');
    alarmSound.pause();
    alarmSound.currentTime = 0; 
}


function showConfirmation(id) {
    let confirmationPopup = document.getElementById('confirmationPopup');
    confirmationPopup.style.display = 'block';

    document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
        Delete(id); 
        stopAlarm();
        confirmationPopup.style.display = 'none'; 
    });

    document.getElementById('cancelDeleteBtn').addEventListener('click', function() {
        confirmationPopup.style.display = 'none'; 
    });
}
function toggleComplete(id) {
    let li = document.getElementById(id);
    let task = tasks.find(task => task.id === parseInt(id));

    if (task) {
        task.completed = !task.completed;
        if (task.completed) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    }

    // Save tasks to local storage after updating completion status
    saveTasks();
}
function editTask(id) {
    let task = tasks.find(task => task.id === parseInt(id));

    if (task) {
        let newTask = prompt('Edit task:', task.task);
        if (newTask !== null) {
            task.task = newTask;
            let li = document.getElementById(id);
            li.textContent = newTask;
            let deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.className = 'bttn';
            deleteBtn.onclick = function () {
                showConfirmation(li.id);
            };
        
            let completeBtn = document.createElement('button');
            completeBtn.innerHTML = '<i class="fas fa-check"></i>';
            completeBtn.className = 'complete-btn';
            completeBtn.onclick = function () {
                toggleComplete(li.id);
            };
        
            let editBtn = document.createElement('button');
            editBtn.innerHTML = '<i class="fas fa-edit"></i>';
            editBtn.className = 'edit-btn';
            editBtn.onclick = function () {
                editTask(li.id);
            };
        
            li.appendChild(deleteBtn);
            li.appendChild(completeBtn);
            li.appendChild(editBtn);
            taskList.appendChild(li);

        }
    }

    // Save tasks to local storage after editing task
    saveTasks();
}
function Delete(id) {
    let task = tasks.find(task => task.id === parseInt(id));
    if (task) {
        let taskList = document.getElementById('taskList');
        let li = document.getElementById(id);
        taskList.removeChild(li);
        tasks = tasks.filter(task => task.id !== parseInt(id));

        // Save tasks to local storage after deleting task
        saveTasks();
    }
}
function triggerAlarm() {
    let alarmSound = document.getElementById('alarmSound');
    alarmSound.play();
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function deleteAll() {
    const taskList = document.querySelectorAll('#taskList li');
    taskList.forEach(item =>item.remove());
    tasks = [];
    // Clear local storage
    localStorage.removeItem('tasks');
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
async function displayRandomQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json(); 
        document.getElementById('quoteText').textContent = data.content;
        document.getElementById('quoteAuthor').textContent = data.author;
    }  
    catch(error){
        console.error('Error fetching quote:', error);
    }
}

displayRandomQuote();
setInterval(displayRandomQuote, 5000)
