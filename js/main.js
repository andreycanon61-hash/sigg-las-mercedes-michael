// Espera a que el HTML esté cargado antes de tocar la página.
document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Año actual en el pie ----------
       Así no hay que editar el año a mano cada enero. */
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

});

/* ---------- Aviso en los módulos que aún no existen ----------
       Mientras las páginas de cada módulo no estén construidas,
       el enlace no lleva a ninguna parte... */
    const enlaces = document.querySelectorAll('.modulo__enlace[aria-disabled="true"]');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (evento) {
            evento.preventDefault();

            const nombre = enlace.querySelector(".modulo__nombre").textContent;
            alert("El módulo «" + nombre + "» todavía está en construcción.");
        });
    });