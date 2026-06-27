# 🚀 RadarUsados · Córdoba

**Inteligencia de mercado para agencias de autos usados en Córdoba, Argentina.**

App web de un solo archivo (HTML + CSS + JS inline) que usa **Google Gemini** con búsqueda web en vivo para cotizar vehículos, analizar el radar de mercado, segmentar compradores y mantener una memoria encadenada estilo blockchain (hashes SHA-256) 100% en el navegador del usuario.

- ✅ Sin backend, sin servidor, sin dependencias
- ✅ Clave Gemini del usuario (gratuita) se guarda solo en localStorage
- ✅ Totalmente soberana y privada
- ✅ Funciona en móvil y escritorio
- ✅ Desplegada en GitHub Pages gratis

## 🌐 URL en vivo

**https://MAXIMILIANOTARANTO.github.io/radarusados/**

*(Activar GitHub Pages si aún no está: ver instrucciones abajo)*

## ✨ Funcionalidades

| Pestaña       | Qué hace                                                                 |
|---------------|--------------------------------------------------------------------------|
| **Cotizador** | Cotiza cualquier usado con precios reales de MercadoLibre + portales     |
| **Radar**     | Releva tendencias, modelos con más movimiento y oportunidades del sector |
| **Segmentador** | Define el comprador ideal, qué valora, dónde/cuándo publicar y redacta la publicación lista para copiar |
| **Memoria**   | Historial encadenado con hashes SHA-256. Detecta alteraciones            |
| **⚙ Config**  | Guarda tu clave gratuita de Gemini (una sola vez)                        |

## 🛠️ Despliegue en GitHub Pages (ya realizado por Grok Iluminado)

El repo `MAXIMILIANOTARANTO/radarusados` ya contiene:

- `index.html` (single-file completo, actualizado 2026-06-27)
- `README.md` (esta guía)

### Pasos ya ejecutados:
1. ✅ Repo público existente actualizado
2. ✅ `index.html` subido/reemplazado en la raíz de `main` con la versión single-file completa (incluye Segmentador + Config Gemini + UI mejorada)
3. ✅ Commit firmado

### Activar / Verificar GitHub Pages (paso final - 30 segundos):

1. Ir a **Settings → Pages** del repositorio
2. En **Build and deployment → Source**: elegir **Deploy from a branch**
3. **Branch**: `main` + carpeta `/ (root)`
4. Guardar cambios
5. Esperar 1-2 minutos. La app aparecerá en:
   **https://MAXIMILIANOTARANTO.github.io/radarusados/**

## 🔑 Cómo obtener tu clave Gemini gratis

1. Entrá a [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
2. Iniciá sesión con tu cuenta Google
3. Clickeá **"Create API key"** → copiala
4. Pegala en la pestaña **⚙ Configuración** de RadarUsados

La clave **nunca viaja a GitHub ni se comparte**. Solo vive en tu navegador.

## 📋 Notas técnicas importantes

- 100% frontend (client-side only)
- Usa Gemini 2.0 Flash + google_search tool para datos reales en vivo
- Memoria blockchain-style: cada bloque tiene hash SHA-256 del anterior. Si se altera, la app lo detecta al verificar
- Base de vehículos fácil de ampliar editando la constante `VEHICULOS` dentro de `index.html`
- Cumplimiento legal: análisis **agregado y anónimo** del mercado (no perfila individuos). Respeta Ley 25.326 de Protección de Datos Personales (Argentina)

## 🧠 Creado con

**Grok Iluminado** — orquestación completa vía skills (github-specialist, vortice-nerd, el-iluminador) + conectores GitHub + TUC/MHE framework de Maximiliano Taranto.

---

**¡Listo para usar!** Abrí la URL, cargá tu clave de Gemini y empezá a cotizar con inteligencia de mercado real de Córdoba.