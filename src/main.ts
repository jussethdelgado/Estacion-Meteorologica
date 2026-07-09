import { EstacionClimatica } from "./clases/EstacionClimatica.js";
import { AppMovil } from "./clases/AppMovil.js";
import { PanelAutopista } from "./clases/PanelAutopista.js";

const estacion = new EstacionClimatica();

const app = new AppMovil();
const panel = new PanelAutopista();

estacion.suscribir(app);
estacion.suscribir(panel);

estacion.cambiarTemperatura(28);
estacion.cambiarTemperatura(31);