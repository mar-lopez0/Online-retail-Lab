function login() {
    const login = document.createElement("section");
    login.className = "contenedor-login";

    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-login";

    const encabezado = document.createElement("div");
    encabezado.className = "encabezado-login";

    const flechaAtras = document.createElement("span");
    flechaAtras.className = "flecha-atras";
    flechaAtras.textContent = "←";
    encabezado.appendChild(flechaAtras);

    const titulo = document.createElement("h2");
    titulo.textContent = "Welcome Back!";
    encabezado.appendChild(titulo);

    const subtitulo = document.createElement("p");
    subtitulo.textContent = "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
    encabezado.appendChild(subtitulo);

    const textoLogin = document.createElement("p");
    textoLogin.className = "texto-login";
    textoLogin.textContent = "LOG IN";
    encabezado.appendChild(textoLogin);

    const formulario = document.createElement("form");
    formulario.className = "formulario-login";

    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email address";
    formulario.appendChild(labelEmail);

    const emailContainer = document.createElement("div");
    emailContainer.className = "input-con-icono";

    const emailIcon = document.createElement("span");
    emailIcon.textContent = "✉";
    emailContainer.appendChild(emailIcon);

    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.placeholder = "hlo@geeta.co";
    emailContainer.appendChild(emailInput);

    formulario.appendChild(emailContainer);

    const labelPass = document.createElement("label");
    labelPass.textContent = "Password";
    formulario.appendChild(labelPass);

    const passContainer = document.createElement("div");
    passContainer.className = "input-con-icono";

    const passIcon = document.createElement("span");
    passIcon.textContent = "🔒";
    passContainer.appendChild(passIcon);

    const passInput = document.createElement("input");
    passInput.type = "password";
    passInput.placeholder = "Enter your password";
    passContainer.appendChild(passInput);

    formulario.appendChild(passContainer);

    const opciones = document.createElement("div");
    opciones.className = "opciones-login";

    const checkLabel = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    checkLabel.appendChild(check);
    checkLabel.appendChild(document.createTextNode(" Remember me"));

    const forgot = document.createElement("a");
    forgot.href = "#";
    forgot.textContent = "Forgot Password?";

    opciones.appendChild(checkLabel);
    opciones.appendChild(forgot);
    formulario.appendChild(opciones);

    const botonLogin = document.createElement("button");
    botonLogin.type = "submit";
    botonLogin.className = "boton-login";
    botonLogin.textContent = "LOG IN";
    formulario.appendChild(botonLogin);

    const cuentaTexto = document.createElement("p");
    cuentaTexto.className = "texto-cuenta";
    cuentaTexto.appendChild(document.createTextNode("Not registered yet? "));

    const cuentaLink = document.createElement("a");
    cuentaLink.href = "#";
    cuentaLink.textContent = "Create an Account";
    cuentaTexto.appendChild(cuentaLink);

    formulario.appendChild(cuentaTexto);

    tarjeta.appendChild(encabezado);
    tarjeta.appendChild(formulario);
    login.appendChild(tarjeta);

    return login;
}

document.body.appendChild(login());