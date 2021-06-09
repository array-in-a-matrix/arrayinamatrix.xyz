let random_theme = [
  // ["#ff8008", "#ffc837"], //orange
  // ["#4A00E0", "#8E2DE2"], //purple
  // ["#FF512F", "#F09819"], //orange
  // ["#FF5F6D", "#FFC371"], //pink
  // ["#FF416C", "#FF4B2B"], //pink-orange
  // ["#ee0979", "#ff6a00"], //pink-orange
  // ["#ec008c", "#fc6767"], //pink
  // ["#f857a6", "#ff5858"], //pink
  // ["#00c3ff", "#ffff1c"], //blue-lime
  // ["#e1eec3", "#f05053"], // white-pink
  // ["#5433FF", "#20BDFF"], //ugly blue
  // ["#00c6ff", "#0072ff"], //light blue
  // ["#4e54c8", "#8f94fb"], //purple
  ["#396afc", "#2948ff"], //? blue
  ["#673AB7", "#512DA8"], //dark purple
  // ["#4776E6", "#8E54E9"], //purple
  // ["#DA22FF", "#9733EE"], // violet
  ["#c31432", "#240b36"], //? red
  ["#ad5389", "#3c1053"], //? purple
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