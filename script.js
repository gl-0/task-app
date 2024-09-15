// ! LOCAL STORAGE TEST - will be to-do list
document.addEventListener("DOMContentLoaded", function() {
    let taskInput = document.getElementById("taskInput");
    let addTaskButton = document.getElementById("addTaskButton");
    let taskList = document.getElementById("taskList");
    let highlightTasksButton = document.getElementById("highlightTasksButton");
    let removeCompletedButton = document.getElementById("removeCompletedButton");
    // All the code will go inside this function

    
//! LOCAL STORAGE
//     document.getElementById('add-task').addEventListener('click', function() {
//     // if(localStorage.clickcount === NaN){
//     //     localStorage.clickcount = Number(localStorage.clickcount)+1;
//     // }
//     let taskNumber = localStorage.clickcount;
    
//     window.localStorage.setItem('tasks', JSON.stringify ({taskNumber,
//         taskNumber: 'finish list', status: 'Incomplete' })
// );
//     clickCounter();
//     // updateUI();
// });

// document.getElementById('add-another-item-to-ls').addEventListener('click', function() {
//     localStorage.setItem('tasks', JSON.stringify({task: 'Joe Bloggs', status: 'Incomplete' })
//     );
//     updateUI();
// });

// document.getElementById('get-single-item-from-ls').addEventListener('click', function() {
//     const task = JSON.parse(localStorage.getItem('tasks'));
//     document.getElementById('ls-currently').textContent = task[0];
// });

// document.getElementById('remove-single-item-from-ls').addEventListener('click', function() {
//     localStorage.removeItem('name');
//     updateUI();
// });

document.getElementById('remove-all-from-ls').addEventListener('click', function() {
    localStorage.clear();
    updateUI();
});

updateUI = () => {
    let values = [], keys = Object.keys(localStorage), i = keys.length;
    while (i--){
        values.push(localStorage.getItem(keys[i]));
    }
    document.getElementById('ls-currently').textContent = values;
}

function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
    }
  }

// ? OLD TO-DO LIST CODE
// ?--------------------------------------



    addTaskButton.onclick = function() {
        let taskNumber = localStorage.clickcount;
        if (taskInput.value.trim() !== ""){         //! -Checks if the input field is not empty
            
            let li = document.createElement("li");  //* -creates a new <li> element
            li.className = "task";                  //* -Sets class of new task to 'task'
            li.textContent = taskInput.value;       //* -sets task text to the value entered in the input field
            taskList.appendChild(li);               //* - adds task to list
            
            window.localStorage.setItem(taskNumber, JSON.stringify (taskInput.value));    
            updateUI();
            
            //! clears input field after adding task
            taskInput.value = "";
        // clickCounter();
        }
        clickCounter();
    };

    taskList.onclick = function(event){                 //! runs when item is clicked
        if (event.target.tagName === "LI") {                //* checks if element is an <li>
            event.target.classList.toggle("completed");     //* toggles the "completed" class on the clicked task
            // window.confirm("Completed?");
        }
    };

    highlightTasksButton.onclick = function(){                  //! runs when item is clicked
        let tasks = document.getElementsByClassName("task");    //! get all elements with the class "task"
        for (let i=0; i < tasks.length; i++){
            tasks[i].style.backgroundColor = "yellow";   //* loops through each task and changes BG color to yellow
        }
    };

    removeCompletedButton.onclick = function(){         //! runs when item is clicked        
        let completedTasks = document.querySelectorAll(".completed");   //* gets all elemeents with class "completed"
        for (let i=0; i < completedTasks.length; i++){
            completedTasks[i].remove();                     //* loops through each completed task and removes from DOM
        }
    };

// ! getTasks - the button should add all tasks in local storage to the task list
    document.getElementById('getTasks').addEventListener('click', function() {
    let keys = JSON.parse(localStorage.getItem())
    let values = JSON.parse(keys).value;
    // document.getElementById('ls-currently').textContent = task[0];
});
// getTasks = () => {
//     localStorage.getItem(keys);
// }
// ! ------------------------------------------------------------------------------------------------------------

//     function clickCounter() {
//         if (typeof(Storage) !== "undefined") {
//           if (localStorage.clickcount) {
//             localStorage.clickcount = Number(localStorage.clickcount)+1;
//           } else {
//             localStorage.clickcount = 1;
//           }
//           document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//         } else {
//           document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//         }
//       }
// });
});