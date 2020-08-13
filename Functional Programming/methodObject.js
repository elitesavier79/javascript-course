//method Keys
const angka = {a: 1, b: 3, c: 2}

console.log(Object.keys(angka))


//method assign => mengabungkan dua object dan merger jadi satu object baru
const angka1 = {a: 1, b: 3, c: 2}
const angka2 ={c: 4, d: 9}


Object.assign (angka1,angka2)
Object.assign(angka2,angka1)

console.log(angka1)
console.log(angka2)