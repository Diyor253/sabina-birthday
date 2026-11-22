// Переключение песен в музыкальном блоке. Само воспроизведение запускается
// существующей кнопкой musicButton из script.js после нажатия пользователя.
(() => {
  const audio = document.getElementById("birthdayAudio");
  const choice = document.getElementById("musicChoice");
  const label = document.getElementById("musicLabel");
  const hint = document.getElementById("musicHint");
  const button = document.getElementById("musicButton");
  if (!audio || !choice) return;

  const names = {
    "wanna-be-yours.mp3": "I Wanna Be Yours",
    "cinnamon-girl.mp3": "Cinnamon Girl",
    "love-wantiti.mp3": "Love Wantiti"
  };

  choice.addEventListener("change", () => {
    const wasPlaying = !audio.paused;
    audio.pause();
    audio.currentTime = 0;
    audio.src = choice.value;
    audio.load();
    if (label) label.textContent = "Включить " + (names[choice.value] || "музыку");
    if (button) button.classList.remove("playing");
    if (hint) hint.textContent = "Выбрана: " + (names[choice.value] || choice.value) + ". Нажми кнопку, чтобы слушать ❤️";
  });
})();
