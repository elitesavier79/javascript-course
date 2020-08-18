const todoForm = document.querySelector("#todo-form");//untuk mengambil form input
const todoInput = document.querySelector("#todo-input");// untuk mengambil tek input nya
const filterInput = document.querySelector("#filter-input");// untuk mengambil test yang ada di filter tasks
const todoList = document.querySelector("#todo-list");//untuk menampilkan list yg di pilih
const clearButton = document.querySelector("#clear-todos");



//AddEventListener adalah Merupakan method yang berfungsi untuk membuat event (click, change, mouseout, dll) untuk keperluan manipulasi DOM.
todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
	e.preventDefault();

	//membuat li element
	const li = document.createElement("li")

	//menambahkan class pada element li
	li.className = "list-group-item d-flex justify-content-between align-items-center mb-1"

	//menambahkan children ke dlm element li
	li.appendChild(document.createTextNode(todoInput.value))


	//membuat delete button
	const a = document.createElement("a");

	//memberi properti untuk a element
	a.href = "#";
	a.className = "badge badge-danger"
	a.innerHTML = "Delete";

	//menyelipkan element a ke dlm children li
	li.appendChild(a)

	//memasukan element li ke dlm element todolist
	todoList.appendChild(li)

	console.log(li)
}