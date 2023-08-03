login = prompt("Type your login")
password = prompt("Type your password")

if(login === "zhamal" && !password === "2004"){
    document.write("<h1>Добро пожаловать!</h1>")
}else{
    document.write("<h1>Неправильный логин или пароль</h1>")
}