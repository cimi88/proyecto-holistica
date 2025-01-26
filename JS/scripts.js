document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault(); // Evita el comportamiento por defecto del enlace

            const targetId = this.getAttribute("href").substring(1); // Obtener el ID de destino
            const targetElement = document.getElementById(targetId);
            const navbarHeight = document.getElementById("navbar").offsetHeight; // Altura del navbar

            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight, // Ajustamos el desplazamiento
                behavior: "smooth", // Scroll suave
            });
        });
    });

    // Inicializacion AOS
    AOS.init({
        once: true
    });

    // EmailJS
    const btn = document.getElementById("button");
    document.getElementById("form").addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Enviando...";

        const serviceID = "service_xqcuswe";
        const templateID = "contact_form";

        emailjs.sendForm(serviceID, templateID, this).then(
            () => {
                btn.value = "Enviar";
                alert("Gracias por tu consulta ♥️\nEn breve te estaremos respondiendo!");
            },
            (err) => {
                btn.value = "Enviar";
                alert(JSON.stringify(err));
            }
        );
    });

    // cambio en la animacion de AOS para pantalla con max-width: 425px
    const cardCurso = document.querySelector(".card-curso");
    if(window.innerWidth <= 425) {
        cardCurso.setAttribute("data-aos", "anim-fade-down");
    } else {
        cardCurso.setAttribute("data-aos", "anim-fade-left");
    }

});
