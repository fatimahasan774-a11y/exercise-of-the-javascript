const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");

document.addEventListener("DOMContentLoaded", loadTasks);


function loadTasks(){
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task =>{

        addTaskToDom(task)

    })



}

todoForm.addEventListener("submit", addTask);

function addTask(e){
        e.preventDefault()


        const taskText = todoInput.value.trim();
        // console.log(taskText)

        if(taskText){
            const task ={
                id : Date.now(),
                Text : taskText,
                completed: false

            }
        addTaskToDom(task)
        saveTaskToLocalStorage(task)

        }
    
}
function addTaskToDom(task){

    const li = document.createElement("li");
    li.className= `todo-item  ${task.completed ? "completed" : ""}`;
    li.dataset.id = task.id;


li.innerHTML = `
<input type="checkbox" class="completed.checkbox">
        <span class="task">${task.Text}</span>
        <span class="edit-btn">Edite</span>
        <span class="delete-btn">Delete</span>`;

        todolist.appendChild(li);
        attachEventListeners(li, task);

}

function attachEventListeners(li,tasks){

    const deletebtn = li.querySelector(".delete-btn")
    const editebtn = li.querySelector(".edit-btn")
    deletebtn.addEventListener("click", function(){
        handleDelete(tasks.id, li)

    });

    editebtn.addEventListener("click", function(){
        handleEdite(tasks.id, li)
    })
}
function handleEdite(taskId,li){

const taskSpan =li.querySelector(".task");
console.log(taskSpan.textContent)

const newTaskText = prompt("edite your task", taskSpan.textContent);

if(newTaskText !== null && newTaskText.trim() !== ""){

    taskSpan.textContent = newTaskText;

}

}
function handleDelete(id, li){
    let tasks =getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.id != id);


    localStorage.setItem("tasks", JSON.stringify(tasks));
    li.remove();
}


function saveTaskToLocalStorage(task){

 const oldtasks = getTasksFromLocalStorage();
 
    oldtasks.push(task);

   localStorage.setItem("tasks", JSON.stringify(oldtasks));
}

function getTasksFromLocalStorage(){
     const oldtasks =JSON.parse(localStorage.getItem("tasks")) || [];


     return oldtasks;

}




