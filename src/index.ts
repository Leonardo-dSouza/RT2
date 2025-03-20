import Somador from "./somador";
import * as readline from "readline"
import Mensagens from "./mensagens";
import Subtrador from "./subtrador";
import Multiplicador from "./multiplicador";
import Divisor from "./divisor";
import SegundoGrau from "./segundoGrau";
import Calculo from "./calculo";
import Radiador from "./radiacao";

let mensagens = new Mensagens()
    

let iniciar = () => {
  let leitor = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
      let instrucoes = valor.split(' ');
      let numero1 = Number(instrucoes[0]);
      let numero2 = Number(instrucoes[1]);
      let operacao = instrucoes[2];
      
      // Verifica se a operação é apenas um nome (ex: 'SegundoGrau')
      if (instrucoes.length === 1) {
          operacao = instrucoes[0];
      }

      console.log(`Estas foram suas instruções: ${instrucoes}\n`);
      
      let calculo: Calculo; // Declarando a variável calculo aqui

      switch (operacao) {
          case 'Somar':
              calculo = new Somador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Subtrair':
              calculo = new Subtrador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Multiplicar':
              calculo = new Multiplicador();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Dividir':
              calculo = new Divisor();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'SegundoGrau':
              // Verifica se o usuário passou os três números necessários
              if (instrucoes.length < 4) {
                  console.log("Para a equação do segundo grau, você precisa passar 3 números.");
                  break;
              }
              let numero3 = Number(instrucoes[2]);
              calculo = new SegundoGrau();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}\n`);
              break; 
          case 'Radiacao':
            calculo = new Radiador()
            console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
            break
          case 'Sair':
              console.log(`Até uma próxima, falou...`);
              break;
          default:
              console.log(`Operação não entendida :(`);
      }
      
      leitor.close();
      if (operacao !== 'Sair') {
          mensagens.comoUsar();
          iniciar();
      }
  });
};
iniciar()