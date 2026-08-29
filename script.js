const state = { unlockedIndex: 0, readCount: 0, guideStep: 0 };
const bgOverlay = document.getElementById("bg-overlay");

const bgm1 = document.getElementById("bgm1");
const bgm2 = document.getElementById("bgm2");
const sfxOpen = document.getElementById("sfx-open");
const voicePlayer = document.getElementById("voice-player");
const floatingLyricsContainer = document.getElementById("floating-lyrics-container");

let currentParticleColor = "#84cc16";
let activeStickerImg = new Image(); 
activeStickerImg.src = ""; 

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const guideText = document.getElementById("guide-text");
const guideNextBtn = document.getElementById("guide-next");
const guideName = document.getElementById("guide-name");

function setGuideStep(stepIndex) {
  state.guideStep = Math.min(stepIndex, guideSteps.length - 1);
  const stepData = guideSteps[state.guideStep];

  guideName.textContent = stepData.name;
  guideText.textContent = stepData.text;
  if (stepData.char === "tighnari") { guideName.className = "guide-name-tag tighnari-color"; } 
  else { guideName.className = "guide-name-tag"; }

  document.getElementById("guide-box").classList.add("active");
  
  if(state.guideStep >= guideSteps.length - 1) { guideNextBtn.textContent = "Mở Sổ Kỷ Niệm 📖"; } 
  else { guideNextBtn.textContent = "Tiếp theo ➔"; }
}

guideNextBtn.addEventListener("click", () => {
  if (state.guideStep >= guideSteps.length - 1) {
    if (state.readCount < letters.length) { 
      showWarning(); 
    } else { 
      // Bắt đầu hiệu ứng lóe sáng
      const flashScreen = document.getElementById("white-flash");
      flashScreen.classList.add("active");
      
      // Nhạc nền vườn thư từ từ nhỏ lại
      let volFade = setInterval(() => {
        if(bgm1.volume > 0.05) bgm1.volume -= 0.05;
        else clearInterval(volFade);
      }, 150);

      // Đợi 2 giây cho màn hình trắng xóa hẳn, sau đó mới đổi sang Scrapbook ở bên dưới
      setTimeout(() => {
        showScrapbook(); 
        
        // Đợi thêm 0.5s rồi mới từ từ thu ánh sáng lại để lộ trang kỷ niệm
        setTimeout(() => {
          flashScreen.classList.remove("active");
        }, 500);

      }, 2000); 
    }
  } else {
    if (state.guideStep >= state.readCount) { showWarning(); } 
    else { setGuideStep(state.guideStep + 1); }
  }
});

function showWarning() {
  const isKlee = Math.random() > 0.5;
  guideName.textContent = isKlee ? "Bé Klee 🍀" : "Tighnari 🌿";
  guideName.className = isKlee ? "guide-name-tag" : "guide-name-tag tighnari-color";
  guideText.textContent = isKlee 
    ? "Chị Sweet tính ăn gian kìa! Phải đọc xong bức thư đang sáng thì Klee mới cho đi tiếp nha! 🥺" 
    : "Em đừng vội vàng, hãy chạm vào bức thư đang phát sáng trên bảng ghim để đọc trước đã nhé. 🌿";
}

const collectionDiv = document.getElementById("collection-items");
function initCollection() {
  collectionDiv.innerHTML = "";
  letters.forEach((l, i) => {
    const slot = document.createElement("div");
    slot.className = "item-slot";
    slot.id = `item-slot-${i}`;
    collectionDiv.appendChild(slot);
  });
}

const pinboard = document.getElementById("pinboard");
function renderGrid() {
  if (pinboard.children.length === 0) {
    letters.forEach((letter, index) => {
      const card = document.createElement("div");
      card.className = "polaroid-card";
      card.id = `card-${index}`;
      
      card.innerHTML = `
        <div class="tape"></div>
        <img src="${letter.polaroidAvt}" class="polaroid-img" alt="${letter.authorName}" onerror="this.src='${letter.fallingSticker}'" />
        <div class="polaroid-name">${letter.authorName}</div>
      `;

      card.addEventListener("click", () => {
        if (index <= state.unlockedIndex) openLetter(index);
      });
      pinboard.appendChild(card);
    });
  }

  letters.forEach((_, index) => {
    const card = document.getElementById(`card-${index}`);
    card.classList.remove("locked", "read", "unlocked");
    if (index < state.unlockedIndex) card.classList.add("read");
    else if (index === state.unlockedIndex) card.classList.add("unlocked");
    else card.classList.add("locked");
  });
}

const modal = document.getElementById("letter-modal");
const letterPaper = document.querySelector(".letter-paper");
const letterAuthor = document.getElementById("letter-author");
const letterTitleEl = document.getElementById("letter-title");
const letterBody = document.getElementById("letter-body");
let typewriterTimer = null;

