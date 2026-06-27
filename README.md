# 🔍 README PARA AGENTES DE IA - RadarUsados Córdoba

> **Este documento está escrito específicamente para que cualquier agente de IA (Grok, Claude, etc.) pueda modificar, mejorar y corregir esta aplicación sin romper su estructura ni su funcionamiento.**

## Principio Fundamental

**Nunca se modifica el archivo `index.html` directamente** para añadir lógica o estilos. 
Todo cambio debe hacerse en su capa correspondiente.

---

## Arquitectura por Capas (Separación de Responsabilidades)

| Capa              | Archivo                  | Qué contiene                                      | Quién puede editarla          |
|-------------------|--------------------------|-----------------------------------------------------|----------------------------------|
| Estructura        | `index.html`             | Solo HTML semántico + ids y clases                | Solo cambios estructurales      |
| Estilos           | `css/styles.css`         | Todo el CSS (incluyendo responsive móvil)         | Diseño y ajustes visuales      |
| Lógica General   | `js/app.js`              | Navegación de pestañas, eventos, renderizado     | Lógica de interfaz             |
| Inteligencia IA   | `js/ai.js`               | Llamadas a Puter + prompts + parsing JSON           | Mejora de prompts y manejo de IA |
| Memoria           | `js/memory.js`           | Sistema de cadena hash (blockchain-style)           | Reglas de integridad de memoria  |

**Regla de Oro:** Si querés cambiar algo, primero identificá en qué capa vive. Nunca mezcles responsabilidades.

---

## Reglas Estrictas de Modificación

### 1. Nunca toques `index.html` para añadir funcionalidad
- Solo se permiten cambios estructurales (agregar un nuevo `div` con id, por ejemplo).
- Nunca pongas `style=""` inline ni scripts dentro de `index.html`.

### 2. Para cambiar estilos
- Editá **solo** `css/styles.css`
- Usá clases en lugar de ids siempre que sea posible.
- El diseño debe seguir siendo **mobile-first**.

### 3. Para cambiar la lógica de la interfaz
- Editá **solo** `js/app.js`
- Mantené las funciones puras cuando sea posible.

### 4. Para mejorar la Inteligencia Artificial
- Editá **solo** `js/ai.js`
- Los prompts deben estar claramente comentados.
- Siempre mantener la capacidad de fallback a texto cuando el JSON falle.

### 5. Para tocar la Memoria
- Editá **solo** `js/memory.js`
- **Nunca** cambies la estructura de los bloques (`indice`, `fecha`, `prev`, `datos`, `hash`).
- La función `verificarCadena()` debe seguir funcionando siempre.

---

## Cómo Proponer Cambios (Flujo Recomendado para Agentes IA)

1. **Identificar la capa** afectada.
2. **Leer el archivo** completo de esa capa antes de editar.
3. **Hacer el cambio** de forma minimal y localizada.
4. **Probar** localmente (abrir `index.html` directamente).
5. **Documentar** el cambio en este README (sección "Historial de Decisiones").
6. **Hacer commit** con mensaje claro que mencione la capa modificada.

Ejemplo de buen mensaje de commit:
`feat(ai): mejorar prompt de cotización para mejor contexto cambiario`

---

## Estructura Actual del Proyecto

```
radarusados/
├── index.html          # Estructura HTML pura
├── css/
│   └── styles.css        # Estilos + responsive
├── js/
│   ├── app.js            # Lógica de interfaz
│   ├── ai.js             # Comunicación con Puter + prompts
│   └── memory.js         # Cadena de hashes (blockchain light)
└── README.md           # Este documento (guía para agentes IA)
```

---

## Principios de Diseño que NO se deben romper

- **Mobile First**: El formulario debe ser usable cómodamente en teléfonos.
- **Soberanía**: La memoria nunca sale del dispositivo del usuario.
- **Integridad**: La cadena de hashes debe poder verificarse siempre.
- **Fallback**: Si la IA falla en devolver JSON, la app debe seguir funcionando mostrando el texto.
- **Claridad**: Cada capa tiene una responsabilidad única.

---

## Cómo Probar Cambios Localmente

1. Cloná el repo o descargá los archivos.
2. Abrí `index.html` directamente en el navegador (doble clic).
3. Abrí la consola del navegador (F12) para ver errores.
4. Probá el flujo completo: Cotizar → ver resultado → cambiar de pestaña → ver Memoria.

---

## Futuras Mejoras (Ideas que se pueden implementar)

- Agregar gráficos (Chart.js)
- Mejorar prompts con contexto TUC / mercado argentino
- Convertir en PWA
- Integrar con Canva para la capa visual
- Persistencia opcional en GitHub / Notion
- Modo offline

---

## Historial de Decisiones Importantes

- **2026-06-27**: Se separó la aplicación en capas (HTML / CSS / JS) para permitir edición segura por agentes IA.
- **2026-06-27**: Se creó este README orientado específicamente a agentes de IA.

---

**Regla final:** 
Si tenés duda sobre dónde hacer un cambio, **preguntá primero** antes de tocar archivos. Es mejor preguntar que romper la estructura.

Este proyecto debe poder evolucionar durante meses sin que se vuelva un caos. Esa es la responsabilidad de quien lo modifica.