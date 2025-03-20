"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var somador_1 = __importDefault(require("./somador"));
var readline = __importStar(require("readline"));
var mensagens_1 = __importDefault(require("./mensagens"));
var subtrador_1 = __importDefault(require("./subtrador"));
var multiplicador_1 = __importDefault(require("./multiplicador"));
var divisor_1 = __importDefault(require("./divisor"));
var segundoGrau_1 = __importDefault(require("./segundoGrau"));
var radiacao_1 = __importDefault(require("./radiacao"));
var mensagens = new mensagens_1.default();
var iniciar = function () {
    var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question("Quais s\u00E3o seus n\u00FAmeros e a opera\u00E7\u00E3o desejada?\n", function (valor) {
        var instrucoes = valor.split(' ');
        var numero1 = Number(instrucoes[0]);
        var numero2 = Number(instrucoes[1]);
        var operacao = instrucoes[2];
        // Verifica se a operação é apenas um nome (ex: 'SegundoGrau')
        if (instrucoes.length === 1) {
            operacao = instrucoes[0];
        }
        console.log("Estas foram suas instru\u00E7\u00F5es: ".concat(instrucoes, "\n"));
        var calculo; // Declarando a variável calculo aqui
        switch (operacao) {
            case 'Somar':
                calculo = new somador_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'Subtrair':
                calculo = new subtrador_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'Multiplicar':
                calculo = new multiplicador_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'Dividir':
                calculo = new divisor_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'SegundoGrau':
                // Verifica se o usuário passou os três números necessários
                if (instrucoes.length < 4) {
                    console.log("Para a equação do segundo grau, você precisa passar 3 números.");
                    break;
                }
                var numero3 = Number(instrucoes[2]);
                calculo = new segundoGrau_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2, numero3), "\n"));
                break;
            case 'Radiacao':
                calculo = new radiacao_1.default();
                console.log("O resultado da opera\u00E7\u00E3o \u00E9: ".concat(calculo.calcular(numero1, numero2), "\n"));
                break;
            case 'Sair':
                console.log("At\u00E9 uma pr\u00F3xima, falou...");
                break;
            default:
                console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
        }
        leitor.close();
        if (operacao !== 'Sair') {
            mensagens.comoUsar();
            iniciar();
        }
    });
};
iniciar();
