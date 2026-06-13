// Espera o carregamento completo do DOM antes de executar
document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botao");

  if (botao) {
    botao.addEventListener("click", () => {
      alert("Este projeto faz parte do Agrinho 2026, promovendo práticas sustentáveis no agronegócio!");
    });
  }
});
