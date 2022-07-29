const changeThemeBtn = document.querySelector("#change-theme");

// Toogle Dark Mode

function toogleDarkMode() {
  document.body.classList.toggle("dark");
}

// Load light or dark Mode

function loadTheme() {
  const darkMode = localStorage.getItem("dark");
  if (darkMode) {
    toogleDarkMode();
  }
}

loadTheme();

changeThemeBtn.addEventListener("change", () => {
  toogleDarkMode();

  //Save or remove dark mode
  localStorage.removeItem("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
