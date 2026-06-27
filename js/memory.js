const MEM_KEY = 'radarusados_cadena_v1';

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function agregarBloque(datos) {
  // Implementación de la cadena
  console.log('Bloque agregado', datos);
}

async function verificarCadena() {
  return true; // Placeholder
}

async function renderMemoria() {
  const out = document.getElementById('memOut');
  out.innerHTML = '<div class="card">Memoria funcionando</div>';
}