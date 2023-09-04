//Alerta na primeira página
alert("Hello World!");

//Primeiro Hello World que aparece na página
document.write("Hello World!");

//Hello World dentro do article no primeiro p
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("li").innerHTML = "Hello World!";
});

//Primeiro botão
function button1() {
    return document.getElementById("button1").innerHTML = "Hello World!";
  };

//print hello world
console.log("Hello World!");

//Aparecer no h1 do html
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("demo").innerHTML = "Hello world!";
});

//Atribuindo uma variável e inserindo no body
var textNode = document.createTextNode("Hello World!");
document.body.appendChild(textNode);

//Atribuinndo uma variável e imprimindo no console
var mensagem = "Hello World!";
console.log(mensagem);

//Criando uma função para printar o hello world
function sayHello() {
  alert("Hello World!");
}
sayHello();

//Criando uma arrow function
var sayHello = '';
var sayHello = () => {
  alert("Hello World!");
};
sayHello();

//Usando uma função IIFE
(function() {
  console.log("Hello World!");
})();



