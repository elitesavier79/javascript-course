// membuat object di javascript ada 2 cara 
//1. memgunakan Object literal

const person = {
	firstName :"Dicky",
	lastName : "Swardi",
	age : 40,
	Nationality: "Indonesia"
}

//2.mengunakan keyword object
const person2 = new Object();
person2.firstName = "Darren";
person2.lastName = "Swardi";
person2.age = "11";
person2.Nationality="Indonesia";

console.log (person)
console.log(person2)

//cara mengakses data/value di dalam sebuah object
//cara braket notation

const namaDepan = person["firstName"];


//cara not notation

const namaDepan2 = person2.firstName;
console.log(namaDepan)
console.log(namaDepan2)

//nasted object

const person3 = {
	name: {
		firstName :"vincent",
		lastName : "Swardi",
	},
	
	age : 5,
	Nationality: "Indonesia"
}
	const personName = person3.name.firstName;

	console.log(personName)



