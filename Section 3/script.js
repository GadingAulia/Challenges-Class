// Mendapatkan elemen orang tua
var parent = document.getElementById("parent");
console.log("Parent Element:");
console.log(parent);

// Mendapatkan anak-anak elemen
var children = parent.children;
console.log("Child Elements:");
console.log(children);

// Mendapatkan saudara kandung elemen
var sibling1 = document.getElementById("sibling-1");
var sibling2 = document.getElementById("sibling-2");
console.log("Sibling Elements:");
console.log(sibling1.previousElementSibling);
console.log(sibling2.nextElementSibling);
