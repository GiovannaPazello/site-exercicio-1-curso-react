//Alerta na primeira página
alert("Hello World!");

//Primeiro Hello World que aparece na página
document.write("Hello World!");

//Hello World dentro do article no primeiro p
//Por que o getElementById não funciona?
document.getElementById("text").innerHTML = "Hello World!";

//Aparece o hello world depois que clica no botão
function button2() {
    return document.getElementById("button2").innerHTML = "Hello World!"
  };

//Primeiro botão
function button1() {
    return document.getElementById("button1").innerHTML = "Hello World!";
  };

//print hello world
console.log("Hello World!");

//Por quê não funciona?
const myElement = document.getElementById("li");
document.getElementById("demo").innerHTML = myElement.innerHTML;


