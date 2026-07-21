// Espera a que el HTML esté cargado antes de tocar la página.
document.addEventListener("DOMContentLoaded", function () {

    /* ---------- Año actual en el pie ----------
       Así no hay que editar el año a mano cada enero. */
    const anio = document.getElementById("anio");
    if (anio) {
        anio.textContent = new Date().getFullYear();
    }

});