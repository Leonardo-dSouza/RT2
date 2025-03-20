"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = __importDefault(require("./calculo"));
var SegundoGrau = /** @class */ (function (_super) {
    __extends(SegundoGrau, _super);
    function SegundoGrau() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegundoGrau.prototype.calcular = function (numero1, numero2, numero3) {
        if (numero3 == undefined) {
            numero3 = 0;
        }
        var delta = (Math.pow(numero2, 2)) - (4 * numero1 * numero3);
        if (delta < 0) {
            return "Sem raízes reais";
        }
        var x1 = Math.floor((-numero2 + Math.sqrt(delta)) / (2 * numero1));
        var x2 = Math.floor((-numero2 - Math.sqrt(delta)) / (2 * numero1));
        return ("Raiz 1: ".concat(x1, " | Raiz 2: ").concat(x2));
    };
    return SegundoGrau;
}(calculo_1.default));
exports.default = SegundoGrau;
