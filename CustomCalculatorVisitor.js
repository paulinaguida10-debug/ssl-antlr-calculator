import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {

    constructor() {
        super();
        this.memory = new Map();
    }

    visitTerminoNum(ctx) {
        return parseInt(ctx.numero().getText());
    }

    visitTerminoVar(ctx) {
        let nombre = ctx.variable().getText();
        return this.memory.get(nombre);
    }

    visitTerminoParens(ctx) {
        return this.visit(ctx.expresion());
    }

  visitExpresion(ctx) {
    let resultado = this.visit(ctx.termino(0));
    for (let i = 1; i < ctx.termino().length; i++) {
        let op = ctx.getChild(i * 2 - 1).getText();
        let valor = this.visit(ctx.termino(i));
        if (op === '+') {
            resultado += valor;
        } else if (op === '-') {
            resultado -= valor;
        } else if (op === '*') {
            resultado *= valor;
        } else if (op === '/') {
            resultado /= valor;
        }
    }
    return resultado;
    } 

    visitAsignacion(ctx) {

        let nombre = ctx.variable().getText();
        let valor = this.visit(ctx.expresion());

        this.memory.set(nombre, valor);

        return valor;
    }

    visitSalida(ctx) {

        let valor = this.visit(ctx.expresion());

        console.log(valor);

        return valor;
    }

    visitVariar(ctx) {

        let nombre = ctx.variable().getText();

        let inicio = this.visit(ctx.expresion(0));
        let fin = this.visit(ctx.expresion(1));

        for (let i = inicio; i <= fin; i++) {

            this.memory.set(nombre, i);

            this.visit(ctx.bloque());
        }
    }

    visitBloque(ctx) {

        for (let instr of ctx.instruccion()) {
            this.visit(instr);
        }
    }

    visitPrograma(ctx) {

        for (let instr of ctx.instruccion()) {
            this.visit(instr);
        }
    }
}