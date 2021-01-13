// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });
let allTasks = [
  {
    "id":0,
    "description":"Surfing",
  }, 
  {
    "id":1,
    "description":"Snowboarding", 
  }
]

//function for DOM elements 
function addToTaskList(task){
  let ul = document.querySelector('#tasks')
  let li = document.createElement('li')
  li.textContent = task.description
  ul.appendChild(li)
}


//adding handles 
function handleSubmit(e){
  e.preventDefault() 
  let task = {
    "description": e.target.new_task.value
  }
  addToTaskList(task)
//adding event listeners
}


function addListeners(){
  // listener for sumbit form
  let form = document.querySelector('#create-task-form')
  form.addEventListener('submit',handleSubmit)
}

addListeners()
