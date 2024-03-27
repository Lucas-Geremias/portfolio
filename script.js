const numStars = 100;
const galaxy = document.querySelector(".galaxy");

for (let i = 0; i < numStars; i++) {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  galaxy.appendChild(star);
}

const textArray = ["Lucas Geremias", "Desenvolvedor Back-end"];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const typedTextElement = document.getElementById('typed-text');
    const currentText = textArray[wordIndex];
    if (isDeleting) {
      // Deletando caracteres
      typedTextElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Adicionando caracteres
      typedTextElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    // Verifica se a palavra foi completamente digitada ou deletada
    if (!isDeleting && charIndex === currentText.length) {
      // Aguarda antes de começar a deletar
      setTimeout(() => {
        isDeleting = true;
      }, 500);
    } else if (isDeleting && charIndex === 0) {
      // Passa para a próxima palavra
      wordIndex = (wordIndex + 1) % textArray.length;
      // Aguarda antes de começar a digitar a próxima palavra
      setTimeout(() => {
        isDeleting = false;
      }, 500);
    }

    // Calcula o intervalo de tempo de digitação
    const typeSpeed = isDeleting ? 50 : 100;
    // Define o intervalo para a próxima iteração
    setTimeout(type, typeSpeed);
  }

  // Inicia o efeito de digitação
  window.onload = type;