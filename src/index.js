document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('create-task-form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoList(e.target.new-task-description.value)
    form.reset()
  })
});

function toDoList(list) {
  let p = document.createElement('p')
  let button = document.createElement('button')
  button.addEventListener('click', handleDelete)
  button.textContent = 'Delete'
  p.textContent = `${list}`
  p.appendChild(button)
  console.log(p)
  document.querySelector("tasks").appendChild(p)
}

function handleDelete(e){
  e.target.parentNode.remove()
}