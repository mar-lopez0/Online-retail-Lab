function login() {
    let login = document.createElement('div');
    login.className = "login";

    // Titulo
    let titulo = document.createElement('h1');
    titulo.className = "login-title";
    titulo.textContent = "Geeta.";
    login.appendChild(titulo);

    // Subtitulo
    let subtitulo = document.createElement('p');
    subtitulo.className = "login-subtitle";
    subtitulo.textContent = "Create your fashion in your own way";
    login.appendChild(subtitulo);

    // Descripcion
    let descripcion = document.createElement('p');
    descripcion.className = "login-description";
    descripcion.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    login.appendChild(descripcion);

    // Contenedor de botones
    let btnContenedor = document.createElement('div');
    btnContenedor.className = "button-container";



    let loginBtn = document.createElement('button');
    loginBtn.className = "login-btn";
    loginBtn.textContent = "LOG IN";
    btnContenedor.appendChild(loginBtn);

    loginBtn.addEventListener('click',()=>{alert("Hola mundo")});
        


    let orText = document.createElement('div');
    orText.className = "or-text";
    orText.textContent = "--- OR ---";
    btnContenedor.appendChild(orText);

    let registroBtn = document.createElement('button');
    registroBtn.className = "register-btn";
    registroBtn.textContent = "REGISTER";
    btnContenedor.appendChild(registroBtn);

    login.appendChild(btnContenedor);

    return login;
}

document.body.appendChild(login());