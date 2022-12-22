const torresmou = () =>{

    alertify.alert("Você escolheu o torresmo!","Você escolheu se transformar no maior bovino do planeta terra. Aquele que rivalizou com boi tatá e bumbá juntos formando um duo contra ele. O boi Henrique Torres que os derrotou fazendo call de banho com a karen  ")

    const audio = document.querySelector("#audioTorresmo")
    audio.play()


}

const escolher = () =>{

    const argola2 = document.querySelector("#argola2")
    argola2.id = "argola2mover"
    setTimeout(function (){

        argola2.id = "argola2"

    },1000)

}