import type { IObservador } from "./IObservador.js";

export interface ISujeto {
    suscribir(observador: IObservador): void;
    desuscribir(observador: IObservador): void;
    notificar(): void;
}