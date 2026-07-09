import type { ISujeto } from "../interfaces/ISujeto.js";
import type { IObservador } from "../interfaces/IObservador.js";
export declare class EstacionClimatica implements ISujeto {
    private temperatura;
    private observadores;
    suscribir(observador: IObservador): void;
    desuscribir(observador: IObservador): void;
    notificar(): void;
    cambiarTemperatura(temperatura: number): void;
}
//# sourceMappingURL=EstacionClimatica.d.ts.map