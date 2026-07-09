import type { IObservador } from "../interfaces/IObservador.js";

export class PanelAutopista implements IObservador {

    actualizar(temperatura: number): void {
        console.log(`🛣️ Panel de Autopista muestra: ${temperatura}°C`);
    }

}