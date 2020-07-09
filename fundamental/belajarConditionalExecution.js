//conditional Execution

//let umur = Number(prompt("tulisakan tahun lahirmu..."));

/*contoh memngunakan if else
//if (2020 - umur < 17) {
	//alert("Maaf..Kamu belum cukup umur")
//} else {
	//alert("Selamat datang Brother...")
//}


//contoh mengunakan if else if
/*if (2020 - umur <17){
	alert("kamu masih kecil")
} else if (2020 - umur >17 && 2020 - umur <40){
	alert("kamu sudah dewasa")
} else if (2020 - umur >40){
	alert("kamu sudah Tua")
} else {
	alert("who are You ???")
}*/

//contoh mengunakan TERNARY
//2020 - umur < 17 ? alert("Maaf,... kamu belum cukup umur") : alert("selamat datang Brother..")

//contoh mengunkan SWITCH CASE
let cuaca =prompt("Bagaimana cuaca hari ini")
switch (cuaca) {
	case "mendung":
		alert ("jangan lupa bawa payung");
		break;
	case "panas":
		alert("jangan lupa berjemur");
		break;
	case "berawan":
		alert("silakan main di luar");
		break;
	case "hujan":
		alert("jangan main di luar nanti sakit")
		break;
	default:
		alert ("bisa baca nggak !!!!... ?");
		break;

}

