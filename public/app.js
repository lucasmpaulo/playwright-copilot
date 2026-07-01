// Handler do formulário de newsletter
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = 'Inscrição confirmada!';
});
