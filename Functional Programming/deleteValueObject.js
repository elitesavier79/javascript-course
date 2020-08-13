const person = {
	name: {
		firstName :"vincent",
		lastName : "frebiano",
		surName: "Swardi",
	},
	age : 5,
	Nationality: "Indonesia"
}

delete person.name.surName;
console.log(person)
console.log(person.name.surName)