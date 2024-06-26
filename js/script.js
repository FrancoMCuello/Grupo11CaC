const consultas = [];

const form = document.querySelector("form");
const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const emailI = document.querySelector("#email");
const phoneI = document.querySelector("#phone");
const motivoContacto = document.querySelector("#motivoContacto");
const medioContacto = document.querySelector("#medios-contact");

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
  }

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = firstname.value.trim();
    const lastName = lastname.value.trim();
    const email = emailI.value;
    const phone = phoneI.value.trim();
    const motivo = motivoContacto.value.trim();
    const medioContact = medioContacto.value.trim();

    let erroresValidation = false;

    if (name.length < 2) {
       
        erroresValidation = true;

        const error = document.querySelector('.error');
        error.textContent = ("El nombre debe contener al menos 3 caracteres.");

        setTimeout(() => {
            error.textContent = "";
        }, 3000);

    } 

    if (!erroresValidation) {
       // console.log(name);
        const consulta = {
            id: Date.now(),
            name: name,
            lastName: lastName,
            email: email,
            phone: phone,
            motivoContacto: motivo,
            medioContacto: medioContact,
            complete: false, 
        };
        

        consultas.push(consulta);
        console.log(consultas);

        document.getElementById("mensajeExito").style.display = "flex";

        form.reset();

        //crear cartel de formulario enviado correctamente
    };

  


 });

 





