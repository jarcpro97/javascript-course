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