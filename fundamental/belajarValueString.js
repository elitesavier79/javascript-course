let string1 = "ini penulisan value string pakai tanda petik dua";
let string2 = 'ini penulisan value string pakai tanda petik satu'
let string3 = `ini penulisan value string pakai backtic`; 

let multiLineString1 = "ini adalah paragraph 1\ndan ini adalah paragraph 2";
let multiLineString2 = `Ini adalah paragraph dengan backtic 
Dan ini adalah paragraph2`;

let firstName = "Bambang";
let lastName = "pamungkas";
let angka = "79";

//string concatenates
let namaLengkap = firstName +' '+ lastName+" "+angka;

//string concantenates dengan backtic
let namaLengkap2 = `${firstName} ${lastName} ${angka}`;


console.log(namaLengkap);