function openLetter(index) {
  const letter = letters[index];
  activeStickerImg.src = letter.fallingSticker; 
  letterAuthor.textContent = letter.authorName;
  letterTitleEl.textContent = letter.title;
  letterBody.textContent = "";

  if (letter.theme) {
    bgOverlay.style.backgroundImage = letter.theme.bg;
    letterPaper.style.color = letter.theme.text;
    currentParticleColor = letter.theme.particleColor;
  }

  sfxOpen.currentTime = 0; sfxOpen.volume = 0.8; 
  sfxOpen.play().catch(e => console.log(e));
  
  bgm1.volume = 0.15; 
  
  if (letter.voice) {
    voicePlayer.src = letter.voice;
    voicePlayer.currentTime = 0;
    voicePlayer.volume = 1.0;
    voicePlayer.play().catch(e => console.log(e));
  }

  modal.classList.add("active");
  burstParticles(40); 

  let i = 0;
  clearInterval(typewriterTimer);
  typewriterTimer = setInterval(() => {
    letterBody.textContent += letter.body[i];
    i++;
    if (i >= letter.body.length) clearInterval(typewriterTimer);
  }, 16);

  modal.dataset.currentIndex = index;
}

function closeLetter() {
  clearInterval(typewriterTimer);
  modal.classList.remove("active");
  bgOverlay.style.backgroundImage = DEFAULT_MENU_BG;
  currentParticleColor = "#84cc16";
  activeStickerImg.src = ""; 

  voicePlayer.pause();
  voicePlayer.currentTime = 0;
  bgm1.volume = 0.5;

  const index = Number(modal.dataset.currentIndex);
  
  if (index === state.unlockedIndex) {
    const slot = document.getElementById(`item-slot-${index}`);
    slot.innerHTML = `<img src="${letters[index].fallingSticker}" alt="item" />`;
    
    state.unlockedIndex = Math.min(index + 1, letters.length);
    state.readCount++;
    renderGrid();
    setGuideStep(state.readCount);
  }
}

document.getElementById("letter-close").addEventListener("click", closeLetter);

