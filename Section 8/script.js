const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting

  // perform validation
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all fields.");
    return;
  }

  if (!validateEmail(emailInput.value)) {
    emailInput.classList.add("error");
    return;
  }

  // if validation passes, submit the form
  alert("Form submitted successfully!");
  form.submit();
});

function validateEmail(email) {
  // regular expression for validating email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// remove error class from email input when user corrects their email
emailInput.addEventListener("input", function() {
  if (emailInput.classList.contains("error") && validateEmail(emailInput.value)) {
    emailInput.classList.remove("error");
  }
});
