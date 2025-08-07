export function banner() {
let div = document.createElement('div');
div.className = "div-banner";

let span = document.createElement('span');
span.textContent = "Geeta.";
div.appendChild(span);

let aBoton = document.createElement('a');
aBoton.className = "a-boton";
aBoton.textContent = "SHOP NOW";
aBoton.href = "../Componente/pages/login/login.html";
div.appendChild(aBoton);

return div;
}