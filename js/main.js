let cuestionario = [
    {
        pregunta: "¿Qué es una milanesa?",
        opciones: [
            "Un plato de comida",
            "Un trago con durazno y gin",
            "Una flor originaria del Sur argentino.",
            "Una herramienta."
        ],
        correcta: 0
    },
    {
        pregunta: "¿Cuáles son los ingredientes de una buena milanesa?",
        opciones: [
            "Pescado fresco, Arroz, Queso crema y Palta.",
            "Pure y Carne picada",
            "Harina, Huevo, Agua, Aceite y Sal.",
            "Carne, Pan rallado, Huevo, Ajo y Perejil."
        ],
        correcta: 3
    },
    {
        pregunta: "¿Cómo se llama la milanesa que tiene un huevo frito arriba?",
        opciones: [
            "Milanesa a Caballo.",
            "Milanesa sin Jinete.",
            "Milanesa Enhuevonada.",
            "Tapa Arterias 2000."
        ],
        correcta: 0
    },
    {
        pregunta: "¿De donde es originaria la milanesa?",
        opciones: [
            "Argentina",
            "Italia",
            "Egipto",
            "Uruguay"
        ],
        correcta: 1
    }
];

function pedir_num(texto, minimo, maximo) {
    let num = Number(prompt(texto));
    while (isNaN(num) || num < minimo || num > maximo) {
        alert("Por favor ingresa un número válido.");
        num = Number(prompt(texto));
    }
    return num;
}

function iniciarCuestionario() {
    let nPregunta = 0;
    let score = 0;

    function preguntar() {
        if (nPregunta < cuestionario.length) {
            const q = cuestionario[nPregunta];

            let promptTexto = `Pregunta ${nPregunta + 1}:\n${q.pregunta}\n`;
            q.opciones.forEach((option, index) => {
                promptTexto += `${index + 1}. ${option}\n`;
            });

            const respuesta = pedir_num(promptTexto, 1, q.opciones.length);

            if (respuesta - 1 === q.correcta) {
                score++;
            }
            nPregunta++;
            preguntar();
        } else {
            alert(`Obtuviste ${score} de ${cuestionario.length} preguntas correctas.`);
        }
    }

    preguntar();
}

class Jugador {
    constructor(nombre, colegio) {
        this.nombre = nombre;
        this.colegio = colegio;
    }
}

while (true) {
    iniciarCuestionario();

    if (confirm(`¿Quieres salir del programa?\n\nAceptar para salir\nCancelar para volver a empezar`)) {
        break;
    }
}
