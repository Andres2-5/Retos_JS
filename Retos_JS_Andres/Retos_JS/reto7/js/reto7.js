// 1. Reglas de Validación
const number = /[0-9]{1,15}/ 
const text = /^[a-z A-ZñÑá-úÁ-Ú]{2,50}/
const emai = /^[a-zA-Z0-9._%+-]+@misena\.edu\.co$/;
const pass=/^[A-Za-z\d@$!%*?&0-9]{8,30}$/;

let flag

// DOCUMENTO IDENTIDAD
// 2. Accedder a los elementos que se van a alterar
const form = document.getElementById('formulariovalida')
const numDocumento = form.numDocumento.value
// Acceder al feedback
const f1 = document.querySelector('#numDocumento .feedback')

form.numDocumento.addEventListener('input',e=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")
    if (number.test(e.target.value)) {
        // Regla pasa a la validación
            form.numDocumento.classList.remove('is-invalid');
            form.numDocumento.classList.add('is-valid');
            f1.style.visibility='hidden';
            f1.style.opcaity='0';
            flag = true
    } else {
        // Regla no pasa la validación
        form.numDocumento.classList.remove('is-valid');
        form.numDocumento.classList.add('is-invalid');
        f1.textContent = "Solo puede digitar valores numericos con una longintud minima de 1 caracter y maxima de 15"
        f1.style.visibility='visible';
        f1.style.opacity='1';
        flag = false
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()

    if (form.numDocumento.value=null || form.numDocumento.value==0 || flag==false) {
        alert("Debe ingresar el documento valido")
        form.numDocumento.focus()
        form.numDocumento.setAttribute("class","from-control error");
    }else {
        form.submit()
    }
})

// NOMBRE
const nom = form.nom.value;
const f2 = document.querySelector('#nombre .feedback')

form.nom.addEventListener('input',e=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")
    if (text.test(e.target.value)) {
        // Regla pasa a la validación
            form.nom.classList.remove('is-invalid');
            form.nom.classList.add('is-valid');
            f2.style.visibility='hidden';
            f2.style.opcaity='0';
            flag = true
    } else {
        // Regla no pasa la validación
        form.nom.classList.remove('is-valid');
        form.nom.classList.add('is-invalid');
        f2.textContent = "Solo puede ingresar datos alfabeticos"
        f2.style.visibility='visible';
        f2.style.opacity='1';
        flag = false
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()

    if (form.nom.value=null || form.nom.value==0 || flag==false) {
        alert("Debe ingresar el nombre completo")
        form.nom.focus()
        form.nom.setAttribute("class","from-control error");
    }else {
        form.submit()
    }
})

// APELLIDO
const apellido = form.apell.value;
const f3 = document.querySelector('#apellido .feedback')

form.apell.addEventListener('input',e=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")
    if (text.test(e.target.value)) {
        // Regla pasa a la validación
            form.apell.classList.remove('is-invalid');
            form.apell.classList.add('is-valid');
            f3.style.visibility='hidden';
            f3.style.opcaity='0';
            flag = true
    } else {
        // Regla no pasa la validación
        form.apell.classList.remove('is-valid');
        form.apell.classList.add('is-invalid');
        f3.textContent = "Solo puede ingresar datos alfabeticos"
        f3.style.visibility='visible';
        f3.style.opacity='1';
        flag = false
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()

    if (form.apell.value=null || form.apell.value==0 || flag==false) {
        alert("Debe ingresar el apellido completo")
        form.apell.focus()
        form.apell.setAttribute("class","from-control error");
    }else {
        form.submit()
    }
})

// FECHA NACIMIENTO


// EMAIL
const email = form.email.value;
const f4 = document.querySelector('#email .feedback')

form.email.addEventListener('input',e=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")
    if (emai.test(e.target.value)) {
        // Regla pasa a la validación
            form.email.classList.remove('is-invalid');
            form.email.classList.add('is-valid');
            f4.style.visibility='hidden';
            f4.style.opcaity='0';
            flag = true
    } else {
        // Regla no pasa la validación
        form.email.classList.remove('is-valid');
        form.email.classList.add('is-invalid');
        f4.textContent = "Solo puede ingreser correo @misena.edu.co"
        f4.style.visibility='visible';
        f4.style.opacity='1';
        flag = false
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()

    if (form.email.value=null || form.email.value==0 || flag==false) {
        alert("Correo invalido")
        form.email.focus()
        form.email.classList.add("is-invalid");
    }else {
        form.submit()
    }
})

// PASSWORD
const password = form.password.value;
const f5 = document.querySelector('#password .feedback')

form.password.addEventListener('input',e=>{
    e.preventDefault()
    console.log("Se esta escribiendo sobre el input")
    if (pass.test(e.target.value)) {
        // Regla pasa a la validación
            form.password.classList.remove('is-invalid');
            form.password.classList.add('is-valid');
            f5.style.visibility='hidden';
            f5.style.opcaity='0';
            flag = true
    } else {
        // Regla no pasa la validación
        form.password.classList.remove('is-valid');
        form.password.classList.add('is-invalid');
        f5.textContent = "Ingrese una contraseña segura y que contenga minimo 10"
        f5.style.visibility='visible';
        f5.style.opacity='1';
        flag = false
    }
})

form.addEventListener("submit", e=>{
    e.preventDefault()

    if (form.password.value=null || form.password.value==0 || flag==false) {
        alert("Contraseña poco segura")
        form.password.focus()
        form.password.classList.add("is-invalid");
    }else {
        form.submit()
    }
})

// CONFIRMAR PASSWORD