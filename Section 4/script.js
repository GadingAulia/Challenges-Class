// Get the elements
const title = document.getElementById('title');
const paragraph = document.getElementById('paragraph');
const content = document.getElementById('content');
const createBtn = document.getElementById('btn-create');
const appendBtn = document.getElementById('btn-append');
const prependBtn = document.getElementById('btn-prepend');
const afterBtn = document.getElementById('btn-after');
const replaceBtn = document.getElementById('btn-replace');
const cloneBtn = document.getElementById('btn-clone');
const removeBtn = document.getElementById('btn-remove');

// Manipulate the elements
createBtn.addEventListener('click', function() {
	const newElement = document.createElement('p');
	newElement.textContent = 'New Paragraph';
	content.appendChild(newElement);
});

appendBtn.addEventListener('click', function() {
	const newElement = document.createElement('p');
	newElement.textContent = 'Appended Paragraph';
	content.appendChild(newElement);
});

prependBtn.addEventListener('click', function() {
	const newElement = document.createElement('p');
	newElement.textContent = 'Prepended Paragraph';
	content.insertBefore(newElement, content.firstChild);
});

afterBtn.addEventListener('click', function() {
	const newElement = document.createElement('p');
	newElement.textContent = 'New Paragraph After';
	paragraph.after(newElement);
});

replaceBtn.addEventListener('click', function() {
	const newElement = document.createElement('h2');
	newElement.textContent = 'New Title';
	content.replaceChild(newElement, title);
});

cloneBtn.addEventListener('click', function() {
	const clonedElement = paragraph.cloneNode(true);
	content.appendChild(clonedElement);
});

removeBtn.addEventListener('click', function() {
	content.removeChild(paragraph);
});
