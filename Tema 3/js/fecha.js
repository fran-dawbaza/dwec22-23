function getWeekDay(fecha)  {
    const dias = ['SU', 'MO','TU','WE', 'TH', 'FR', 'SA'];
    if (!fecha || !fecha.getDay || typeof fecha.getDay !== 'function'){
        return '';
    }
    return dias[fecha.getDay()];
}

function getWeekDay2(fecha) {
    if (!fecha || !fecha.getDay || typeof fecha.getDay !== 'function'){
        return '';
    }
    return fecha.toString().slice(0,2).toUpperCase();
}

function getWeekDay3(fecha) {
    if (!fecha || !fecha.getDay || typeof fecha.getDay !== 'function'){
        return '';
    }
    let [a,b] = fecha.toString();
    return a + b.toUpperCase();
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
//alert( getWeekDay(date) );        // debería mostrar "TU"
//alert( getWeekDay2(date) );        // debería mostrar "TU"
//alert( getWeekDay3(date) );        // debería mostrar "TU"

const getLocalDay = fecha =>{
    if (!fecha || !fecha.getDay || typeof fecha.getDay !== 'function'){
        return '';
    }
    let dia = fecha.getDay();
    return dia === 0 ? 7 : dia;
}


const formatDate = fecha => {
    if (!fecha || !fecha.getDay || typeof fecha.getDay !== 'function'){
        return 'fecha incorrecta';
    }
    const diferencia = Date.now() - fecha.getTime();

    if (diferencia < 5 * 1000) {
        return 'ahora mismo';
    }
    else if (diferencia < 60*60 * 1000){
        return 'hace ' + Math.round(diferencia/60/1000) + ' minutos';
    }
    else if (diferencia < 24*60*60 * 1000){
        return 'hace ' + Math.round(diferencia/60/60/1000) + ' horas';
    }
    //...
    else {
        let dia = fecha.getDate()<10 ? '0'+fecha.getDate() : fecha.getDate();
        let mes = fecha.getMonth() <10 ? '0'+fecha.getMonth() : fecha.getMonth();
        let anio = String(fecha.getFullYear()).slice(-2);
        let horas = fecha.getHours()<10 ? '0'+fecha.getHours():fecha.getHours();
        let minutos = fecha.getMinutes()<10?'0'+fecha.getMinutes():fecha.getMinutes();
        
        return `${dia}.${mes}.${anio} ${horas}:${minutos}`;
    }
}

alert( formatDate(new Date(new Date - 1)) ); // "ahora mismo"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "hace 30 seg."

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "hace 5 min."

// la fecha de ayer en formato 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );