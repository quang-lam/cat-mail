const catPhotos = [
  "./assets/images/cats/cat-1.png",
  "./assets/images/cats/cat-2.png",
  "./assets/images/cats/cat-3.png",
  "./assets/images/cats/cat-4.png",
  "./assets/images/cats/cat-5.png",
  "./assets/images/cats/cat-6.png",
  "./assets/images/cats/cat-7.png",
  "./assets/images/cats/cat-8.png"
];

const categories = [
  { key: "wisdom", label: "Wisdom", icon: "😺", file: "./content/messages/wisdom.md", cardClass: "wisdom" },
  { key: "roast", label: "Roast", icon: "🔥", file: "./content/messages/roast.md", cardClass: "roast" },
  { key: "motivation", label: "Motivation", icon: "✨", file: "./content/messages/motivation.md", cardClass: "motivation" },
  { key: "chaos-demands", label: "Chaos & Demands", icon: "🌪", file: "./content/messages/chaos-demands.md", cardClass: "chaos" },
  { key: "wishes", label: "Wishes", icon: "🌙", file: "./content/messages/wishes.md", cardClass: "wishes" }
];

const categoriesByKey = new Map(categories.map((category) => [category.key, category]));
const messagesByCategory = new Map();
const musicLoopSeconds = 45;

const askButton = document.querySelector("#askButton");
const readingCard = document.querySelector("#readingCard");
const categoryEl = document.querySelector("#category");
const messageEl = document.querySelector("#message");
const rarityEl = document.querySelector("#rarity");
const catPortrait = document.querySelector("#catPortrait");
const portraitWrap = document.querySelector("#portraitWrap");
const countEl = document.querySelector("#count");
const pawField = document.querySelector("#pawField");
const soundToggle = document.querySelector("#soundToggle");
const backgroundMusic = document.querySelector("#backgroundMusic");
const categoryMenu = document.querySelector("#categoryMenu");
const categoryMenuButton = document.querySelector("#categoryMenuButton");
const categoryOptions = document.querySelectorAll(".category-option");
const selectedCategoryLabel = document.querySelector("#selectedCategoryLabel");
const askLabel = document.querySelector(".ask-label");

let consultCount = 0;
let soundOn = true;
let audioContext;
let selectedCategory = "random";
let messagesLoaded = false;
let councilInterventionActive = false;

backgroundMusic.volume = 0.28;
backgroundMusic.addEventListener("timeupdate", loopTrimmedBackgroundMusic);
backgroundMusic.addEventListener("ended", loopTrimmedBackgroundMusic);

askButton.addEventListener("click", askTheCat);
soundToggle.addEventListener("click", toggleSound);
categoryMenuButton.addEventListener("click", toggleCategoryMenu);
document.addEventListener("click", closeCategoryMenuOnOutsideClick);
document.addEventListener("keydown", closeCategoryMenuOnEscape);
categoryOptions.forEach((button) => {
  button.addEventListener("click", () => selectCategory(button.dataset.category));
});

loadMessages();

async function loadMessages() {
  askButton.disabled = true;
  askButton.setAttribute("aria-disabled", "true");
  messageEl.textContent = "Sorting the mail bag...";
  rarityEl.textContent = "Loading deliveries";

  try {
    await Promise.all(categories.map(loadCategoryMessages));
    messagesLoaded = true;
    askButton.disabled = false;
    askButton.setAttribute("aria-disabled", "false");
    messageEl.textContent = "Choose a category or keep Random, then open Cat Mail.";
    rarityEl.textContent = "Ready for delivery";
  } catch (error) {
    console.error(error);
    messageEl.textContent = "The mail bag could not be opened. Try serving this folder with a local static server.";
    rarityEl.textContent = "Delivery paused";
  }
}

async function loadCategoryMessages(category) {
  const response = await fetch(category.file);

  if (!response.ok) {
    throw new Error(`Could not load ${category.file}`);
  }

  const markdown = await response.text();
  const messages = markdown
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim())
    .filter(Boolean);

  if (messages.length !== 50) {
    console.warn(`${category.label} has ${messages.length} messages. Expected 50.`);
  }

  messagesByCategory.set(category.key, messages);
}

function toggleSound() {
  soundOn = !soundOn;
  soundToggle.setAttribute("aria-pressed", String(soundOn));

  if (soundOn) {
    startBackgroundMusic();
  } else {
    backgroundMusic.pause();
  }
}

function selectCategory(categoryKey) {
  selectedCategory = categoryKey;
  selectedCategoryLabel.textContent = getCategoryLabel(categoryKey);

  categoryOptions.forEach((button) => {
    const isActive = button.dataset.category === categoryKey;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-checked", String(isActive));
  });

  setCategoryMenuOpen(false);
}

function toggleCategoryMenu(event) {
  event.stopPropagation();
  setCategoryMenuOpen(!categoryMenu.classList.contains("open"));
}

function closeCategoryMenuOnOutsideClick(event) {
  if (!categoryMenu.contains(event.target)) {
    setCategoryMenuOpen(false);
  }
}

function closeCategoryMenuOnEscape(event) {
  if (event.key === "Escape") {
    setCategoryMenuOpen(false);
    categoryMenuButton.focus();
  }
}

function setCategoryMenuOpen(isOpen) {
  categoryMenu.classList.toggle("open", isOpen);
  categoryMenuButton.setAttribute("aria-expanded", String(isOpen));
}

