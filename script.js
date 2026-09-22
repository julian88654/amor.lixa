/* =========================================
   ELEMENTOS
========================================= */

const fondo = document.getElementById("fondo");
const sobre = document.getElementById("sobre");
const abrir = document.getElementById("abrir");

const floresBtn = document.getElementById("flores");
const corazonesBtn = document.getElementById("corazones");
const nocheBtn = document.getElementById("noche");

const floresContainer = document.getElementById("floresContainer");
const corazonesContainer = document.getElementById("corazonesContainer");
const particulas = document.getElementById("particulas");

const textoCarta = document.getElementById("textoCarta");
const estrellas = document.getElementById("estrellas");

/* =========================================
   TEXTO DE LA CARTA
========================================= */

const mensaje =
    "Que cada día tenga un pequeño motivo para sonreír, " +
    "que nunca falten momentos bonitos y que siempre " +
    "encuentres algo especial en las cosas sencillas. " +
    "Esta pequeña sorpresa es para recordarte lo especial " +
    "que pueden ser los pequeños detalles. 🌻";

/* =========================================
   ABRIR CARTA
========================================= */

let cartaAbierta = false;
let escribiendo = false;

abrir.addEventListener("click", () => {

    if (!cartaAbierta) {

        cartaAbierta = true;

        sobre.classList.add("abierto");

        abrir.innerHTML = "💌 Cerrar carta";

        escribirCarta();

        crearFlores(12);
        crearParticulas(30);

    } else {

        cartaAbierta = false;

        sobre.classList.remove("abierto");

        abrir.innerHTML = "💌 Abrir carta";
    }
});

/* =========================================
   ESCRIBIR CARTA
========================================= */

function escribirCarta() {

    if (escribiendo) return;

    escribiendo = true;

    textoCarta.textContent = "";

    let posicion = 0;

    const intervalo = setInterval(() => {

        textoCarta.textContent += mensaje[posicion];

        posicion++;

        if (posicion >= mensaje.length) {

            clearInterval(intervalo);

            escribiendo = false;
        }

    }, 25);
}

/* =========================================
   CREAR FLORES
========================================= */

function crearFlores(cantidad = 10) {

    for (let i = 0; i < cantidad; i++) {

        setTimeout(() => {

            const flor = document.createElement("div");

            flor.classList.add("flor");

            const tipos = [
                "🌻",
                "🌼",
                "🌻",
                "🌼"
            ];

            flor.textContent =
                tipos[Math.floor(Math.random() * tipos.length)];

            flor.style.left =
                Math.random() * 100 + "%";

            flor.style.fontSize =
                (20 + Math.random() * 25) + "px";

            flor.style.animationDuration =
                (5 + Math.random() * 5) + "s";

            floresContainer.appendChild(flor);

            setTimeout(() => {
                flor.remove();
            }, 10000);

        }, i * 150);
    }
}

/* =========================================
   BOTÓN FLORES
========================================= */

floresBtn.addEventListener("click", () => {

    crearFlores(25);

    crearParticulas(20);
});

/* =========================================
   CREAR CORAZONES
========================================= */

function crearCorazones(cantidad = 15) {

    for (let i = 0; i < cantidad; i++) {

        setTimeout(() => {

            const corazon =
                document.createElement("div");

            corazon.classList.add("corazon");

            const tipos = [
                "💛",
                "💛",
                "✨",
                "🌻"
            ];

            corazon.textContent =
                tipos[Math.floor(Math.random() * tipos.length)];

            corazon.style.left =
                Math.random() * 100 + "%";

            corazon.style.fontSize =
                (18 + Math.random() * 22) + "px";

            corazon.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            corazonesContainer.appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 7000);

        }, i * 100);
    }
}

/* =========================================
   BOTÓN CORAZONES
========================================= */

corazonesBtn.addEventListener("click", () => {

    crearCorazones(30);
});

/* =========================================
   PARTÍCULAS
========================================= */

function crearParticulas(cantidad = 20) {

    for (let i = 0; i < cantidad; i++) {

        setTimeout(() => {

            const particula =
                document.createElement("div");

            particula.classList.add("particula");

            particula.style.left =
                Math.random() * 100 + "%";

            particula.style.top =
                (40 + Math.random() * 40) + "%";

            particula.style.animationDuration =
                (2 + Math.random() * 3) + "s";

            particulas.appendChild(particula);

            setTimeout(() => {
                particula.remove();
            }, 5000);

        }, i * 60);
    }
}

/* =========================================
   MODO NOCHE
========================================= */

nocheBtn.addEventListener("click", () => {

    fondo.classList.toggle("noche");

    if (fondo.classList.contains("noche")) {

        nocheBtn.innerHTML = "☀️ Modo día";

    } else {

        nocheBtn.innerHTML = "🌙 Modo noche";
    }
});

/* =========================================
   ESTRELLAS
========================================= */

function crearEstrellas(cantidad = 70) {

    for (let i = 0; i < cantidad; i++) {

        const estrella =
            document.createElement("div");

        estrella.classList.add("estrella");

        estrella.style.left =
            Math.random() * 100 + "%";

        estrella.style.top =
            Math.random() * 100 + "%";

        estrella.style.animationDelay =
            Math.random() * 3 + "s";

        estrellas.appendChild(estrella);
    }
}

crearEstrellas();

/* =========================================
   CLIC EN LA PANTALLA
========================================= */

document.addEventListener("click", (e) => {

    /* No crear efecto cuando se presiona un botón */

    if (e.target.closest("button")) {
        return;
    }

    crearParticulaEnPosicion(
        e.clientX,
        e.clientY
    );
});

/* =========================================
   PARTÍCULA EN EL PUNTO DEL CLIC
========================================= */

function crearParticulaEnPosicion(x, y) {

    for (let i = 0; i < 6; i++) {

        const particula =
            document.createElement("div");

        particula.classList.add("particula");

        particula.style.left = x + "px";
        particula.style.top = y + "px";

        particula.style.transform =
            `translate(${Math.random() * 50 - 25}px,
                       ${Math.random() * 50 - 25}px)`;

        particulas.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 4000);
    }
}

/* =========================================
   EFECTO AL MOVER EL MOUSE
========================================= */

let ultimoEfecto = 0;

document.addEventListener("mousemove", (e) => {

    const ahora = Date.now();

    if (ahora - ultimoEfecto < 100) {
        return;
    }

    ultimoEfecto = ahora;

    if (Math.random() > 0.7) {

        const brillo =
            document.createElement("div");

        brillo.classList.add("particula");

        brillo.style.left =
            e.clientX + "px";

        brillo.style.top =
            e.clientY + "px";

        brillo.style.width = "4px";
        brillo.style.height = "4px";

        particulas.appendChild(brillo);

        setTimeout(() => {
            brillo.remove();
        }, 2500);
    }
});

/* =========================================
   FLORES AUTOMÁTICAS
========================================= */

setInterval(() => {

    if (Math.random() > 0.45) {

        crearFlores(1);
    }

}, 2500);

/* =========================================
   ANIMACIÓN INICIAL
========================================= */

setTimeout(() => {

    crearFlores(8);
    crearParticulas(15);

}, 800);