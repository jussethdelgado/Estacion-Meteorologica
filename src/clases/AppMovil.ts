import type { IObservador } from "../interfaces/IObservador.js";

export class AppMovil implements IObservador {

    actualizar(temperatura: number): void {
        console.log(`📱 App Móvil muestra: ${temperatura}°C`);
    }

}