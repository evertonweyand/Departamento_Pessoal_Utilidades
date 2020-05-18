<script>
function Menor_Valor(vlr1, vlr2) { 
    return Math.min(vlr1, vlr2);
}

function casas_decimais_2(valor){
    var svalor = valor.toString();

    if (svalor.indexOf('.') !== -1){
        var int = svalor.substring( 0, svalor.indexOf('.'));
        var dec = svalor.substring( svalor.indexOf('.'), svalor.indexOf('.')+3);
        return Number( int + dec );
    }
    else {
        return valor;
    }
}

function casasDecimais(num, precisao) {
    var casas = Math.pow(10, precisao);
    return Math.floor(num * casas) / casas;
};

const faixa1_vlr  = 1045.00;
const faixa1_aliq =    7.50;
const faixa2_vlr  = 2089.60;
const faixa2_aliq =    9.00;
const faixa3_vlr  = 3134.40;
const faixa3_aliq =   12.00;
const faixa4_vlr  = 6101.06;
const faixa4_aliq =   14.00;

var aBC_INSS = document.querySelector('base_calculo'); //parseFloat(window.prompt('Digite a base de cálculo do I.N.S.S: '))
alert(aBC_INSS);
var Resultado = 0;

//Faixa 1
if (aBC_INSS > 0) {
    var bcFaixa  = casas_decimais_2( Menor_Valor(aBC_INSS, faixa1_vlr).toFixed(3) );
    var vlrFaixa = casas_decimais_2( (bcFaixa * faixa1_aliq / 100 ).toFixed(3) );
    Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);

    document.writeln(`BC Faixa1: ${bcFaixa}` +'<br>')
    document.writeln(`VL Faixa1: ${vlrFaixa}`+'<br>')
    document.writeln(`T  Faixa1: ${Resultado}`+'<br><br>')
}
    
//Faixa 2
if (aBC_INSS > faixa1_vlr) {
    var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa2_vlr) - faixa1_vlr).toFixed(3) );
    var vlrFaixa = casas_decimais_2( (bcFaixa * faixa2_aliq / 100).toFixed(3) );
    Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);
    
    document.writeln(`BC Faixa2: ${bcFaixa}`+'<br>')
    document.writeln(`VL Faixa2: ${vlrFaixa}`+'<br>')
    document.writeln(`T  Faixa2: ${Resultado}`+'<br><br>')
}
    
//Faixa 3
if (aBC_INSS>faixa2_vlr) {
    var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa3_vlr) - faixa2_vlr).toFixed(3) );
    var vlrFaixa = casas_decimais_2( (bcFaixa * faixa3_aliq / 100).toFixed(3) );
    Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);

    document.writeln(`BC Faixa3: ${bcFaixa}`+'<br>')
    document.writeln(`VL Faixa3: ${vlrFaixa}`+'<br>')
    document.writeln(`T  Faixa3: ${Resultado}`+'<br><br>')
}

//Faixa 4
if (aBC_INSS>faixa3_vlr) {
    var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa4_vlr) - faixa3_vlr).toFixed(3) );
    var vlrFaixa = casas_decimais_2( (bcFaixa * faixa4_aliq / 100).toFixed(3) );
    Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);

    document.writeln(`BC Faixa4: ${bcFaixa}`+'<br>')
    document.writeln(`VL Faixa4: ${vlrFaixa}`+'<br>')
    document.writeln(`T  Faixa4: ${Resultado}`+'<br><br>')
}

document.write('<h2 class="titulo_no_centro">Contribuição devida: '+Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})+'</h2>')

</script>
