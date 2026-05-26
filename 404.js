const cursorGlow = document.getElementById("cursorGlow");

window.addEventListener("pointermove", (event) => {
  if (!cursorGlow) return;

  cursorGlow.animate(
    {
      left: `${event.clientX}px`,
      top: `${event.clientY}px`,
    },
    {
      duration: 450,
      fill: "forwards",
      easing: "ease-out",
    }
  );
});
