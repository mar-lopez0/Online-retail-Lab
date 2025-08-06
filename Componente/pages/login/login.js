export function login(){
    let login = document.createElement('div');
    login.className = "login";
    login.textContent = "Hola login";

    return login;
    
}

document.body.appendChild(login());