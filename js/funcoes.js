function Menor_Valor(vlr1, vlr2) { 
    return Math.min(vlr1, vlr2);
}

function casas_decimais_2(valor){
    var svalor = valor.toString();

    if (svalor.indexOf('.') !== -1){
        var int = svalor.substring( 0, svalor.indexOf('.'));
        var dec = svalor.substring( svalor.indexOf('.'), svalor.indexOf('.')+3);
        return Number( int + dec );
    } else {
        return valor;
    }
}

function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};
