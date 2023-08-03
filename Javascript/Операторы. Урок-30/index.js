let num_1 = prompt("Enter first number")
let stringToNum = Number(num_1)
let num_2 = prompt("Enter second number")
let stringToNum2 = Number(num_2)
let operation = prompt("Enter the operation")


if(operation === "+"){
    document.write(`${stringToNum} + ${stringToNum2} = ${stringToNum + stringToNum2}`)
}else if(operation === "-"){
    document.write(`${stringToNum} - ${stringToNum2} = ${stringToNum - stringToNum2}`)
}else if(operation === "*"){
    document.write(`${stringToNum} * ${stringToNum2} = ${stringToNum * stringToNum2}`)
}else if(operation === "/"){
    document.write(`${stringToNum} / ${stringToNum2} = ${stringToNum / stringToNum2}`)
}