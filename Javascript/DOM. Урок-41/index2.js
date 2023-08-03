const num = document.getElementById('nmbr')


function submit(){

    if(num.value <= 12){
        document.write('<img src="dog.jpg" width = "450px" height="450px"/>' + "<br>")
    }else if(num.value > 12){
        document.write('<img src="horse.jpg" width = "450px" height="450px"/>' + "<br>")
    }

}
