// Selectors

// Event Listners
document
  .querySelector(".form-submit")
  .addEventListener("submit", handleSubmitForm);
// getTodos fuction will exuecute when page load
// Event lister for page loaging DOMContentLoaded
document.addEventListener("DOMContentLoaded", getTodos);

let type = document.getElementById("type").textContent;

// handleSubmitForm will execute when a form is submited
function handleSubmitForm(event) {
  //to avoid page referes when from is submited
  // page referesing when form  is submited is browser default
  event.preventDefault();

  // copying value of title and description to variable title and description
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let form = document.querySelector(".form-submit");
  let todo;

  // checking if titel feild or description feild is empty
  if (title != "" && description != "") {
    // Creating a object todo and storeing value of title and description to  todo
    const todo = {
      title: title,
      description: description,
      type: type,
    };
    // Saveing  todo object to localSotrage
    saveToLocal(todo);
    console.log(todo);
  }
  // Reseting form feildes
  form.reset();
}

// code for saveing to localStorage
function saveToLocal(todo) {
  //CHECKING ALREADY HAVE A VALUE
  let todos;
  // if localstorage  is empty a new array todos is created
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
  // values already in the localstorage is copied to todos
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  // adding the latest todo to the array todos
  todos.push(todo);
  // Saveing latest todos array to localstorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Fuction for listing todo cards
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // flitering cards according to todo type
    if (todo.type === type) {

      let ul = document.querySelector("ul");
      let li = document.createElement("li");

      // Code for genrating a card item
      li.innerHTML = `
      <span class="title">${todo.title}</span>
      <div class="description"> ${todo.description}</div>
      `;
      li.classList.add("cards");
      li.classList.add("card");
      ul.appendChild(li);
    }
  });
}
