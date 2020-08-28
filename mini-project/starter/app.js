const todoForm = document.querySelector("#todo-form");//untuk mengambil form input
const todoInput = document.querySelector("#todo-input");// untuk mengambil tek input nya
const filterInput = document.querySelector("#filter-input");// untuk mengambil test yang ada di filter tasks
const todoList = document.querySelector("#todo-list");//untuk menampilkan list yg di pilih
const clearButton = document.querySelector("#clear-todos");



//AddEventListener adalah Merupakan method yang berfungsi untuk membuat event (click, change, mouseout, dll) untuk keperluan manipulasi DOM.
todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
clearButton.addEventListener("click", clearTodos)
filterInput.addEventListener("keyup", filterTodos)


//ini bagian dari DOM function
function addTodo(e) {
	e.preventDefault();

	if(todoInput.value) {

	//membuat li element
	const li = document.createElement("li")

	//menambahkan class pada element li
	li.className = "todo-item list-group-item d-flex justify-content-between align-items-center mb-1"

	//menambahkan children ke dlm element li
	li.appendChild(document.createTextNode(todoInput.value))


	//membuat delete button
	const a = document.createElement("a");

	//memberi properti untuk a element
	a.href = "#";
	a.className = "badge badge-danger delete-todo"
	a.innerHTML = "Delete";

	//menyelipkan element a ke dlm children li
	li.appendChild(a)

	//memasukan element li ke dlm element todolist
	todoList.appendChild(li)
	
	addTodoLocalStorage(todoInput.value);
	todoInput.value = "" //untuk membuat todo input jadi kosong

	} else {
		alert("Not Empty Input !!! ")
	}
}

function addTodoLocalStorage(todoInputValue) {
	let todos;

	if(localStorage.getItem("todos") == null) {
		todos = [];
	}else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	
	todos.push(todoInputValue)
	localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteTodo(e) {
	e.preventDefault();

	if(e.target.classList.contains("delete-todo")) {
		if(confirm("Are You Sure delete this todo?")){
		const parent = e.target.parentElement;

		parent.remove()
		}
	}

}

function clearTodos () {
	todoList.innerHTML = ""
}

function filterTodos (e) {
	const filterText = e.target.value.toLowerCase();
	const todoItems = document.querySelectorAll(".todo-item")

	todoItems.forEach((item) => {
		const itemText = item.firstChild.textContent.toLowerCase();
	console.log(itemText)

		if(itemText.indexOf(filterText) !== -1 ) {
			item.setAttribute("style", "display: block;");

		} else {
			item.setAttribute("style", "display: none !important;")
		}
	
	})

}



