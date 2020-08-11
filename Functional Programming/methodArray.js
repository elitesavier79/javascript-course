//array Methods

const array = [1,2,3,4,5]

/*Push method => digunakan untuk menambah/add element/value baru di akhir array
array.push(6)


//Pop method => digunakan untuk menghilangkan/remove element/value di akhir array
array.pop()

//Unshift method => digunkan untuk menambah/add element/value di awal array
array.unshift(0)

//Shift method => digunakan untuk menghilang/remove element/value di awal array
array.shift()

//Slice method =>digunkan untuk mengambil sebagian dari urutan element/value dalam array
let angka = array.slice(1, 5) // slice(index yg ambil,  jumlah index yg diambil)

console.log(angka)

//Splice method =>digunakan untuk merubah isi dari array 
array.splice(1, 3)

array.splice(1, 1, 2)

//Foreach method =>method dari array yang memerima parameter sebuah function atau callback 
array.forEach(coba)

function coba(value){
	console.log(value + ' buah')
} */


//Map method =>sama kyk forEach tapi map mengembalikan nilai Array baru

const perkalian = array.map(kali)

function kali (value) {
	return value * 2
}

console.log(perkalian)