// get the header element and add a class to it
var header = document.getElementById("header");
header.classList.add("header-style");

// set a new attribute on the title element
var title = document.getElementById("title");
title.setAttribute("data-subtype", "sub");

// get the attribute value of the title element
var dataType = title.getAttribute("data-type");
console.log("Data type attribute value: " + dataType);

// remove the disabled attribute from the button element
var button = document.getElementById("btn-click");
button.removeAttribute("disabled");

// check if the button element has the disabled attribute
var hasDisabled = button.hasAttribute("disabled");
console.log("Button has disabled attribute: " + hasDisabled);
