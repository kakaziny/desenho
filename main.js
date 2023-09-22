let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;

// Elemento para selecionar a cor
let mudancaDeCor = document.getElementById("mudancaDeCor");

// Defina a cor inicial do contexto de desenho
contexto.strokeStyle = mudancaDeCor.value;

// Ouvinte de evento para mudança de cor
mudancaDeCor.addEventListener("input", function() {
    contexto.strokeStyle = mudancaDeCor.value;
});

canvas.addEventListener("mousedown", function (event) {
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
});

canvas.addEventListener("mousemove", function (event) {
    if (desenhando) {
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
});

canvas.addEventListener("mouseup", function (event) {
    desenhando = false;
});

