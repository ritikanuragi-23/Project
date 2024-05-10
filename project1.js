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
    let setTimer = document.createElement('button');
    setTimer.textContent = "Set Time";
    setTimer.className = 'Set__timer';
    setTimer.onclick = function () {
        timer(li.id);;
    }

    let TimePlay = document.createElement('button');
    TimePlay.textContent="Start";
    TimePlay.className="time__play";
    TimePlay.onclick = function() {
        startCountdown(li.id);;
    }
    let DeadLine = document.createElement('button');
    DeadLine.textContent = "Set DeadLine";
    DeadLine.className = "dead__line";
    DeadLine.onclick = function() {
        deadLine(li.id);;
    }
    li.appendChild(setTimer);
    li.appendChild(TimePlay);
    li.appendChild(DeadLine);
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
function timer(id){
    const hour = prompt("Set Time In Hours")
    const minute = prompt("Set Time In Minutes")
    const second = prompt("Set Time In Seconds")
    const milliseconds_remaining = (Number(hour)*60*60*1000)+(Number(minute)*60*1000)+(Number(second)*1000);
    const var_hr = Math.floor((milliseconds_remaining / (1000 * 60 * 60)) % 24);
    const var_min = Math.floor((milliseconds_remaining / (1000 * 60)) % 60);
    const var_sec = Math.floor((milliseconds_remaining / 1000) % 60);
    let parentElement_li = document.getElementById(id);
    let childElement_li = parentElement_li.children[0];
    if (milliseconds_remaining == 0 ){
        alert("Enter a valid Time")
    }
    else{
        childElement_li.innerHTML = var_hr+":"+var_min+":"+var_sec;
        childElement_li_2 = parentElement_li.children[1];
        childElement_li_2.style.visibility = "visible";
    }
    return milliseconds_remaining!=0
}
function startCountdown(id) {
      const parentElement_li = document.getElementById(id);
      const childElement_li = parentElement_li.children[0];
      const childElement_li_4 = parentElement_li.children[4];
      childElement_li_2.style.visibility = "hidden"
      const time = childElement_li.innerHTML
      if (time!=""){
      let simplified_time = time.split(":")
      let hoursLeft = simplified_time[0]
      let minutesLeft = simplified_time[1]
      let secondsLeft = simplified_time[2]
      const milliseconds_remaining = (Number(hoursLeft)*60*60*1000)+(Number(minutesLeft)*60*1000)+(Number(secondsLeft)*1000);
      let remainingTime = milliseconds_remaining-1000
            const countdownInterval = setInterval(() => {
                const var_hr = Math.floor((remainingTime / (1000*60 *60)) %24)
                const var_min = Math.floor(remainingTime / (60 * 1000));
                const var_sec = Math.floor(((remainingTime % (60 * 1000)) / 1000));

                childElement_li.innerHTML = var_hr+":"+var_min+":"+var_sec;

                if (remainingTime == 0) {
                    clearInterval(countdownInterval);
                    alert('Countdown complete!');
                    childElement_li.style.background = "pink";
                    childElement_li.style.textDecoration = "line-through";
                    childElement_li_4.style.visibility = "visible";
                } else {
                    remainingTime -= 1000; // Decrease by 1 second
                    childElement_li.style.background = "lightgreen";
                    childElement_li_4.style.visibility = "hidden";
                }
                if (remainingTime<5000){
                childElement_li.style.color="red";
                }
                else{
                childElement_li.style.color="black";
                }
            }, 1000);
        }
}
function deadLine(id){
    const dead_line = prompt("Enter the dead line date in yyyy/mm/dd format");
    if (dead_line == ""){
        alert("Type a Date")
    }
    else{
        const dead_line_date = new Date(dead_line);
        const today = new Date();
        let parentElement_li = document.getElementById(id);
        let childElement_li = parentElement_li.children[2];
        let year_only = dead_line_date.getFullYear();
        let month_only = dead_line_date.getMonth();
        let date_only = dead_line_date.getDate();
        childElement_li.textContent = "Due "+ date_only + "/" + month_only + "/" + year_only;
        
        if (dead_line_date-today <= 0){
            childElement_li.style.textDecoration = "line-through";
            childElement_li.style.background = "pink";
        }
        else {
            childElement_li.style.background = "lightgreen";
        }
    }
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
setInterval(displayRandomQuote, 5000);
