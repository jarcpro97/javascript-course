let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    'mejor-pelicula': 'Endgame'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Latitud:', personaje.coords.lat);
console.log('No de trajes:', personaje.trajes.length);
console.log('Traje 1:', personaje.trajes[0]);

const x = 'vivo';
console.log('Vivo:', personaje[x])
console.log('Mejor pelicula:', personaje["mejor-pelicula"])

// eliminar propiedad
delete personaje.edad;
console.log(personaje);

personaje.casado = true;
console.log({personaje});

// Congelar el objeto para evitar cambios
Object.freeze(personaje);

personaje.casado = false; // No tendrá efecto
personaje.dinero = 1000000; // No tendrá efecto

console.log('Objeto congelado:', personaje);


// Convertir en un array de entradas
let entradas = Object.entries(personaje);
console.log({entradas});

// Crear un array de propiedades
let propiedades = Object.keys(personaje);
console.log({propiedades});

// Crear un array de valores
let valores = Object.values(personaje);
console.log({valores});