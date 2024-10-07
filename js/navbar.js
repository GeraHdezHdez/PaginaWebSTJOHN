document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL actual
    const currentPath = window.location.pathname;

    // Mapeo de rutas a los ID de los elementos del menú
    const navItems = {
        "/index.html": "nav-home",
        "/consultoria.html": "nav-consultoria",
        "/reportes.html": "nav-reportes",
        "/originacion.html": "nav-originacion",
        "/agricultura_r.html": "nav-agricultura"
    };

    // Remover la clase 'active' de todos los elementos del menú
    for (let key in navItems) {
        if (document.getElementById(navItems[key])) {
            document.getElementById(navItems[key]).classList.remove("active");
        }
    }

    // Añadir la clase 'active' al elemento correspondiente a la URL actual
    if (navItems[currentPath]) {
        document.getElementById(navItems[currentPath]).classList.add("active");
    }
});
