document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-link");
    const borderDiv = document.createElement("div");
    borderDiv.classList.add("border");

    // Obtiene la ruta actual relativa al proyecto (elimina el prefijo del proyecto)
    const currentPath = window.location.pathname.replace("/proyecto-holistica", "");

    // links.forEach((link) => {
    //     // Convierte el atributo 'href' del enlace en una ruta absoluta relativa al documento actual
    //     const linkPath = new URL(link.getAttribute("href"), window.location.origin).pathname;

    //     // Normaliza el linkPath eliminando el prefijo del proyecto
    //     const normalizedLinkPath = linkPath.replace("/proyecto-holistica", "");

    //     // Compara las rutas normalizadas
    //     if (currentPath === normalizedLinkPath) {
    //         link.classList.add("active"); // Agrega la clase active al enlace correspondiente
    //         link.appendChild(borderDiv);
    //     }
    // });

    // Inicializacion AOS
    AOS.init({
        duration: 1200,
    });
});
