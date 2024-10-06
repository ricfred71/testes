// Recupera o texto do chrome.storage
chrome.storage.local.get('selectedText', (result) => {
  const selectedText = result.selectedText;
  console.log('Texto recuperado:', selectedText);
  
  // Preencher o input com o texto selecionado
  document.querySelector('input[type="text"]').value = selectedText;

  // Clicar no botão
  document.querySelector('button').click();
});
