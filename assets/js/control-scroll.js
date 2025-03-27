// Seleccionamos el menú y el contenedor aside

const menu = document.querySelector('.layout__menu');
const asideScrollbar = document.querySelector('.layout__aside');

// Función para aplicar el color secundario
function applyScrollbarStyle() {
    asideScrollbar.style.setProperty('--color-scroll', 'var(--color-scroll2)');
}

// Función para restaurar el color original
function removeScrollbarStyle() {
    asideScrollbar.style.setProperty('--color-scroll', '#ffffff');
}

// Al pasar el mouse sobre el menú o hacer clic en él
menu.addEventListener('mouseenter', applyScrollbarStyle);
menu.addEventListener('click', applyScrollbarStyle);

// Al quitar el mouse del menú
menu.addEventListener('mouseleave', removeScrollbarStyle);

// Aplicar el estilo cuando se cargue una nueva página
window.addEventListener('DOMContentLoaded', function() {
    // Si la página cambia o se vuelve a cargar, aplicar el estilo inmediatamente
    applyScrollbarStyle();
});
