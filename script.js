let randomthemes = [
  ["#ff8008", "#ffc837"],
  ["#4A00E0", "#8E2DE2"],
  ["#FF512F", "#F09819"],
  ["#FF5F6D", "#FFC371"],
  ["#FF416C", "#FF4B2B"],
  ["#ee0979", "#ff6a00"],
  ["#ec008c", "#fc6767"],
  ["#f857a6", "#ff5858"],
  ["#00c3ff", "#ffff1c"],
  ["#e1eec3", "#f05053"],
  ["#a8ff78", "#78ffd6"],
  ["#B3FFAB", "#12FFF7"],
  ["#AAFFA9", "#11FFBD"],
  ["#5433FF", "#20BDFF"],
  ["#00c6ff", "#0072ff"],
  ["#4e54c8", "#8f94fb"],
  ["#396afc", "#2948ff"],
  ["#673AB7", "#512DA8"],
  ["#4776E6", "#8E54E9"],
  ["#DA22FF", "#9733EE"],
];

function rand(items) {
  return items[~~(items.length * Math.random())];
}
let randcolor = rand(randomthemes);
document.documentElement.style.setProperty("--left", randcolor[0]);
document.documentElement.style.setProperty("--right", randcolor[1]);

function quadratic(numA, numB, numC) {
  Xint1 = (-numB + Math.sqrt(Math.pow(numB, 2) - 4 * numA * numC)) / (2 * numA);
  Xint2 = (-numB - Math.sqrt(Math.pow(numB, 2) - 4 * numA * numC)) / (2 * numA);
  return [Xint1, Xint2];
}
