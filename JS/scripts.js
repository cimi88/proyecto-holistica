document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const borderDiv = document.createElement("div");
    borderDiv.classList.add("border");

    // Obtiene la ruta actual relativa al proyecto (elimina el prefijo del proyecto)
    const currentPath = window.location.pathname.replace("/proyecto-holistica", "");

    links.forEach((link) => {
        // Convierte el atributo 'href' del enlace en una ruta absoluta relativa al documento actual
        const linkPath = new URL(link.getAttribute("href"), window.location.origin).pathname;

        // Normaliza el linkPath eliminando el prefijo del proyecto
        const normalizedLinkPath = linkPath.replace("/proyecto-holistica", "");

        // Compara las rutas normalizadas
        if (currentPath === normalizedLinkPath) {
            link.classList.add("active"); // Agrega la clase active al enlace correspondiente
            link.appendChild(borderDiv);
        }
    });



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
    AOS.init({
        duration: 1200,
    });
});
