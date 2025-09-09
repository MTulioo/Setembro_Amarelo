const mensagem = [
  "Você é mais forte do que Imagina 💛",
  "Nunca se esqueça: Sua Vida Importa 🎗️",
  "Vocẽ não está sozinho, estamos Juntos 💝",
  "Acredite: Dias melhores virão 💗",
  "Sempre existe esperança ✨"
  ];

document.getElementById("btnMensagem").addEventListener("click", () => {
  const aleatoria = mensagem[Math.floor(Math.random() * mensagem.length)];
document.getElementById("mensagem").innerText = aleatoria;
});
