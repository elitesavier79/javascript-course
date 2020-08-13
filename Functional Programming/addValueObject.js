//adding and mutating properties object
const person = {
	name: {
		firstName :"vincent",
		lastName : "frebiano",
	},
	age : 5,
	Nationality: "Indonesia"
}

person.hairColor ="brown"
person.name.surName = "Swardi"

console.log (person)
//catatan :
//jika di dlm sebuah object nama property belum ada maka dibuatkan property baru dan
//jika sudah ada maka value akan di replace/ganti

//firstName = key, "vincent" = value (key+value = properties dari sebua object)
