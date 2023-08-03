let age = prompt("Your age")
let stringToNum = Number(age)
let accesAllowed = (stringToNum < 9) ? document.write(`<img src="dog.png"/>`) : document.write("You are over 9 year old!")