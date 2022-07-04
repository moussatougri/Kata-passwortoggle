const toggle = document.querySelector("#togglePassword");
  const passwordInput = document.querySelector("#pass");




function passwordToggle() {
  
  if (passwordInput.type === "password") {
    passwordInput.removeAttribute("type")
    passwordInput.setAttribute("type", "text");
    console.log(passwordInput)
  }
  else {
    passwordInput.removeAttribute("type")
    passwordInput.setAttribute("type", "password");
    console.log(passwordInput);
  }
}


toggle.addEventListener('click', passwordToggle);