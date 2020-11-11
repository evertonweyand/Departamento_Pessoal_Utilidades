// Não soube como fazer um import de funcoes.js

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

function zerar_campos(){
    for (var i = 1; i < 5; i++) {
        document.querySelector(`td#fx${i}_aliquota`) .innerText = 0;
        document.querySelector(`td#fx${i}_bc`)       .innerText = 0;
        document.querySelector(`td#fx${i}_tabinss`)  .innerText = 0;
        document.querySelector(`td#fx${i}_inss`)     .innerText = 0;
        document.querySelector(`td#fx${i}_acumulado`).innerText = 0;
        document.querySelector('h2#h2_result')       .innerText = 'Contribuição devida: '+Number(0).toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
     }
}

function calcular_inss(){

    zerar_campos();

    //Tabela do INSS
    const faixa1_vlr  = 1045.00;
    const faixa1_aliq =    7.50;
    const faixa2_vlr  = 2089.60;
    const faixa2_aliq =    9.00;
    const faixa3_vlr  = 3134.40;
    const faixa3_aliq =   12.00;
    const faixa4_vlr  = 6101.06;
    const faixa4_aliq =   14.00;
    
    var aBC_INSS = Number(document.querySelector('input#base_calculo').value.replace(',', '.') );
    var Resultado = 0;
    
    if (aBC_INSS>0){
        //Faixa 1
        document.querySelector('td#fx1_aliquota') .innerText = faixa1_aliq.toLocaleString('pr-BR', {style: 'decimal', currency: 'BRL'})+'%';
        document.querySelector('td#fx1_tabinss')  .innerText = faixa1_vlr.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        if (aBC_INSS > 0) {
            var bcFaixa  = casas_decimais_2( Menor_Valor(aBC_INSS, faixa1_vlr).toFixed(3) );
            var vlrFaixa = casas_decimais_2( (bcFaixa * faixa1_aliq / 100 ).toFixed(3) );
            Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);
                    
            document.querySelector('td#fx1_bc')       .innerText = bcFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx1_inss')     .innerText = vlrFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx1_acumulado').innerText = Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        }
        
        //Faixa 2
        document.querySelector('td#fx2_aliquota') .innerText = faixa2_aliq.toLocaleString('pr-BR', {style: 'decimal', currency: 'BRL'})+'%';
        document.querySelector('td#fx2_tabinss')  .innerText = faixa2_vlr.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        if (aBC_INSS > faixa1_vlr) {
            var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa2_vlr) - faixa1_vlr).toFixed(3) );
            var vlrFaixa = casas_decimais_2( (bcFaixa * faixa2_aliq / 100).toFixed(3) );
            Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);
            
            document.querySelector('td#fx2_bc')       .innerText = bcFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx2_inss')     .innerText = vlrFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx2_acumulado').innerText = Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        }
            
        //Faixa 3
        document.querySelector('td#fx3_aliquota') .innerText = faixa3_aliq.toLocaleString('pr-BR', {style: 'decimal', currency: 'BRL'})+'%';
        document.querySelector('td#fx3_tabinss')  .innerText = faixa3_vlr.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});        
        if (aBC_INSS>faixa2_vlr) {
            var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa3_vlr) - faixa2_vlr).toFixed(3) );
            var vlrFaixa = casas_decimais_2( (bcFaixa * faixa3_aliq / 100).toFixed(3) );
            Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);

            document.querySelector('td#fx3_bc')       .innerText = bcFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx3_inss')     .innerText = vlrFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.querySelector('td#fx3_acumulado').innerText = Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        }

        //Faixa 4  obs: aqui utilizei o getElementById para didática, mas o querySelector é mais moderno 
        document.getElementById('fx4_aliquota') .innerText = faixa4_aliq.toLocaleString('pr-BR', {style: 'decimal', currency: 'BRL'})+'%';
        document.getElementById('fx4_tabinss')  .innerText = faixa4_vlr.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        if (aBC_INSS>faixa3_vlr) {
            var bcFaixa  = casas_decimais_2( (Menor_Valor(aBC_INSS, faixa4_vlr) - faixa3_vlr).toFixed(3) );
            var vlrFaixa = casas_decimais_2( (bcFaixa * faixa4_aliq / 100).toFixed(3) );
            Resultado    = casas_decimais_2( (Resultado + vlrFaixa).toFixed(3), 2);

            document.getElementById('fx4_bc')       .innerText = bcFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.getElementById('fx4_inss')     .innerText = vlrFaixa.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
            document.getElementById('fx4_acumulado').innerText = Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'});
        }
    } 
    document.getElementById('h2_result').innerHTML = 'Contribuição devida ' +'<strong>'+ Resultado.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})+'</strong>';
}