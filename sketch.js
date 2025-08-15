let objects = [];
let phyEng;
let menuItems;
let canvas;
let objectsListFrame;
function setup() {
  objectsListFrame = select("#objects");
  canvas = createCanvas(windowWidth - 250, windowHeight);
  setUpMenu();

  canvas.mouseClicked(canvasClicked);
  phyEng = new PhysicsEngine();
}
function windowResized() {
  resizeCanvas(windowWidth - 250, windowHeight);
}

function draw() {
  background("white");
  phyEng.update(objects);
  renderer(objects);
}

let counter = 0;
function canvasClicked() {
  let name = menuItems[0].value();
  let velX = int(menuItems[1].value());
  let velY = -1 * int(menuItems[2].value());
  let accX = int(menuItems[3].value());
  let accY = -1 * int(menuItems[4].value());
  let showPath = menuItems[5].checked();
  let mass = int(menuItems[6].value());
  let color = menuItems[7].value();
  let radius = int(menuItems[8].value());
  objects.push(
    new PhysicsSphere(
      name,
      radius,
      createVector(mouseX, mouseY),
      createVector(velX, velY),
      createVector(accX, accY),
      mass,
      showPath,
      color
    )
  );
  counter += 1;
  renderObjects();
}
function setUpMenu() {
  let nameInput = select("#Name");
  let velXInput = select("#velX");
  let velYInput = select("#velY");
  let accXInput = select("#accX");
  let accYInput = select("#accY");
  let showPathInput = select("#showPath");
  let massInput = select("#mass");
  let colorInput = select("#clr");
  let radiusInput = select("#radius");
  //initialize
  velXInput.value(0);
  velYInput.value(0);
  accXInput.value(0);
  accYInput.value(0);
  nameInput.value("Obj" + counter);
  showPathInput.checked(false);
  massInput.value(1);
  colorInput.value("#ff0000");

  menuItems = [
    nameInput,
    velXInput,
    velYInput,
    accXInput,
    accYInput,
    showPathInput,
    massInput,
    colorInput,
    radiusInput,
  ];
}
function resetInputs() {
  menuItems[0].value("Obj" + counter);
  menuItems[1].value(0);
  menuItems[2].value(0);
  menuItems[3].value(0);
  menuItems[4].value(0);
  menuItems[5].checked(false);
  menuItems[6].value(1);
  menuItems[7].value("#ff0000");
  menuItems[8].value(30);
}
function createOptions(objects) {
  let options = "";
  for (let obj of objects) {
    options += `<button  onclick="deleteObj('${obj.id}')">${obj.name}:${obj.mass}</button>`;
  }
  return options;
}
function deleteObj(id) {
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].id === id) {
      objects.splice(i, 1);
    }
  }
  renderObjects();
}
function resetObjects() {
  objects = [];
  renderObjects();
}
function renderObjects() {
  objectsListFrame.html(createOptions(objects));
}
