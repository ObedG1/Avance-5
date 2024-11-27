/*let nombre = prompt("¿Como te llamas?");

if (nombre){
    alert(`Hola ${nombre}`);
}else{
    alert("anonimo");
}*/

let lista = document.getElementById("log");

function registro(texto){
    let item = document.createElement("li");
    item.innerText = texto;
    return item;
}

lista.appendChild(registro("DOM LOADED!"))

let timer = setTimeout(() => {
    lista.appendChild(registro("Timer ⌛ a los 3 segundos"));
}, 3000);

let repetidor = setInterval(() =>{
    lista.appendChild(registro("Cada 1.5 seg."));
}, 1500);

let activaTimerBtn = document.getElementById("activaTimer");
let StopBtn = document.getElementById("pararTimer");

activaTimerBtn.addEventListener("click", function(){
    lista.appendChild(registro("Inicia timer..."));
    //timer.setTimeout(3000);
})

StopBtn.addEventListener("click", function(){
    lista.appendChild(registro("Parar repetidor..."));
    clearInterval(repetidor);
})

console.table(location);
let secure = document.getElementById("secure");
if(location.protocol.value == 'https'){
    secure.innerText = "Seguro";
}else{
    secure.innerText = "No Seguro";
}
