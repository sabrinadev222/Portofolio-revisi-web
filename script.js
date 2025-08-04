function bukaProfil() {
  document.getElementById("welcome").style.display = "none";
  const galeri = document.getElementById("galeri");
  if (galeri) galeri.classList.add("hidden");
  document.getElementById("content").classList.remove("hidden");
  document.body.classList.add("biodata-mode");
}

function toggleDarkMode() {
  const body = document.body;
  const toggleBtn = document.querySelector('.dark-toggle');
  body.classList.toggle("dark");
  if (toggleBtn) {
    toggleBtn.textContent = body.classList.contains("dark")
      ? "☀️ matikan"
      : "🌙 nyalakan";
  }
}

function tampilkanEmoji() {
  const emojiList = ['💖', '🌸', '✨', '🌼', '🌙', '🦋'];
  const emoji = emojiList[Math.floor(Math.random() * emojiList.length)];
  const el = document.getElementById('emoji-pop');
  if (!el) return;
  el.textContent = emoji;
  el.style.animation = 'none';
  void el.offsetWidth;
  el.style.animation = 'popEmoji 1s ease-out';
}



