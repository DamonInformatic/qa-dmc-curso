# qa-dmc-curso

Proyecto del curso **Especialización en QA & Testing Engineering con IA** (DMC Institute).

Desde la clase 8, el proyecto se clona: no hay que copiar carpetas a mano.

## Prepararlo (una sola vez, antes de la clase)

Necesitan Node.js 22 o superior y Git.

```bash
git clone <URL-DEL-REPOSITORIO>
cd qa-dmc-curso
npm install
npx playwright test
```

Deben ver **8 passed**. Estas pruebas verifican lógica de negocio: **no abren navegador**, así que no hace falta descargar navegadores.

## Qué hay aquí

| Archivo | Qué es |
|---|---|
| `src/descuentos.ts` | El cálculo de RF-12: descuento por volumen y cupón (el requisito de las clases 3 y 4). |
| `tests/descuentos.spec.ts` | La suite existente. Está en verde. ¿Qué no está probando? |

## Los Pull Requests de la clase 8

Cada Pull Request (PR) es una rama con un cambio propuesto por el equipo de desarrollo:

| Rama | Título del PR | Para qué |
|---|---|---|
| `pr-1-total` | Mejora menor en el cálculo del total | Demo del docente |
| `pr-3-cantidad-maxima` | Mensaje más claro en la validación de cantidad | Ejercicio guiado, todos juntos |
| `pr-2-cupon-verano` | Nuevo cupón VERANO: 10 % para cualquier pedido | Taller individual |
| `pr-4-refactor-volumen` | refactor: extraer el descuento por volumen a su propia función | Mini reto |

### Ver qué cambió un PR

En GitHub: pestaña **Pull requests** → el PR → **Files changed**.

Desde la terminal:

```bash
git fetch
git diff main origin/pr-1-total
```

### Ejecutar las pruebas sobre un PR

```bash
git switch pr-1-total      # pasa a la rama del PR
npx playwright test        # ejecuta la suite sobre el código del PR
git switch main            # vuelve a la versión aprobada
```

## Git en cinco palabras

- **Repositorio:** la carpeta del proyecto con toda su historia.
- **Rama:** una versión paralela del proyecto. `main` es la aprobada.
- **Commit:** un cambio guardado, con su mensaje.
- **Diff:** las líneas que cambiaron entre dos versiones.
- **Pull Request:** la propuesta de llevar una rama a `main`. Antes de aprobarla, se revisa.
