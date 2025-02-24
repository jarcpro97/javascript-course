//crear array
let juegos = ['Zelda', 'Mario','Metroid', 'Chrono'];

//longitud del array
console.log('Largo:', juegos.length)

let primero = juegos[0];
let ultimo = juegos [juegos.length -1]

console.log({primero,ultimo})

//recorrer el array
juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento,indice,arr})
})

//agregar elemento al final
let nuevaLongitud = juegos.push('F-zero')
console.log({nuevaLongitud,juegos})

//agregar elemento al inicio
nuevaLongitud = juegos.unshift('Fire emblem')
console.log({nuevaLongitud,juegos})

//eliminar ultimo elemento
let juegoBorrado = juegos.pop()
console.log({juegoBorrado, juegos})

//eliminar elemento especifico
let pos = 1
let juegosBorrados = juegos.splice(pos,2)
console.log({ juegosBorrados, juegos})

//posición de un elemento
let metroidIndex = juegos.indexOf('Metroid')
console.log({metroidIndex})