alert('Bienvenidos a la clase de JavaScript');





function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

function pedirNota(mensaje) {
    let nota;
    while (true) {
        nota = Number(prompt(mensaje));
        if (!isNaN(nota) && nota >= 1 && nota <= 10) {
            break;
        } else {
            alert("Por favor, ingrese una nota válida entre 1 y 10.");
        }
    }
    return nota;

}

function cargarAlumnos() {
    // Solicitar la cantidad de alumnos
    let cantidadDeAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos:"));

    for (let i = 0; i < cantidadDeAlumnos; i++) {
        // Pedir el nombre del alumno
        let nombreAlumno = prompt(`Ingrese el nombre del alumno ${i + 1}:`);

        // Pedir tres notas para el alumno con validación
        let nota1 = pedirNota(`Ingrese la nota 1 para ${nombreAlumno} (entre 1 y 10):`);
        let nota2 = pedirNota(`Ingrese la nota 2 para ${nombreAlumno} (entre 1 y 10):`);
        let nota3 = pedirNota(`Ingrese la nota 3 para ${nombreAlumno} (entre 1 y 10):`);

        // Calcular el promedio utilizando la función calcularPromedio
        let promedio = calcularPromedio(nota1, nota2, nota3);

        // Mostrar el resultado
        console.log(`El promedio de ${nombreAlumno} es: ${promedio}`);
    }
}

// Llamar a la función principal
cargarAlumnos();