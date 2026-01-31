const text = "Semua orang itu jenius. Tapi jika kamu menilai seekor ikan dari kemampuannya memanjat pohon, ia akan hidup seumur hidupnya merasa bodoh.";
const quoteEl = document.getElementById("quote");
const boom = document.getElementById("boom");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.classList.add("letter");
    quoteEl.appendChild(span);
    i++;
    setTimeout(typeWriter, 40);
  } else {
    setTimeout(explodeText, 800);
  }
}

function explodeText() {
  document.body.classList.add("shake");
  boom.play();

  document.querySelectorAll(".letter").forEach(letter => {
    const x = (Math.random() - 0.5) * 800 + "px";
    const y = (Math.random() - 0.5) * 600 + "px";
    const r = (Math.random() - 0.5) * 720 + "deg";
    letter.style.setProperty("--x", x);
    letter.style.setProperty("--y", y);
    letter.style.setProperty("--r", r);
  });

  quoteEl.classList.add("explode");
}

// Mulai efek ketik
typeWriter();
