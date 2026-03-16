const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear().toString();
}

const themeToggle = document.querySelector(".theme-toggle");
const page = document.querySelector(".page");

const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
  if (!page) return;
  if (theme === "light") {
    page.dataset.theme = "light";
    document.documentElement.style.setProperty("--bg", "#f9fafb");
  } else {
    page.dataset.theme = "dark";
    document.documentElement.style.setProperty("--bg", "#050816");
  }
}

const savedTheme = window.localStorage.getItem(THEME_KEY);
if (savedTheme === "light" || savedTheme === "dark") {
  applyTheme(savedTheme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = page?.dataset.theme === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    window.localStorage.setItem(THEME_KEY, next);
  });
}

