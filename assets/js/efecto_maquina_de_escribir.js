document.addEventListener("DOMContentLoaded", function () {
    let text = "Romario Torres Jimenez";
    let i = 0;
    let speed = 150; // Velocidad de escritura (ms)

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typewriter").textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            document.getElementById("typewriter").style.borderRight = "none"; // Oculta el cursor al terminar
        }
    }

    document.getElementById("typewriter").textContent = ""; // Limpia el contenido antes de escribir
    typeWriter();
});
