class claseCoche {
    constructor() {
        this.numPuertas = 4;
      }
  incrementarPuertas() {
    this.numPuertas++;
  }
}
let miCoche = new claseCoche();
miCoche.incrementarPuertas();
console.log(miCoche.numPuertas); 