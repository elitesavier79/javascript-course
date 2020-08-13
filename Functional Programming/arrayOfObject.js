const tugas = [
	{
		text: "Tugas1",
		isCompleted: false
	},

	{
		text: "Tugas2",
		isCompleted: true
	},

	{
		text: "Tugas3",
		isCompleted: false
	},

	{
		text: "Tugas4",
		isCompleted: true
	}
];

const uncompletedTugas = tugas.filter(saring); // cara 1`
function saring(value) {
	if (value.isCompleted === false) {
		return value
	}
}

const uncompletedTugas2 = tugas.filter(value =>{ // cara ke 2
	if (value.isCompleted === true) {
		return value
	}	
})
console.log (uncompletedTugas)
console.log (uncompletedTugas2)