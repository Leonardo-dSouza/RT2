"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var somador_1 = __importDefault(require("./somador"));
var calc = new somador_1.default();
console.log(calc.calcular(10, 10));
