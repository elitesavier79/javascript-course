//array properties
//property LENGTH => gunakan untuk loop array

/*const array = [2,5,6,10,19,28] // untuk array index mulai dari 0
for (let i = 0; i < array.length ; i++) {
	array[i] = array[i] * 2
}

//console.log(array.length) => untuk length index mulai dari 

console.log(array[0] = "dua")
console.log(array) */


//array Methods

const array = [1,2,3,4,5]

/*Push method => digunakan untuk menambah/add element/value baru di akhir array
array.push(6)


//pop method => digunakan untuk menghilangkan/remove element/value di akhir array
array.pop()

//unshift method => digunkan untuk menambah/add element/value di awal array
array.unshift(0)

//shift method => digunakan untuk menghilang/remove element/value di awal array
array.shift()

//slice method =>digunkan untuk mengambil sebagian dari urutan element/value dalam array
let angka = array.slice(1, 5) // slice(index yg ambil,  jumlah index yg diambil)

console.log(angka)*/

//splice method =>digunakan untuk merubah isi dari array 
array.splice(1, 3)

array.splice(1, 1, 2)

console.log(array)