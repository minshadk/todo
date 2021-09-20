// // Selectors
// document.addEventListener("DOMContentLoaded", getTodos);

// document.querySelector("form").addEventListener("submit", handleSubmitForm);

// let type = document.getElementById("type").textContent;
// console.log(type);

// let form = document.querySelector(".form");
// // console.log(form.classList);
// document.querySelector(".add-btn").addEventListener("click", function () {
//   console.log("Add button is clicked");
// });

// document.querySelector(".add-btn").addEventListener("click", function () {
//   console.log("BTn Cliked");
//   form.classList.remove("d-none");
// });

// // New code

// class Todo {
//   date = new Date();
//   // Gerating random id
//   id = (Date.now() + "").slice(-10);
//   status = "incomplete";
//   // clicks = 0;
//   constructor(title, description, type) {
//     this.title = title;
//     this.description = description;
//     this.type = type;
//   }
// }

// function handleSubmitForm(event) {
//   event.preventDefault();

//   let title = document.getElementById("title").value;
//   let description = document.getElementById("description").value;
//   let todo;

//   // console.log(type);
//   if (title != "" && description != "") {
//     // addTodo(title, description);
//     console.log("if is working")
//     todo = new Todo(title, description, type);
//     saveToLocal(todo);
//     console.log(todo);
//   }
//   document.getElementById("form").reset();
// }

// // Helpers
// function addTodo(title, description) {
//   let ul = document.querySelector("ul");
//   let li = document.createElement("li");

//   li.innerHTML = `
//     <span class="title">${title}</span>
//     <div class="description"> ${description}</div>
//     `;

//   li.classList.add("cards");
//   li.classList.add("card");
//   ul.appendChild(li);
// }

// function saveToLocal(todo) {
//   //CHECKING ALREADY HAVE A VALUE
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     // todos = [{ title: "", discription: "" }];
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }

//   todos.push(todo);
//   localStorage.setItem("todos", JSON.stringify(todos));
// }

// function getTodos() {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     // todos = [{ title: "", discription: "" }];
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
//   todos.forEach(function (todo) {
//     if (todo.type === "planed") {
//       console.log(todo.description);
//     } else {
//       console.log("if is not working");
//     }
//   });
//   todos.forEach(function (todo) {
//     if (todo.type === type) {
//       let ul = document.querySelector("ul");
//       let li = document.createElement("li");

//       li.innerHTML = `
//       <span class="title">${todo.title}</span>
//       <div class="description"> ${todo.description}</div>
//       `;

//       li.classList.add("cards");
//       li.classList.add("card");
//       ul.appendChild(li);
//     }
//   });
// }
// Selectors
document.querySelector("form").addEventListener("submit", handleSubmitForm);

document.addEventListener("DOMContentLoaded", getTodos);

let type = document.getElementById("type").textContent;
console.log(type);

let form = document.querySelector(".form");
// console.log(form.classList);
document.querySelector(".add-btn").addEventListener("click", function () {
  console.log("Add button is clicked");
});

document.querySelector(".add-btn").addEventListener("click", function () {
  console.log("BTn Cliked");
  form.classList.remove("d-none");
});

function handleSubmitForm(event) {
  event.preventDefault();

  let title = document.getElementById("title").value;
  console.log(title);
  let description = document.getElementById("description").value;
  let todo;

  console.log(type);
  if (title != "" && description != "") {
    // addTodo(title, description);

    // todo = new Todo(title, description, type);

  const todo = { title: title, description: description, type: type ,id:  id = (Date.now() + "").slice(-10)};
    saveToLocal(todo);
    console.log(todo);
  }
  document.getElementById("form").reset();
}

// Helpers
function addTodo(title, description) {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");

  li.innerHTML = `
    <span class="title">${title}</span>
    <div class="description"> ${description}</div>
    `;

  li.classList.add("cards");
  li.classList.add("card");
  ul.appendChild(li);
}

function saveToLocal(todo) {
  //CHECKING ALREADY HAVE A VALUE
  let todos;
  if (localStorage.getItem("todos") === null) {
    // todos = [{ title: "", discription: "" }];
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Class ___________

class Todo {
  date = new Date();
  // Gerating random id
  id = (Date.now() + "").slice(-10);
  status = "incomplete";
  // clicks = 0;
  constructor(title, description, type) {
    this.title = title;
    this.description = description;
    this.type = type;
  }
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    // todos = [{ title: "", discription: "" }];
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    if (todo.type === "planed") {
      console.log(todo.description);
    } else {
      console.log("if is not working");
    }
  });
  todos.forEach(function (todo) {
    if (todo.type === type) {
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
