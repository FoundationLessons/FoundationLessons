function recall() {
    age = prompt("Enter your age!")
    strToNum = Number(age)
    if(strToNum > 0){
        document.write(`${age}` + `<h3>is your age</h3>`)
    }else {
        alert("Type your age again")
        recall()
    }
}

console.log(recall())