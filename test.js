//! /////////////////////////////////////////////////////////////////////
//! --------------------------- VARIABLES -------------------------------
//! /////////////////////////////////////////////////////////////////////
const ul = document.querySelector('ul'); //* Selects all <ul> tags
const input = document.getElementById('item') //* Selects all input field tags

const list = document.getElementById('to-do-list');
const listCont = document.getElementById('list-container');

const history = document.getElementById('history');
const historyCont = document.getElementById('history-container')

const addItem = document.getElementById('addItem');

// * NAVBAR
const homeButton = document.getElementById('home');
const archiveButton = document.getElementById('archive');

//* /////////////////////////////////////////////////////////////////////
//* ------------------------------ ARRAYS -------------------------------
//* //////////////////////////////////////////////////////////////////// 

let taskArray = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []; //* creates an empty array named 'tasks'

let completedArray = localStorage.getItem('completed') ? JSON.parse(localStorage.getItem('completed')) : [];

//* //////////////////////////////////////////////////////////////////// 
//* //////////////////////////////////////////////////////////////////// 
//* //////////////////////////////////////////////////////////////////// 

let storedData = JSON.parse(localStorage.getItem('tasks'));

taskArray.forEach(addTask);
completedArray.forEach(addCompleted);


//* /////////////////////////////// WORKING - DON'T TOUCH!!! //////////////////////////////////////
//* /////////////////////////////// WORKING - DON'T TOUCH!!! //////////////////////////////////////
//* /////////////////////////////// WORKING - DON'T TOUCH!!! //////////////////////////////////////


// ? TO-DO LIST - crossing off list
list.onclick = function(event) {
    const li = document.querySelector('li');
    let taskIndex = taskArray.lastIndexOf(event.target.textContent);
    let completedIndex = completedArray.lastIndexOf(event.target.textContent);
    let task = taskArray.lastIndexOf(event.target.textContent);
        
        if(event.target.className === 'completed'){
            event.target.classList.toggle("completed");
            taskArray.push(event.target.textContent);
            completedArray.pop(event.target.textContent);
            localStorage.setItem('tasks', JSON.stringify(taskArray))
            localStorage.setItem('completed', JSON.stringify(completedArray));
        } 
        
        else if(event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
            taskArray.splice(taskIndex, 1);
            completedArray.push(event.target.textContent);
            localStorage.setItem('tasks', JSON.stringify(taskArray));
            localStorage.setItem('completed', JSON.stringify(completedArray));
        }
};

//? ADD TASK BUTTON
function add() {
        taskArray.push(input.value);
        localStorage.setItem('tasks', JSON.stringify(taskArray));
        addTask(input.value);
        input.value = ""
    }
function addTask(text) {
    const li = document.createElement('li')
    li.textContent = text;
    ul.appendChild(li);
}


//? ADD COMPLETED TASK TO HISTORY 
function addCompleted(text){
    
    const li = document.createElement('li');

    li.textContent = text;
    history.appendChild(li);
    }


//? REMOVE COMPLETED BUTTON
function removeCompleted(){
    let i = 0;
    let completed = list.querySelectorAll('.completed');
    let text = completed[i].textContent;
    let index = taskArray.indexOf(text);

    for (let i = 0; i < completed.length; i++){
        completed[i].remove();
    }
    location.reload();
}

//? CLEAR ALL BUTTON
function delAll() {
    // localStorage.clear('tasks');
    ul.innerHTML = "";
    taskArray = [];
    location.reload();
}


//? CLEAR HISTORY BUTTON
// * WORKS  /////////////////////////////////////
function clearHistory() {                 //* //
    localStorage.removeItem('completed');//* //
    history.innerHTML = "";            //* //
    location.reload();
}                                     //* //
//* ///////////////////////////////////////

// ? ENTER button event
// * WORKS  ////////////////////////////////////////////////
input.addEventListener('keypress', function(event) { //* //
    if(event.key === 'Enter'){                      //* //
        event.preventDefault();                    //* //
        addItem.click();                          //* //
    }                                            //* //
});                                             //* // 
//* /////////////////////////////////////////////////                                   


//? HISTORY PAGE
// * WORKS  ///////////////////////////////////////////
goArchive = () =>{                              //* //
    archiveButton.classList.toggle('clicked');  //* /
    listCont.classList.toggle('hide');         //* /
    historyCont.classList.toggle('show');     //* /
}                                            //* /
// * ////////////////////////////////////////////

// ? COMPARE ARRAYS - not used
compareArrays = (a, b) => {
    console.log(a);
    console.log(b);

    for (let i = 0; i < a.length; i++){
        if (a[i] === b[i]){
            return a[i]
            a.splice(i, 1)
        }
    }
};
//* /////////////////////////////////////////////////////////////////////////////////////////////////////// 
//* /////////////////////////////////////////////////////////////////////////////////////////////////////// 


// ! -- OLD CODE DON'T TOUCH --
    // function addCompleted(text){
    
    //     const li = document.createElement('li');
    
    //     li.textContent = text;
    //     history.appendChild(li);
    // const completed = list.getElementsByClassName('completed');
    // completed.textContent = text;

    // completedArray.push(completed.textContent);
    // localStorage.setItem('completed', JSON.stringify(completedArray));
    // history.appendChild(text);
// }
    // !-------------------------------------------------








// ! CLICK TO COMPLETE TASK - backup code, do NOT delete!
// list.onclick = function(event) {
//     const li = document.querySelector('li');
//     // let index = completedArray.indexOf(event.target.textContent);

//     if(event.target.className === 'completed'){
//         event.target.classList.toggle("completed");
//         if(li.textContent === event.target.textContent){
//             history.innerHTML = "";
//         }
//         completedArray.pop(event.target.textContent);
        
//         localStorage.setItem('completed', JSON.stringify(completedArray));
//     } else if(event.target.tagName === "LI") {
//         event.target.classList.toggle("completed");
//         addCompleted(event.target.textContent);
//         completedArray.push(event.target.textContent);
//         localStorage.setItem('completed', JSON.stringify(completedArray));
//         }
    
//         // if(completedArray.value === event.target.textContent){
//         //     localStorage.removeItem(event.target.textContent);
//         // }
//         // localStorage.setItem('completedTasks', JSON.stringify(completedArray));
//         // history
    
// };
// completedArray.forEach(removeCompleted);
// !-------------------------------------------------

