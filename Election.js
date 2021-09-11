const prompt = require('prompt-sync')();

console.log();
console.log(' URNA ELETRONICA  ');
console.log();
console.log(' INICIO DA VOTAÇÃO ');
console.log();


var anoAtual = 0;
var anoNascimento = 0;
var voto = 0;
var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var votoNulo = 0;
var votoBranco = 0;
var autorizacao = '';

do { 

dadosDoEleitor = prompt ("Digite o Nome:")  
console.log()  
prompt("Digite sua zona eleitoral:")
console.log()  
prompt("Digite sua seção eleitoral:")
console.log()  
prompt("Digite numero do Titulo:")
console.log()  

   
    anoNascimento = prompt('Ano do Nascimento:');
            
    console.log();

    function autorizaVoto(anoNascimento){
       
        anoAtual = prompt('Ano Atual:');
            
        console.log();
       
        let idade = anoAtual - anoNascimento; 

        if ( idade >= 16 && idade < 18 || idade >= 70 ) {
            console.log(`Você tem ${idade} , Voto Facultativo`);
            autorizacao = 'opcional';
        } else if ( idade >= 18 && idade <= 69 ) {
            console.log(`Você tem ${idade} anos, Voto Obrigatorio`);
            autorizacao = 'obrigatorio';
        } else {
            console.log(`Você tem ${idade} anos ,Voto Negado`);
            autorizacao = 'negado';
        }
    }

    autorizaVoto(anoNascimento);
    console.log();
    console.log(' N° 15  (Votar no Jose) ');
    console.log();
    console.log(' N° 09  (Votar no Ueslei) ');
    console.log();
    console.log(' N° 84  (votar no Moraes)');
    console.log();
    console.log(' N° 1  (Votar NULO) ');
    console.log();
    console.log(' N° 2  (Votar  BRANCO)');
    console.log();
    
    //* Ao invez de colocar numeração na sequencia optei por colococar os numeros dos candidatos.
   
    voto = +prompt('Digite a opção do seu Voto :');
        
    function votacao(autorizacao, voto) {
        if ( autorizacao === 'negado') {
            console.log('Menor de Idade para votar. Voto negado.');
            console.log();
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 15 ) {
            candidato1++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 09 ) {
            candidato2++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 84 ) {
            candidato3++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 1 ) {
            votoNulo++;
        } else if ( (autorizacao === 'opcional' || autorizacao === 'obrigatorio') && voto === 2 ) {
            votoBranco++;
        }
    }

    votacao(autorizacao, voto);
   
    console.log();
    ans = prompt('Nova Votaçao S/N:');
    console.log()
} while (ans === 'S'); 

var resultadoList = [candidato1, candidato2, candidato3, votoNulo, votoBranco];

var c1 = 'Jose';
var c2 = 'Ueslei';
var c3 = 'Moraes';

function exibirResultados() {
    console.log();
    console.log(`Candidato ${c1} recebeu ${candidato1} votos`);
    console.log();
    console.log(`Candidato  ${c2} recebeu ${candidato2} votos`);
    console.log();
    console.log(`Candidato ${c3} recebeu ${candidato3} votos`);
    console.log();
    console.log(`${votoNulo} votos nulos`);
    
    console.log(`${votoBranco} votos em branco`);
    console.log();

    var resultado = Math.max.apply(Math, resultadoList);

    if ( resultado === resultadoList[0]){
        console.log(`Candidato eleito ${c1} com ${candidato1} votos`);
    } else if ( resultado === resultadoList[1]){
        console.log();
        console.log(`Candidato eleito ${c2} com ${candidato2} votos`);
        console.log();
    } else if ( resultado === resultadoList[2]){
        console.log();
        console.log(`Candidato eleito ${c3} com ${candidato3} votos`);
    }
    if(candidato1==candidato2){
        console.log(`${c1} e ${c2} empataram:\n\t ${c1} com ${candidato1} votos.\n\t${c2} com ${candidato2} votos\n`);

    }
    if(candidato1==candidato3)
    {
        console.log(`${c1} e ${c3} empataram\n\t ${c1} com ${candidato1} votos\n\t ${c3} com ${candidato3} votos\n`);

    }
    if(candidato2==candidato3){
        console.log(`${c2} e ${c3} empataram\n\t ${c2} com ${candidato2} votos\n\t ${c3} com ${candidato3} votos`);

 
      
    }
}
exibirResultados(); 
