// get all boxes
const boxes = document.querySelectorAll('.box');

// add event listener to each box for click event
boxes.forEach(box => {
	box.addEventListener('click', handleClick);
});

// handle click event
function handleClick(event) {
	const box = event.target;
	box.style.backgroundColor = 'pink';
}

// create observer instance
const observer = new MutationObserver(handleMutation);

// define the callback function
function handleMutation(mutationsList) {
	for (const mutation of mutationsList) {
		if (mutation.type === 'childList') {
			console.log('A box has been added or removed from the container!');
		}
	}
}

// observe the container for changes to its child nodes
const container = document.querySelector('.container');
observer.observe(container, { childList: true });

// add a box to the container after 3 seconds
setTimeout(() => {
	const newBox = document.createElement('div');
	newBox.classList.add('box');
	newBox.textContent = 'New Box';
	container.appendChild(newBox);
}, 3000);
