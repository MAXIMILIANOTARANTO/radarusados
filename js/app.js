const $ = id => document.getElementById(id);

// Tabs
 document.querySelectorAll('.tab').forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('on'));
    tab.classList.add('on');
    ['cotizar','radar','memoria'].forEach(s => $(s).style.display = 'none');
    $(tab.dataset.tab).style.display = 'block';
    if (tab.dataset.tab === 'memoria') renderMemoria();
  };
});

// Cotizar
$('btnCotizar').onclick = async () => {
  // Lógica de cotización (llama a ai.js)
  console.log('Cotizar clicked');
};

// Radar
$('btnRadar').onclick = async () => {
  console.log('Radar clicked');
};

// Export
$('btnExport').onclick = () => {
  const data = localStorage.getItem('radarusados_cadena_v1');
  const blob = new Blob([data], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'memoria.json';
  a.click();
};

function renderMemoria() {
  // Se implementará en memory.js
  console.log('Render memoria');
}