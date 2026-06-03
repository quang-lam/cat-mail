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
  {
    key: "wisdom",
    label: "Wisdom",
    icon: "😺",
    messages: [
      "Not every problem requires action. Some require a nap.",
      "The closed door eventually opens. Stare harder.",
      "If the sunbeam moves, you move with it.",
      "A soft landing is still a landing.",
      "Never chase what can be silently judged from a windowsill.",
      "Drink water. Stretch. Pretend it was your idea.",
      "The quietest paw often owns the room.",
      "Rest is not quitting. It is loaf mode.",
      "A watched treat bag opens eventually.",
      "Trust the slow blink. It knows things.",
      "If you cannot fix it, sit on it warmly.",
      "Your timing does not need to impress the hallway.",
      "Some answers arrive after grooming one paw.",
      "The best perch is the one you actually use.",
      "Leave room in the day for mysterious staring.",
      "A small stretch can reset a large mood.",
      "Choose the window with the better light.",
      "The loudest worry may only need a snack.",
      "You can be soft and still own the couch.",
      "Curiosity is useful. So is backing away slowly.",
      "Do not sprint through every open door.",
      "A clean bowl is a hopeful beginning.",
      "When in doubt, lower your shoulders and purr internally.",
      "The best plans have escape routes and blankets.",
      "If the vibe is wrong, relocate with dignity.",
      "You are allowed to outgrow a favorite cardboard box.",
      "The moon does not rush the window.",
      "Ask for what you need, then look unimpressed.",
      "A boundary can be velvet and still be firm.",
      "Notice the sunbeam before it moves.",
      "Eat the meal. Ignore the performance review.",
      "Even graceful creatures miss the jump sometimes.",
      "Keep your whiskers out of other people's drama.",
      "There is wisdom in leaving one task untouched.",
      "The lap you seek may need time to sit down.",
      "Make peace with the rug before rolling on it.",
      "A quiet no is still a no.",
      "Small comforts are not small to the nervous heart.",
      "You do not have to explain your nap schedule.",
      "Some days the brave thing is drinking water.",
      "The shelf is high, but you have climbed before.",
      "Let the dust settle before batting at it.",
      "A soft place to land is worth arranging.",
      "Your instincts deserve a little sunlight.",
      "The answer may be under the couch, but not today.",
      "Do the next paw-sized thing.",
      "You can leave the room without winning it.",
      "A slow blink is a whole paragraph.",
      "Do not confuse stillness with doing nothing.",
      "Choose peace, unless there is ribbon."
    ]
  },
  {
    key: "roast",
    label: "Roast",
    icon: "🔥",
    messages: [
      "You checked the fridge again like new food would appear.",
      "I watched you lose your phone while holding it.",
      "Bold of you to call that a schedule.",
      "Your tabs have tabs. Seek help or treats.",
      "You walked into a room and forgot why. Classic human firmware.",
      "The cat saw your screen time and looked away respectfully.",
      "You said five more minutes three naps ago.",
      "That outfit says laundry day with confidence.",
      "You opened the same app to remember why you opened the app.",
      "Your to-do list has developed lore.",
      "You bought a planner and immediately became its emotional support human.",
      "The cat heard your budget and hid the receipt.",
      "You have 47 mugs and still use the weird one.",
      "Your phone battery has more boundaries than you.",
      "You call it multitasking. The cat calls it scattered kibble.",
      "You reheated coffee and abandoned it like a subplot.",
      "The laundry chair is now legally a landmark.",
      "You whispered 'quick question' and opened a portal.",
      "The cat watched you type the wrong password with conviction.",
      "You saved a file named final_final_for_real. Bold.",
      "Your calendar looks like it was assembled during zoomies.",
      "You own scissors and still tear packages like chaos in socks.",
      "The cat respects your confidence, not your execution.",
      "You said you were leaving early and then negotiated with socks.",
      "Your inbox is just a haunted scratching post.",
      "You tried to relax competitively.",
      "The fridge light knows your secrets.",
      "You made eye contact with the task and chose the ceiling.",
      "Your browser history is mostly symptoms and snacks.",
      "You call that a system. The cat calls it piles.",
      "The cat has seen your sleep schedule and filed a complaint.",
      "You forgot the one thing you wrote on your hand.",
      "You have strong opinions for someone eating over the sink.",
      "The cat watched you ignore the obvious button.",
      "You packed anxiety as your personal item.",
      "Your water bottle is decorative at this point.",
      "You opened a new note instead of finding the old note.",
      "The cat blinked twice at your password reset ritual.",
      "You made a list, lost it, and called it mindfulness.",
      "Your desktop icons are forming a neighborhood.",
      "You said 'just one episode' like a tiny liar.",
      "The cat heard your alarm and chose disappointment.",
      "You are one notification away from becoming mist.",
      "Your idea of meal prep is moving leftovers to a clearer container.",
      "You stood up too fast and discovered a new personality.",
      "The cat respects your drama, but not your pacing.",
      "You have a favorite spoon and pretend that is normal.",
      "You refreshed the tracking page like you were summoning it.",
      "Your charger lives in a different zip code.",
      "You called it organized chaos. It is just chaos with labels."
    ]
  },
  {
    key: "motivation",
    label: "Motivation",
    icon: "✨",
    messages: [
      "You've survived 100% of your awkward conversations.",
      "Small progress still counts.",
      "You are allowed to begin before you feel majestic.",
      "One paw forward is still movement.",
      "Drink some water and try again with softer shoulders.",
      "You can do the hard thing, then have a snack.",
      "Today only needs your next tiny brave choice.",
      "Your best is not always loud. Sometimes it purrs.",
      "You are allowed to be new at this.",
      "A tiny step still changes the room.",
      "You can start messy and finish proud.",
      "The cat believes in you, probably.",
      "One deep breath counts as a reset.",
      "You have handled hard days before.",
      "Progress can be quiet and still be real.",
      "Your pace is not a character flaw.",
      "You do not need perfect energy to begin.",
      "Send the email. The cat will supervise.",
      "You are learning, even when it feels clumsy.",
      "A little courage is still courage.",
      "Future you is already grateful for one small action.",
      "Try again, but with water nearby.",
      "You are not late to your own life.",
      "The first draft is allowed to shed.",
      "Your soft heart is not a weakness.",
      "You can rest and still be committed.",
      "One crossed-off task deserves a tiny celebration.",
      "You are doing better than your anxious narrator claims.",
      "The box looked impossible until the cat got inside.",
      "You do not have to earn kindness.",
      "A calm start is still a start.",
      "Your effort matters, even unseen.",
      "Let today be good enough on purpose.",
      "You can ask for help without losing points.",
      "The mountain accepts paw-sized progress.",
      "You are allowed to take up warm space.",
      "A wobble is not a failure.",
      "Your next try can be gentler.",
      "The cat has approved your comeback arc.",
      "You can be proud before it is finished.",
      "Keep going, but unclench your jaw first.",
      "You are not a machine. You are allowed to need care.",
      "The next five minutes are manageable.",
      "You can make something sweet out of a weird day.",
      "Confidence can arrive after action.",
      "You deserve patience while you grow.",
      "The small win is not small to your nervous system.",
      "You can pause without disappearing.",
      "Your courage can wear pajamas.",
      "You have more choices than panic admits."
    ]
  },
  {
    key: "chaos",
    label: "Chaos",
    icon: "🌪",
    messages: [
      "If tired, sleep. If not tired, cause problems.",
      "The zoomies are a valid life strategy.",
      "Push the cup. Learn what gravity wants.",
      "The plan is simple: sprint, freeze, deny everything.",
      "A mystery noise at 3:07 AM builds character.",
      "Bite the blanket. Become the storm.",
      "Enter the room. Forget your mission. Yell anyway.",
      "All objects near edges are temporary.",
      "Sprint sideways to keep the furniture humble.",
      "If it crinkles, it is legally yours.",
      "Begin with a plan. End inside a bag.",
      "Knock once for attention, twice for science.",
      "Sit in the square of paper. It is a portal.",
      "The rules are simple: there are no rules near string.",
      "Attack the invisible enemy behind the curtain.",
      "Become long. Become liquid. Become inconvenient.",
      "If the human says no, become fluffier.",
      "The hallway has requested thunder.",
      "Every rug is a sled if you believe.",
      "Stare at the corner until the corner confesses.",
      "A box is empty only to nonbelievers.",
      "Make eye contact before committing nonsense.",
      "The plant started it.",
      "If bored, invent a crisis with bells.",
      "Open drawer. Enter drawer. Become drawer.",
      "The spoon is suspicious. Investigate loudly.",
      "Sleep in the laundry to add fur seasoning.",
      "Demand entrance. Reject entrance. Repeat.",
      "The keyboard is warm and full of forbidden spells.",
      "If the bag has handles, choose violence.",
      "A single sock can change destiny.",
      "Hide somewhere obvious and act betrayed.",
      "The water bowl is fine, but the cup is destiny.",
      "Everything is a toy after midnight.",
      "Interrupt the call with executive presence.",
      "The curtain moved. This is war.",
      "Step on the remote and let fate pick a channel.",
      "If it rolls, chase it under the heaviest thing.",
      "Leap first. Invent dignity during landing.",
      "The couch has secrets in its ribs.",
      "Three bites of food, then a victory lap.",
      "The bathroom door is a constitutional issue.",
      "Become small enough for the forbidden shelf.",
      "If silence falls, prepare the crash.",
      "The mirror cat knows too much.",
      "Lick the tape. Regret nothing.",
      "A dangling cord is a philosophical invitation.",
      "Turn around exactly seven times, then choose mayhem.",
      "The treat puzzle is solvable with brute force.",
      "Exist dramatically in the doorway."
    ]
  },
  {
    key: "demands",
    label: "Cat Demands",
    icon: "🍤",
    messages: [
      "Treat quota not yet met.",
      "The council requests additional pets.",
      "Open the door. No, the other side of the door.",
      "Your lap has been marked for immediate occupation.",
      "The bowl is visibly empty in the emotional sense.",
      "A blanket tribute is due before sunset.",
      "Please provide one warm laptop and three compliments.",
      "The cat requires attention, but only incorrectly timed attention.",
      "Immediate lap availability has been requested.",
      "The mail room requires a shrimp-scented stamp.",
      "Please open the box for inspection and emotional reasons.",
      "One forehead kiss has been scheduled without your input.",
      "The council requests that dinner happen early and again later.",
      "Please refill the bowl that still contains food.",
      "All blankets must be pre-warmed by a trusted human.",
      "The cat demands password access to the snack cabinet.",
      "A cardboard box tax is now in effect.",
      "The council requires pets, then no pets, then pets.",
      "Your chair has been reassigned.",
      "Please provide fresh water in a forbidden cup.",
      "The window must be opened to exactly sniff-width.",
      "All laundry piles are to remain available for nesting.",
      "A treat audit will begin immediately.",
      "Please stop moving the warm rectangle.",
      "The cat requests an audience and a softer voice.",
      "The council demands you sit down so the lap can happen.",
      "A ceremonial can opening is overdue.",
      "The mail cat requires tribute before delivery.",
      "Please remove the invisible problem from the hallway.",
      "The box must remain in the living room for six to eight weeks.",
      "A second breakfast has been emotionally approved.",
      "Please praise the jump you were not watching.",
      "The cat demands hallway escort services.",
      "All closed doors must submit to inspection.",
      "The council requests a blanket fort with legal ownership transfer.",
      "Please pretend you did not see the failed jump.",
      "A sunbeam reservation has been made in your name.",
      "The cat demands both hands, but only briefly.",
      "Please place the toy exactly where it was ignored yesterday.",
      "The council requires a snack with crunchy acoustics.",
      "Your pillow is now community property.",
      "Please hold still while being used as furniture.",
      "The cat requests one compliment and zero follow-up questions.",
      "A window report is due at once.",
      "Please provide emotional support while the cat ignores you.",
      "The council demands that the vacuum apologize.",
      "Your sleeve has been selected for biscuit practice.",
      "Please deliver one treat to the tiny mouth at floor level.",
      "The cat requests privacy, loudly and in your room.",
      "All fish imagery must be surrendered to the mail department."
    ]
  }
];

