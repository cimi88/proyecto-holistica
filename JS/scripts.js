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

        // Al pasar el mouse sobre el enlace
        anchor.addEventListener("mouseover", function () {
            // Verifica si ya existe el borde
            let borde = this.querySelector('.link-bottom-border');
            if (!borde) {
                borde = document.createElement("div");
                borde.classList.add("link-bottom-border");
                this.appendChild(borde);

                // Fuerza un estado inicial para que se registre correctamente la transición
                requestAnimationFrame(() => {
                    borde.style.width = "0%"; // Asegura el estado inicial
                    requestAnimationFrame(() => {
                        borde.style.width = "100%"; // Activa la transición
                    });
                });
            } else {
                // Si el borde ya existe, simplemente activa la transición
                borde.style.width = "100%";
            }
        });

        // Al mover el mouse fuera del enlace
        anchor.addEventListener("mouseout", function () {
            const borde = this.querySelector('.link-bottom-border');
            if (borde) {
                borde.style.width = "0%"; // Activa la transición de salida
            }
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
    if (window.innerWidth <= 425) {
        cardCurso.setAttribute("data-aos", "anim-fade-down");
    } else {
        cardCurso.setAttribute("data-aos", "anim-fade-left");
    }

});
