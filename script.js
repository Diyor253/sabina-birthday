const startButton = document.getElementById("startButton");
const giftSection = document.getElementById("giftSection");
const giftButton = document.getElementById("giftButton");
const giftReveal = document.getElementById("giftReveal");
const giftCaption = document.getElementById("giftCaption");
const envelope = document.getElementById("envelope");
const letterButton = document.getElementById("letterButton");
const letterContent = document.getElementById("letterContent");
const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");
const heartsLayer = document.querySelector(".hearts-layer");

startButton.addEventListener("click", () => {
  giftSection.scrollIntoView({ behavior: "smooth", block: "center" });
  burstHearts(12);
});

giftButton.addEventListener("click", () => {
  const opened = giftButton.classList.toggle("open");
  giftReveal.classList.toggle("show", opened);
  giftCaption.textContent = opened ? "Сюрприз для тебя открыт! 💗" : "Нажми на подарок 🎀";
  if (opened) burstHearts(22);
});

letterButton.addEventListener("click", () => {
  const opened = letterContent.classList.toggle("show");
  envelope.classList.toggle("open", opened);
  letterButton.textContent = opened ? "Закрыть письмо" : "Открыть письмо";
  if (opened) {
    setTimeout(() => letterContent.scrollIntoView({ behavior: "smooth", block: "nearest" }), 250);
    burstHearts(10);
  }
});

secretButton.addEventListener("click", () => {
  secretMessage.classList.toggle("show");
  secretButton.textContent = secretMessage.classList.contains("show") ? "♥" : "♡";
  if (secretMessage.classList.contains("show")) burstHearts(18);
});

// Проигрываем аудиофайл, который пользователь добавит в папку проекта.
const birthdayAudio = document.getElementById("birthdayAudio");

musicButton.addEventListener("click", async () => {
  if (birthdayAudio.paused) {
    try {
      await birthdayAudio.play();
      musicButton.classList.add("playing");
      musicLabel.textContent = "Выключить музыку";
    } catch (error) {
      musicLabel.textContent = "Добавь файл wanna-be-yours.mp3";
      console.error("Не удалось воспроизвести аудио:", error);
    }
  } else {
    birthdayAudio.pause();
    musicButton.classList.remove("playing");
    musicLabel.textContent = "Включить I Wanna Be Yours";
  }
});

birthdayAudio.addEventListener("ended", () => {
  musicButton.classList.remove("playing");
  musicLabel.textContent = "Включить I Wanna Be Yours";
});

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 22}px`;
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 10500);
}

setInterval(createHeart, 850);

function burstHearts(amount) {
  for (let i = 0; i < amount; i++) {
    setTimeout(createHeart, i * 65);
  }
}


