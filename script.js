const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "Light" : "Dark";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);

  themeToggle.textContent = nextTheme === "dark" ? "Light" : "Dark";
});

year.textContent = new Date().getFullYear();
