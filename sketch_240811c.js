// Project Name: Grid Generator
// Artist: Joy Peter

let matrix = [
  "#9fb943",
  "#607e37",
  "#b6c89f",
  "#262d1e",
  "#345530",
  "#3b673f",
  "#5a8662",
];
let ironman = ["#600000", "#742300", "#cc0000", "#df7c00", "#ffa700"];
let aqua = ["#8ce2ee", "#93bae1", "#8984d6", "#7251b2", "#642e7c"];
let inkPink = [
  "#ffffff",
  "#fe6c90",
  "#d03791",
  "#87286a",
  "#452459",
  "#260d34",
];

let palette = matrix;
let mode = 0;
let font;
let s = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  smooth();
  noStroke();
  frameRate(10);
}

function draw() {
  textSize(40);

  //Add font
  textFont("Oswald");
  text("🎮🕹️👾 Press a,s,d,f to change color", 50, 50);

  for (let x = 0; x < width; x += s) {
    for (let y = height / 10; y < height; y += s) {
      switch (mode) {
        case 0:
          palette = matrix;
          fill(palette[int(random(1, palette.length))]);
          break;
        case 1:
          palette = ironman;
          fill(palette[int(random(1, palette.length))]);
          break;
        case 2:
          palette = aqua;
          fill(palette[int(random(1, palette.length))]);
          break;
        case 3:
          palette = inkPink;
          fill(palette[int(random(1, palette.length))]);
          break;
        default:
        //
      }

      stroke(10);
      rect(x, y, s, s);
    }
  }
}

function keyPressed() {
  if (key === "a") {
    mode = 0;
  } else if (key === "s") {
    mode = 1;
  } else if (key === "d") {
    mode = 2;
  } else if (key === "f") {
    mode = 3;
  }
}
