let random_theme = [
  ["#c31432", "#240b36"],
  ["#ad5389", "#3c1053"],
  ["#2e1c30", "#937898"],
];

function rand(items) {
  return items[~~(items.length * Math.random())];
}

let random_color = rand(random_theme);
document.documentElement.style.setProperty("--left", random_color[0]);
document.documentElement.style.setProperty("--right", random_color[1]);

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
