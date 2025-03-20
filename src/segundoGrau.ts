import Calculo from "./calculo"

export default class SegundoGrau extends Calculo{
    public calcular(numero1: number, numero2: number): number 
    public calcular(numero1: number, numero2: number, numero3?: number): number | string{
        if (numero3 == undefined){
            numero3 = 0
        }

        let delta = (numero2 ** 2) - (4 * numero1 * numero3)
        if(delta < 0){ return "Sem raízes reais"}
        
        let x1 = Math.floor((-numero2 + Math.sqrt(delta)) / (2 * numero1))
        let x2 = Math.floor((-numero2 - Math.sqrt(delta)) / (2 * numero1))

        return (`Raiz 1: ${x1} | Raiz 2: ${x2}`)
    }
    


}