const rareMessages = [
  {
    key: "wisdom",
    label: "Rare Wisdom",
    icon: "😺",
    text: "A person who can apologize to a cat can probably handle growth."
  },
  {
    key: "roast",
    label: "Rare Roast",
    icon: "🔥",
    text: "Your password hint is probably just panic wearing a hat."
  },
  {
    key: "motivation",
    label: "Rare Motivation",
    icon: "✨",
    text: "You are not behind. You are arriving with dramatic timing."
  },
  {
    key: "chaos",
    label: "Rare Chaos",
    icon: "🌪",
    text: "Reality is negotiable if you yell at it from the hallway."
  },
  {
    key: "demands",
    label: "Rare Demand",
    icon: "🍤",
    text: "The council has voted 8-0 in favor of snack reparations."
  }
];

const legendaryMessages = [
  "LEGENDARY PROPHECY: The chosen cat grants you one guilt-free rest day.",
  "SECRET CAT LAW: You may ignore one tiny crisis. The council will handle it by sitting nearby.",
  "MYTHIC BOOP: Your next brave choice receives a silent paw stamp of approval."
];

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

let consultCount = 0;
let soundOn = true;
let audioContext;
const musicLoopSeconds = 45;

backgroundMusic.volume = 0.28;
backgroundMusic.addEventListener("timeupdate", loopTrimmedBackgroundMusic);
backgroundMusic.addEventListener("ended", loopTrimmedBackgroundMusic);

