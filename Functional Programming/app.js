const changeHeadingTitle = (title) => {
	const Heading = document.querySelector(".heading-title");

	if (typeof title === 'string') {
		Heading.innerHTML = title;
	} else {
		alert("input kamu harus string")
	}
	
}

changeHeadingTitle("Javascript is cool")