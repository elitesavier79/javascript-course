//Hoisting pada variable
// contoh 1

x=10; //=> assignment

console.log(x)

var x;//=> declaration 
//javascript melakukan hoisting

//Contoh 2

console.log(y)
var y = 20; // => initialination (melakukan declaration dan assignmet di satu baris)

//contoh 3
z = 50;
console.log(z)
var z = 20;

//Kesimpulan contoh 1 hasil nya 10
//			 contoh 2 hasil nya undefined
//			 contoh 3 hasil nya 50 bukan 20 
// ARTI NYA: JavaScript Hoisting hanya berlaku pada pendeklarasian saja, bukan pada inisialisasi.
// Jika sebuah variable dideklarasikan dan di inisialisasi setelah digunakan,
// maka hasilnya akan undefined


//Hoisting pada function
// contoh 1
console.log(myFunction())

function myFunction() {
	console.log("halo hoisting")
}
//hasil nya  halo hoisting


//contoh 2
console.log(myFunctionExp())

var myFunctionExp = function() {
	console.log("halo hoisting")
}
//hasil nya error myFunction is not a function karena isi undefined



