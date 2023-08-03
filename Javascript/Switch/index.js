const obj = {
    login: "jamol",
    password: 2004
}

function isAdmin(prop){
    while(prop.login !=prompt("Type your login")){
        alert("Incorrect login type again")
    }
    while(prop.password !=prompt("Type your password")){
        alert("Incorrect password type again")
    }
    document.write('<h1 style="color:green; text-align:center;">Welcome admin!</h1>')
}

isAdmin(obj)