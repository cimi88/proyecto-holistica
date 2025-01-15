document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault(); // Evita el comportamiento por defecto del enlace
          
          const targetId = this.getAttribute('href').substring(1); // Obtener el ID de destino
          const targetElement = document.getElementById(targetId);
          const navbarHeight = document.getElementById('navbar').offsetHeight; // Altura del navbar
          
          
          window.scrollTo({
              top: targetElement.offsetTop - navbarHeight, // Ajustamos el desplazamiento
              behavior: 'smooth' // Scroll suave
            });
        });
    });

    // Inicializacion AOS
    AOS.init();
});
