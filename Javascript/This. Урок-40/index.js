let obj ={
    user: "John",
    language: 'en',
    translations: {
        en: "Welcome",
        fr: "Bienvenue",
        ru: "Добро пожаловать",
    },
    greet: function(){
        input = prompt("Type en, ru or fr")
        if(input == "en"){
            document.write(this.translations.en , " " + obj.user)
        }else if(input == "fr"){
            document.write(this.translations.fr , " " + obj.user)
        }else if(input == "ru"){
            document.write(this.translations.ru , " " + obj.user)
        }else{
            document.write("<h1>You are deeply wrong!</h1>")
        }
    }
}

obj.greet()