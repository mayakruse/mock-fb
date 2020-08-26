

const item = document.getElementById("item");
const button = document.querySelector("#postbtn");
const ul = document.querySelector(".todo-list");


button.addEventListener("click", addPost);

function addPost(event) {
   const todoDiv = document.createElement("div");
   todoDiv.classList.add("hiding-div");

   const newTodo = document.createElement("li");
   newTodo.classList.add("new-todo");

   newTodo.innerText = item.value;

   todoDiv.appendChild(newTodo);
    ul.appendChild(todoDiv);


    item.value = "";
}