function getCategoryLabel(categoryKey) {
  if (categoryKey === "random") return "Random";

  return categoriesByKey.get(categoryKey)?.label ?? "Random";
}

function askTheCat() {
  if (!messagesLoaded) return;

  if (councilInterventionActive) {
    resetCouncilIntervention();
  }

  consultCount += 1;
  countEl.textContent = consultCount;

  if (consultCount === 20) {
    showCouncilIntervention();
    return;
  }

  const reading = getReading();
  const cat = pick(catPhotos);

  catPortrait.src = cat;
  readingCard.className = `reading-card ${reading.cardClass}`;
  categoryEl.textContent = `${reading.icon} ${reading.label}`;
  messageEl.textContent = reading.text;
  rarityEl.textContent = reading.detail;

  restartAnimation(readingCard);
  restartAnimation(portraitWrap, "show");
  askButton.classList.remove("summoning");
  void askButton.offsetWidth;
  askButton.classList.add("summoning");

  burstPaws();
  startBackgroundMusic();
  playCatChirp();
}

function showCouncilIntervention() {
  councilInterventionActive = true;
  catPortrait.src = "./assets/images/cats/cat-8.png";
  readingCard.className = "reading-card council";
  categoryEl.textContent = "Council Notice";
  messageEl.textContent = "You have consulted the council 20 times today.\nAt this point you are just gambling.";
  rarityEl.textContent = "Mild judgment has been delivered";
  askLabel.textContent = "Ask Again Anyway";
  askButton.setAttribute("aria-label", "Ask Again Anyway");

  restartAnimation(readingCard);
  restartAnimation(portraitWrap, "show");
  portraitWrap.classList.add("judgmental");
  askButton.classList.remove("summoning");
  void askButton.offsetWidth;
  askButton.classList.add("summoning");

  burstPaws();
  startBackgroundMusic();
  playCatChirp();
}

function resetCouncilIntervention() {
  councilInterventionActive = false;
  consultCount = 0;
  countEl.textContent = consultCount;
  askLabel.textContent = "Open Cat Mail";
  askButton.setAttribute("aria-label", "Open Cat Mail");
  portraitWrap.classList.remove("judgmental");
}

function getReading() {
  const category = selectedCategory === "random"
    ? pick(categories)
    : categoriesByKey.get(selectedCategory);

  const messages = messagesByCategory.get(category.key);

  return {
    ...category,
    text: pick(messages),
    detail: selectedCategory === "random" ? `Random delivery: ${category.label}` : `${category.label} delivery`
  };
}

function startBackgroundMusic() {
  if (!soundOn || !backgroundMusic.paused) return;

  if (backgroundMusic.currentTime >= musicLoopSeconds) {
    backgroundMusic.currentTime = 0;
  }

  backgroundMusic.play().catch(() => {
    // Some browsers wait for a stronger user gesture before allowing audio.
  });
}

function loopTrimmedBackgroundMusic() {
  if (!soundOn) return;

  if (backgroundMusic.currentTime >= musicLoopSeconds || backgroundMusic.ended) {
    backgroundMusic.currentTime = 0;
    backgroundMusic.play().catch(() => {});
  }
}

function burstPaws() {
  const amount = window.matchMedia("(max-width: 760px)").matches ? 9 : 15;
  const buttonBox = askButton.getBoundingClientRect();
  const originX = buttonBox.left + buttonBox.width / 2;
  const originY = buttonBox.top + buttonBox.height * 0.55;

  for (let i = 0; i < amount; i += 1) {
    const paw = document.createElement("span");
    const size = randomBetween(22, 54);
    paw.className = "floating-paw";
    paw.style.left = `${originX + randomBetween(-130, 130)}px`;
    paw.style.top = `${originY + randomBetween(-28, 38)}px`;
    paw.style.setProperty("--size", `${size}px`);
    paw.style.setProperty("--drift", `${randomBetween(-130, 130)}px`);
    paw.style.setProperty("--spin", `${randomBetween(-45, 45)}deg`);
    paw.style.setProperty("--speed", `${randomBetween(850, 1400)}ms`);
    pawField.appendChild(paw);
    paw.addEventListener("animationend", () => paw.remove(), { once: true });
  }
}

function playCatChirp() {
  if (!soundOn) return;

  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  audioContext.resume?.();
  const now = audioContext.currentTime;
  const gain = audioContext.createGain();
  const oscillator = audioContext.createOscillator();
  const wobble = audioContext.createOscillator();
  const wobbleGain = audioContext.createGain();

  oscillator.type = "sine";
  wobble.type = "triangle";
  oscillator.frequency.setValueAtTime(430, now);
  oscillator.frequency.exponentialRampToValueAtTime(690, now + 0.08);
  oscillator.frequency.exponentialRampToValueAtTime(380, now + 0.22);

  wobble.frequency.setValueAtTime(18, now);
  wobbleGain.gain.setValueAtTime(28, now);
  wobble.connect(wobbleGain);
  wobbleGain.connect(oscillator.frequency);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.075, now + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  wobble.start(now);
  oscillator.stop(now + 0.28);
  wobble.stop(now + 0.28);
}

function restartAnimation(element, addedClass) {
  if (addedClass) {
    element.classList.remove(addedClass);
    void element.offsetWidth;
    element.classList.add(addedClass);
    return;
  }

  element.style.animation = "none";
  void element.offsetWidth;
  element.style.animation = "";
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}
