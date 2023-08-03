const removeString = (arr) =>{
    return arr.filter((element) => typeof element != "string")
}

const arrayBefore = [1, 2, 3, 4, 'hello', 5, 'world', 6]
const arrayAfter = removeString(arrayBefore)

document.write(arrayAfter)