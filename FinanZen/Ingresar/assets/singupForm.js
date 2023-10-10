import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

import { auth } from "../../app/firebase.js";

const singupForm = document.querySelector('#singup-form');

singupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const firstname = singupForm ['fname'].value
    const lastname = singupForm ['lname'].value
    const email = singupForm ['validationEmail'].value
    const phone = singupForm ['validationPhone'].value
    const password = singupForm ['validationPassword'].value

    console.log(firstname, lastname, email, phone, password)

    try{
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredentials)

    // Enviar el formulario de crear cuenta y redireccionar a otra parte
    singupForm.reset()
    window.location.href = "../helloWorld.html"

    } catch (error){
        console.log(error)
    }
})