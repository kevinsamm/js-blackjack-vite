import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck.
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} Retorna un nuevo deck.
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length == 0) 
        throw new Error('tiposDeCartas es obligatorio como arreglo de strings');

    if (!tiposEspeciales || tiposEspeciales.length == 0) 
        throw new Error('tiposEspeciales es obligatorio como arreglo de strings');
    
    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for(let tipo of tiposDeCarta) { 
            deck.push(i + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for(let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}