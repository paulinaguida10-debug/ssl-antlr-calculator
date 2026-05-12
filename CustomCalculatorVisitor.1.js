import CalculatorVisitor from "./generated/CalculatorVisitor";


export class CustomCalculatorVisitor extends CalculatorVisitor {

  constructor() {
    super();
    this.memory = new Map(); // Memoria para guardar los valores de las variables
  }
  visitTerminoNum(ctx) {
    let num = parseInt(ctx.numero().INT().getText());
    return num;
  }

  visitTerminoVar(ctx) {
    return this.memory.get(ctx.variable().ID().getText());
  }
}
