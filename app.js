document.querySelector("form").addEventListener("submit", handleSubmitForm);

document.addEventListener("DOMContentLoaded", getTodos);

let type = document.getElementById("type").textContent;
let form = document.querySelector(".form");
// console.log(form.classList);
document.querySelector(".add-btn").addEventListener("click", function () {
  console.log("Add button is clicked");
});

function handleSubmitForm(event) {
  event.preventDefault();

  // copying value of title and description to variable title and description
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let todo;

  if (title != "" && description != "") {
    // Creating and storeing value of title and description to Object todo
    const todo = {
      title: title,
      description: description,
      type: type,
      // Genrating random id
      id: (id = (Date.now() + "").slice(-10)),
    };
    // Saveing  todo object to localSotrage
    saveToLocal(todo);
    console.log(todo);
  }
  document.getElementById("form").reset();
}

// code for saveing to localStorage
function saveToLocal(todo) {
  //CHECKING ALREADY HAVE A VALUE
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    // flitering card according to todo type
    if (todo.type === type) {
      // Code for genrating a list item
      let ul = document.querySelector("ul");
      let li = document.createElement("li");

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
