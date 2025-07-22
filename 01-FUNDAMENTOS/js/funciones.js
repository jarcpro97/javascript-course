// Ejemplo de función que imprime un saludo
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}

// Ejemplo de funcion anonima que imprime un saludo
const saludarAnonimo = function(nombre) {
    console.log( arguments);
    console.log(`Hola, ${nombre}`);
}

// Ejemplo funcion flecha que imprime un saludo
const saludarFlecha = (nombre) => {
    console.log(`Hola, ${nombre}`);
}


saludar('Tony Stark');
saludarAnonimo('Bruce Wayne');
saludarAnonimo('Clark Kent', 40, true, 'Superman');
saludarFlecha('Diana Prince');

// Ejemplo de función que retorna un saludo
function saludarRetorno(nombre) {
    return `Hola, ${nombre}`;
}   

// Ejemplo de función anónima que retorna un saludo
const saludarAnonimoRetorno = function(nombre) {
    return `Hola, ${nombre}`;
}

// Ejemplo de función flecha que retorna un saludo
const saludarFlechaRetorno = (nombre) => {
    return `Hola, ${nombre}`;
}

// Ejemplo de función flecha que retorna un saludo (simplificado)
const saludarFlechaSimplificado = nombre => `Hola, ${nombre}`;

// Ejemplo de funcion flecha con dos parámetros
const saludarFlechaDosParametros = (nombre, apellido) => `Hola, ${nombre} ${apellido}`;

const saludo = saludarRetorno('Peter Parker');
console.log(saludo);
const saludoAnonimo = saludarAnonimoRetorno('Wade Wilson');
console.log(saludoAnonimo);
const saludoFlecha = saludarFlechaRetorno('Natasha Romanoff');
console.log(saludoFlecha);
const saludoFlechaSimplificado = saludarFlechaSimplificado('Clint Barton');
console.log(saludoFlechaSimplificado);
const saludoFlechaDosParametros = saludarFlechaDosParametros('Steve', 'Rogers');
console.log(saludoFlechaDosParametros);


const aleatorio = () => Math.random();
console.log(aleatorio());

const date = () => new Date();
console.log(date());

const dateUtca = () => new Date().toUTCString();
console.log(dateUtca());

const datePlusFiveDays = () => {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + 5);
    return fecha;
};
console.log(datePlusFiveDays());

const datePlusHours = (hours=5) => {
    const fecha = new Date();
    fecha.setHours(fecha.getHours() + hours);
    return fecha;
};
console.log(datePlusHours());

