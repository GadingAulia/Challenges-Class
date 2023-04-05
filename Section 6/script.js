function changeStyle() {
	// get the div element
	var div = document.getElementById("myDiv");

	// change the background color and text color
	div.style.backgroundColor = "green";
	div.style.color = "white";

	// add CSS classes to the element
	div.classList.add("blue");
	div.classList.add("bold");

	// get the computed style of the element
	var style = window.getComputedStyle(div);
	console.log(style.backgroundColor);
	console.log(style.color);

	// get and set the width and height of the element
	var width = div.offsetWidth;
	var height = div.offsetHeight;
	console.log("Width: " + width + "px");
	console.log("Height: " + height + "px");
}