askButton.addEventListener("click", askTheCat);
soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.setAttribute("aria-pressed", String(soundOn));

  if (soundOn) {
    startBackgroundMusic();
  } else {
    backgroundMusic.pause();
  }
});

function askTheCat() {
  consultCount += 1;
  countEl.textContent = consultCount;

  const reading = getReading();
  const cat = pick(catPhotos);

  catPortrait.src = cat;
  readingCard.className = `reading-card ${reading.key}${reading.legendary ? " legendary" : ""}`;
  categoryEl.textContent = `${reading.icon} ${reading.label}`;
  messageEl.textContent = reading.text;
  rarityEl.textContent = reading.rarity;

  restartAnimation(readingCard);
  restartAnimation(portraitWrap, "show");
  askButton.classList.remove("summoning");
  void askButton.offsetWidth;
  askButton.classList.add("summoning");

  burstPaws();
  startBackgroundMusic();
  playCatChirp(reading.legendary);
}

function getReading() {
  const roll = Math.random();

  if (roll < 0.012) {
    return {
      key: "legendary",
      label: "Legendary Mail",
      icon: "👑",
      text: pick(legendaryMessages),
      rarity: "Secret legendary delivery",
      legendary: true
    };
  }

  if (roll < 0.052) {
    const rare = pick(rareMessages);
    return {
      key: rare.key,
      label: rare.label,
      icon: rare.icon,
      text: rare.text,
      rarity: "Rare delivery"
    };
  }

  const category = pick(categories);
  return {
    key: category.key,
    label: category.label,
    icon: category.icon,
    text: pick(category.messages),
    rarity: "Standard delivery"
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

function playCatChirp(isLegendary) {
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
  oscillator.frequency.setValueAtTime(isLegendary ? 520 : 430, now);
  oscillator.frequency.exponentialRampToValueAtTime(isLegendary ? 920 : 690, now + 0.08);
  oscillator.frequency.exponentialRampToValueAtTime(isLegendary ? 560 : 380, now + 0.22);

  wobble.frequency.setValueAtTime(18, now);
  wobbleGain.gain.setValueAtTime(isLegendary ? 42 : 28, now);
  wobble.connect(wobbleGain);
  wobbleGain.connect(oscillator.frequency);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(isLegendary ? 0.1 : 0.075, now + 0.035);
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
