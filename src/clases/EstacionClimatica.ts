import type { ISujeto } from "../interfaces/ISujeto.js";
import type { IObservador } from "../interfaces/IObservador.js";

export class EstacionClimatica implements ISujeto {

    private temperatura: number = 0;
    private observadores: IObservador[] = [];

    suscribir(observador: IObservador): void {
        this.observadores.push(observador);
    }

    desuscribir(observador: IObservador): void {
        this.observadores = this.observadores.filter(o => o !== observador);
    }

    notificar(): void {
        this.observadores.forEach(o => o.actualizar(this.temperatura));
    }

    cambiarTemperatura(temperatura: number): void {
        this.temperatura = temperatura;
        console.log(`\nEstación Climática: ${temperatura}°C`);
        this.notificar();
    }

}