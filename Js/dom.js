// Js/script.js
let objeto ={
    nombre: "Obed", saludar: function(){
        setTimeout(() => {
            console.log( `Hola soy ${this.nombre} ` ) ;
        }, 1000);
    },
};

objeto.saludar();

let titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.style.color = "red";

let parrafos = document.getElementsByTagName("p");
console.table(parrafos);
Array.from(parrafos).forEach((el, idx) =>{
    el.innerText = "Texto " + (idx + 1);
});

let parrafos2 = document.getElementsByClassName("parrafo");
parrafos2[1].style.backgroundColor = "greenyellow";
parrafos2[1].innerHTML = "<p>Nuevo parrafo <p> "

let parrafo = document.querySelector(".parrafo");
parrafo.className = "nuevo-parrafo";


let parrafo_nuevo = document.createElement("p");
parrafo_nuevo.innerText = "Este parrafo tiene un emoji ☠️";
document.body.appendChild(parrafo_nuevo);

console.log(parrafo_nuevo);

let h1 = document.createElement("h1");
h1.innerText = "Titulo dinamico";
let hr = document.createElement("hr");

parrafo_nuevo.prepend(h1);
parrafo_nuevo.parentElement.appendChild(hr);

let padre_parrafo = parrafo.parentElement;
console.log(padre_parrafo);

let lista = document.createElement("ol");
for (let i = 1; i <= 5; i++){
    let item = document.createElement("li");
    item.innerText = `Elemento ${i}`;
    lista.appendChild(item);
}

padre_parrafo.appendChild(lista);

//Codogo que sirve para borrar elementos documentarizados
/*
let ultimo_parrafo = document.querySelector("p:last-child");
ultimo_parrafo.remove();
*/
/*
let parrafo = document.querySelector("p");
2 document.body.removeChild(parrafo);
*/
/*
let nodo = document.body;

while (nodo.firstChild) {
 nodo.removeChild(nodo.firstChild);
 }
*/
//document.body.innerHTML = "";