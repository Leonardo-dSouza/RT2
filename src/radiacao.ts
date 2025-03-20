import Calculo from "./calculo";

export default class Radiador extends Calculo{
    public calcular(numero1: number, numero2: number): number{
        return Math.pow(numero1, 1/numero2)
    }
}