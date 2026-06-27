async function pedirIA(prompt) {
  if (!window.puter || !puter.ai) {
    throw new Error('Puter no disponible');
  }
  const resp = await puter.ai.chat(prompt, { model: 'gpt-4o-mini' });
  // Lógica de parsing JSON
  return resp;
}