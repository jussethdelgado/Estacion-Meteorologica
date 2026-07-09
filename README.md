# Implementación del Patrón Observer - Programación Orientada a Objetos

## Información del estudiante

**Nombre:** Fabian Jusseth Delgado Garcia
**Asignatura:** Programación Orientada a Objetos
**Docente:** Edgardo Panchana
**Nivel:** 3

---

# Descripción del proyecto

Este proyecto consiste en la implementación del **Patrón de Diseño Observer** utilizando **TypeScript**, aplicando conceptos fundamentales de la Programación Orientada a Objetos (POO).

El patrón Observer permite establecer una relación de dependencia entre objetos, donde un objeto principal llamado **Subject** mantiene una lista de observadores y notifica automáticamente los cambios ocurridos a todos los objetos que dependen de él.

En este ejercicio se simuló un sistema donde un objeto principal genera actualizaciones y diferentes observadores reciben las notificaciones cuando ocurre un cambio.

---

# Objetivos

* Aplicar conceptos de Programación Orientada a Objetos mediante TypeScript.
* Comprender el funcionamiento del patrón de diseño Observer.
* Implementar interfaces, clases y métodos siguiendo buenas prácticas de programación.
* Aplicar principios como encapsulamiento, abstracción y reutilización de código.
* Comprender la comunicación entre objetos dentro de un sistema orientado a eventos.

---

# Tecnologías utilizadas

* TypeScript
* Node.js
* Visual Studio Code
* Programación Orientada a Objetos
* Patrón de diseño Observer

---

# Estructura del proyecto

```
examen-poo/
│
├── src/
│   ├── Subject.ts
│   ├── Observer.ts
│   ├── ClasesObserver.ts
│   └── app.ts
│
├── package.json
├── tsconfig.json
└── README.md
```

---

# Funcionamiento del patrón Observer

El sistema está compuesto por:

## Subject

Es el objeto principal encargado de:

* Mantener la lista de observadores registrados.
* Agregar nuevos observadores.
* Eliminar observadores.
* Notificar cambios a todos los observadores.

## Observer

Representa a los objetos que desean recibir actualizaciones cuando el Subject cambia su estado.

Cada observador implementa un método que permite recibir la información enviada por el Subject.

---

# Ejemplo de funcionamiento

1. Se crea un objeto principal (Subject).
2. Se registran diferentes observadores.
3. El Subject cambia su estado.
4. Automáticamente se envía una notificación a todos los observadores registrados.
5. Cada observador procesa la información recibida.

---

# Conceptos de POO aplicados

## Encapsulamiento

Se protegen los atributos internos de las clases y se controla el acceso mediante métodos.

## Abstracción

Se utilizan interfaces para definir comportamientos generales sin depender de implementaciones específicas.

## Polimorfismo

Los diferentes observadores pueden implementar el mismo comportamiento de actualización de diferentes maneras.

## Modularidad

Cada clase tiene una responsabilidad específica, facilitando el mantenimiento del código.

---

# Instalación y ejecución

## 1. Clonar el repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Ejecutar el proyecto

```bash
npm start
```

o

```bash
npx ts-node src/app.ts
```

---

# Resultado esperado

Al ejecutar el programa se observa cómo el Subject realiza una actualización y los diferentes observadores reciben la información automáticamente mediante el patrón Observer.

---

# Conclusión

La implementación del patrón Observer permitió comprender cómo los objetos pueden comunicarse de manera eficiente sin crear un acoplamiento fuerte entre ellos. Este patrón es ampliamente utilizado en sistemas donde existen eventos y múltiples componentes que necesitan reaccionar ante cambios.

---

# Autor

**Fabian Jusseth Delgado Garcia**
