const firstName = prompt("Type your name")
const email = prompt("Type your email")
const password = prompt("Type your password")

let testFirstName = /^[a-z0-9_-]{3,15}$/.test(firstName)
let testEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/.test(email)
let testPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)

if (testFirstName) {
    alert("Correct username");
} else {
    alert("Wrong username");
}

if (testEmail) {
    alert("Correct email");
} else {
    alert("Wrong email");
}

if (testPassword) {
    alert("Correct password");
} else {
    alert("Wrong password");
}