/* ---------------- Chuyển sang Scrapbook & Phát nhạc m2 (Có hỗ trợ YouTube) ---------------- */
function showScrapbook() {
  showScreen("screen-scrapbook");
  bgOverlay.style.backgroundImage = "url('assets/bg/lumiae.jpg')";
  document.getElementById("guide-box").classList.remove("active");
  activeStickerImg.src = ""; 
  burstParticles(60);

  bgm1.pause();
  bgm2.currentTime = 0;
  bgm2.volume = 0.5;
  lastLyricIndex = -1;
  floatingLyricsContainer.innerHTML = ""; 
  bgm2.play().catch(e => console.log("Lỗi autoplay m2:", e));

  const content = document.getElementById("scrapbook-content");
  content.innerHTML = "";

  scrapbookData.forEach(item => {
    const frame = document.createElement("div");
    frame.className = "scrapbook-item";
    
    let mediaHTML = "";
    if (item.type === "image") {
      mediaHTML = `<img src="${item.src}" class="media-main" onerror="this.style.display='none'"/>`;
    } else if (item.type === "video") {
      mediaHTML = `<video src="${item.src}" class="media-main" autoplay muted loop playsinline></video>`;
    } else if (item.type === "youtube") {
      // Nhúng YouTube Iframe, tắt control và liên quan để nhìn giống video gốc nhất
      mediaHTML = `<iframe class="media-main youtube-frame" src="https://www.youtube.com/embed/${item.src}?autoplay=1&mute=1&loop=1&playlist=${item.src}&controls=0&modestbranding=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    }

    frame.innerHTML = `
      <div class="tape tape-top"></div>
      ${mediaHTML}
      <img src="${item.sticker}" class="scrapbook-decor-sticker" onerror="this.style.display='none'"/>
    `;
    
    // Chỉ phóng to (Lightbox) nếu là ảnh hoặc video thường. YouTube thì xem trực tiếp trên cuốn sổ.
    if(item.type !== "youtube") {
      frame.addEventListener("click", () => openLightbox(item));
    }
    
    content.appendChild(frame);
  });

  const note = document.getElementById("finale-note");
  note.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    note.textContent += finaleMessage[i];
    i++;
    if (i >= finaleMessage.length) clearInterval(timer);
  }, 22);
}

/* ---------------- LOGIC PHỤ ĐỀ BAY CHẬM ---------------- */
let lastLyricIndex = -1;
let isLyricLeft = true;

bgm2.addEventListener("timeupdate", () => {
  if (!document.getElementById("screen-scrapbook").classList.contains("active") || 
      document.getElementById("lightbox-modal").classList.contains("active")) {
      return;
  }
  
  let currentTime = bgm2.currentTime;
  let currentIndex = -1;
  
  for (let i = 0; i < lyricsData.length; i++) {
    if (currentTime >= lyricsData[i].time) {
      currentIndex = i;
    } else {
      break;
    }
  }
  
  if (currentIndex !== -1 && currentIndex !== lastLyricIndex) {
    lastLyricIndex = currentIndex;
    const text = lyricsData[currentIndex].text;

    if (text.trim() === "" || text.includes("♪ (Nhạc dạo...) ♪")) return;

    const lyricEl = document.createElement("div");
    lyricEl.className = "floating-lyric " + (isLyricLeft ? "lyric-left" : "lyric-right");
    lyricEl.textContent = text;
    
    isLyricLeft = !isLyricLeft; 

    floatingLyricsContainer.appendChild(lyricEl);

    // Xóa thẻ sau 6.5s để dọn dẹp DOM (thời gian bay)
    setTimeout(() => {
      if (floatingLyricsContainer.contains(lyricEl)) {
        floatingLyricsContainer.removeChild(lyricEl);
      }
    }, 6500);
  }
});

/* ---------------- Logic Lightbox (Phóng to) ---------------- */
const lightbox = document.getElementById("lightbox-modal");
const lightboxContent = document.getElementById("lightbox-content");

function openLightbox(item) {
  lightboxContent.innerHTML = "";
  if (item.type === "image") {
    lightboxContent.innerHTML = `<img src="${item.src}" />`;
    bgm2.volume = 0.15; 
  } else if (item.type === "video") {
    lightboxContent.innerHTML = `<video src="${item.src}" controls autoplay playsinline></video>`;
    bgm2.pause(); 
  }
  lightbox.classList.add("active");
}

function closeLightbox() {
  lightbox.classList.remove("active");
  lightboxContent.innerHTML = ""; 
  bgm2.play(); 
  bgm2.volume = 0.5;
}

document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) { closeLightbox(); }
});

/* ---------------- Canvas Lá đa sắc và Sticker CHẬM NHẸ ---------------- */
const canvas = document.getElementById("leaf-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
const scrapbookColors = ["#f59e0b", "#84cc16", "#93c5fd", "#f9a8d4", "#6ee7b7", "#a5f3fc"];

function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", resizeCanvas); resizeCanvas();

function spawnParticle(burst) {
  const currentStickers = particles.filter(p => p.type === "sticker").length;
  const isSticker = activeStickerImg.src && currentStickers < 4 && Math.random() < 0.2;
  
  let pColor = currentParticleColor;
  if (document.getElementById("screen-scrapbook").classList.contains("active") && !isSticker) {
    pColor = scrapbookColors[Math.floor(Math.random() * scrapbookColors.length)];
  }
  
  return {
    type: isSticker ? "sticker" : "leaf",
    x: Math.random() * canvas.width, 
    y: burst ? canvas.height * 0.45 * Math.random() : -50,
    // Tốc độ rơi siêu chậm
    vy: isSticker ? 0.2 + Math.random() * 0.3 : 0.3 + Math.random() * 0.5,
    // Độ trượt ngang ít hơn
    vx: (Math.random() - 0.5) * 0.4,
    size: isSticker ? 45 + Math.random() * 15 : 5 + Math.random() * 8, 
    rot: Math.random() * Math.PI * 2,
    // Xoay rất chậm
    rotSpeed: (Math.random() - 0.5) * (isSticker ? 0.01 : 0.03),
    color: pColor
  };
}

function burstParticles(count) { 
  for (let i = 0; i < count; i++) { particles.push(spawnParticle(true)); }
}

function drawParticle(p) {
  ctx.save(); 
  ctx.translate(p.x, p.y); 
  ctx.rotate(p.rot); 
  if (p.type === "sticker" && activeStickerImg.complete) {
    ctx.drawImage(activeStickerImg, -p.size, -p.size, p.size * 2, p.size * 2);
  } else {
    ctx.fillStyle = p.color; 
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size * 0.6, p.size, Math.PI / 4, 0, Math.PI * 2); 
    ctx.fill(); 
  }
  ctx.restore();
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Sinh hạt ít đi để tránh rối mắt
  if (Math.random() < 0.03 && particles.length < 40) particles.push(spawnParticle(false));
  particles.forEach(p => { 
    p.y += p.vy; 
    // Gió thổi dao động biên độ hẹp lại
    p.x += p.vx + Math.sin(p.y * 0.01) * 0.2; 
    p.rot += p.rotSpeed; 
    drawParticle(p); 
  });
  particles = particles.filter(p => p.y < canvas.height + 60);
  requestAnimationFrame(animateParticles);
}

document.getElementById("btn-enter").addEventListener("click", () => {
  bgm1.volume = 0.5;
  bgm1.play().catch(e => console.log("Lỗi autoplay audio:", e));
  
  showScreen("screen-garden");
  bgOverlay.style.backgroundImage = DEFAULT_MENU_BG;
  initCollection();
  renderGrid();
  setGuideStep(0);
});

bgOverlay.style.backgroundImage = DEFAULT_MENU_BG;
animateParticles();