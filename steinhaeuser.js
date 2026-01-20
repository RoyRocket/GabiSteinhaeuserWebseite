/* steinhaeuser.js */
document.addEventListener("DOMContentLoaded", () => {
  // --- Burger-Menü ---
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerIcon = document.querySelector(".burger-icon");

  if (burgerMenu && burgerIcon) {
    burgerIcon.addEventListener("click", (e) => {
      if (window.innerWidth < 768) {
        e.stopPropagation();
        burgerMenu.classList.toggle("open");
      }
    });

    document.addEventListener("click", (e) => {
      if (window.innerWidth < 768 && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove("open");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) burgerMenu.classList.remove("open");
    });
  }

  // --- Datenschutz-Popup ---
  const popup = document.getElementById("datenschutz-popup");
  const okButton = document.getElementById("popUpOkBtn");

  if (popup && okButton) {
    popup.style.display = "flex";

    okButton.addEventListener("click", () => {
      popup.style.backdropFilter = "blur(0px)";
      popup.style.webkitBackdropFilter = "blur(0px)";
      popup.style.opacity = "0";

      const welcome = document.querySelector(".welcome");
      if (welcome) welcome.classList.add("visible");

      setTimeout(() => {
        popup.style.display = "none";
      }, 1000);
    });
  }

  // --- Accessibility Widget ---
  const accBtn = document.getElementById("accessibility-btn");
  const accMenu = document.getElementById("accessibility-menu");
  const bgBtn = document.getElementById("background-toggle");
  const incBtn = document.getElementById("increase-font");
  const decBtn = document.getElementById("decrease-font");
  const resetBtn = document.getElementById("accessibility-reset");

  // Menü auf/zu
  if (accBtn && accMenu) {
    accBtn.addEventListener("click", () => {
      accMenu.style.display = (accMenu.style.display === "block") ? "none" : "block";
    });
  }

  // Nur-Text Toggle (Bilder/Hintergrund entfernen)
  if (bgBtn) {
    bgBtn.addEventListener("click", () => {
      document.body.classList.toggle("simple-mode");
    });
  }

  // Schrift-Skalierung (funktioniert erst richtig, wenn CSS nicht vw-dominiert ist)
  let fontScale = 1.0;
  function updateFontSize() {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }
  updateFontSize();

  if (incBtn) {
    incBtn.addEventListener("click", () => {
      fontScale = Math.min(1.8, fontScale + 0.1);
      updateFontSize();
    });
  }

  if (decBtn) {
    decBtn.addEventListener("click", () => {
      fontScale = Math.max(0.7, fontScale - 0.1);
      updateFontSize();
    });
  }

  if (resetBtn && accMenu) {
    resetBtn.addEventListener("click", () => {
      document.body.classList.remove("simple-mode");
      fontScale = 1.0;
      updateFontSize();
      accMenu.style.display = "none";
    });
  }

  // --- Slideshow ---
  function initSlideshow(slideshow) {
    const slides = slideshow.querySelectorAll("img");
    if (!slides.length) return;

    let current = parseInt(slideshow.dataset.start, 10) || 0;
    slides.forEach(img => img.classList.remove("active"));
    slides[current].classList.add("active");

    setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");
    }, 6000);
  }

  document.querySelectorAll(".slideshow").forEach(initSlideshow);
});