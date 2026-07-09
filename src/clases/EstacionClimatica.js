export class EstacionClimatica {
    temperatura = 0;
    observadores = [];
    suscribir(observador) {
        this.observadores.push(observador);
    }
    desuscribir(observador) {
        this.observadores = this.observadores.filter(o => o !== observador);
    }
    notificar() {
        this.observadores.forEach(o => o.actualizar(this.temperatura));
    }
    cambiarTemperatura(temperatura) {
        this.temperatura = temperatura;
        console.log(`\nEstación Climática: ${temperatura}°C`);
        this.notificar();
    }
}
//# sourceMappingURL=EstacionClimatica.js.map