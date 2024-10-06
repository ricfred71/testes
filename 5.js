// Solicita o texto capturado ao background.js
chrome.runtime.sendMessage({ type: 'getSelectedText' }, (response) => {
  const selectedText = response.selectedText;
  console.log('Texto recuperado:', selectedText);

  // Preencher o input com o texto selecionado
  document.querySelector('input[type="text"]').value = selectedText;

  // Clicar no botão
  document.querySelector('button').click();
});
