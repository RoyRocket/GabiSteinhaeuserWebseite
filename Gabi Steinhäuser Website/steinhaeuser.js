/* steinhaeuser.js */
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerIcon = document.querySelector(".burger-icon");

  burgerIcon.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      e.stopPropagation();
      burgerMenu.classList.toggle("open");
    }
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      if (!burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove("open");
      }
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      burgerMenu.classList.remove("open");
    }
  });

  const popup = document.getElementById("datenschutz-popup");
  const okButton = document.getElementById("popUpOkBtn");

  popup.style.display = "flex";

  okButton.addEventListener("click", () => {
  popup.style.backdropFilter = "blur(0px)";
  popup.style.webkitBackdropFilter = "blur(0px)";
  popup.style.opacity = "0";
  const welcome = document.querySelector(".welcome");
  welcome.classList.add("visible");

  setTimeout(() => {
    popup.style.display = "none";
  }, 1000); // Wartezeit passend zur Transition-Dauer
});
});


document.addEventListener("DOMContentLoaded", () => {
  const bgBtn = document.getElementById("background-toggle");

  bgBtn.addEventListener("click", () => {
    document.body.classList.toggle("simple-mode");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const accBtn = document.getElementById("accessibility-btn");
  const accMenu = document.getElementById("accessibility-menu");

  accBtn.addEventListener("click", () => {
    accMenu.style.display = (accMenu.style.display === "block") ? "none" : "block";
    
  });
  let fontScale = 1.0;

function updateFontSize() {
  document.documentElement.style.fontSize = `${fontScale * 100}%`;
}

document.getElementById("increase-font").addEventListener("click", () => {
  fontScale += 0.1;
  updateFontSize();
});

document.getElementById("decrease-font").addEventListener("click", () => {
  fontScale = Math.max(0.5, fontScale - 0.1); // min. 50%
  updateFontSize();
});
});

//DiaShow
function initSlideshow(slideshow) {
  const slides = slideshow.querySelectorAll("img");
  let current = parseInt(slideshow.dataset.start, 10) || 0;

  // sicherstellen, dass nur das Startbild aktiv ist
  slides.forEach(img => img.classList.remove("active"));
  slides[current].classList.add("active");

  function showNextSlide() {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }

  setInterval(showNextSlide, 6000);
}

// alle Slideshows starten
document.querySelectorAll(".slideshow").forEach(initSlideshow);
