const glow = document.getElementById("cursorGlow");

if (glow) {
  window.addEventListener("pointermove", (event) => {
    glow.style.opacity = "1";
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  });

  window.addEventListener("pointerleave", () => {
    glow.style.opacity = "0";
  });
}

const photo = document.querySelector(".profile-photo");
const fallback = document.querySelector(".photo-fallback");

if (photo && fallback) {
  photo.addEventListener("load", () => {
    fallback.style.display = "none";
  });

  photo.addEventListener("error", () => {
    photo.style.display = "none";
    fallback.style.display = "grid";
  });
}
