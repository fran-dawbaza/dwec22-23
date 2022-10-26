const a = {
    letra: 'a',
    numero: 34,
    objeto: {
        nombre: 'Pepito',
        direccion: {
            calle: 'Los Claveles',
            numero: 's/n',
            ciudad: 'Baza',
        }
    }
};

function clonaObjetoCompletamente (objeto) {
    
    const resultado = Array.isArray(objeto) ? [] : {};

    for (let key in objeto) {
        if (typeof Array.isArray(objeto[key])){
            resultado[key] = clonaObjetoCompletamente(objeto[key]);
        }
        else if (typeof objeto[key] === 'object') {
            resultado[key] = clonaObjetoCompletamente(objeto[key]);
        }
        /// ...
        else { // si es primitivo
            resultado[key] = objeto[key];
        }
    }
    return resultado;
}

const b = clonaObjetoCompletamente(a);
b.objeto.direccion.calle='Isaac Peral';
console.log(a);
console.log(b);