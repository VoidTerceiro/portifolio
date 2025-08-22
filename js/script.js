function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./img/9d3983a1b284f3b7e689f26aa2b011b5.png");
  } else {
    img.setAttribute("src", "./img/14374f6454e77e82c48051a3bb61dd9c.jpg");
  }
}