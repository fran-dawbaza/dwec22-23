"use strict";

saluda('Pepito');

function saluda(persona) {
    alert('Buenos días '+ persona);
}

saluda2('Manolito');

const saluda2 = function (persona) {
    alert('Buenos días '+ persona);
};