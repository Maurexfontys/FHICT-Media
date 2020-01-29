document.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
document.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

const pipeCount = 15;

let pipes = [];

let player = {
  position: {
    x: 300,
    y: 500
  },
  velocity: {
    x: 0,
    y: 0
  },
  dimensions: {
    width: 30,
    height: 30
  }
};

var canvas,
  menuActive = true,
  maxVelY = 6,
  speed = 3,
  jumpSpeed = 2,
  inertia = 0.92,
  keys = [],
  jumping = false,
  onGround = true,
  gravity = 0.3,
  platformX = [100, 520],
  platformY = [200, 110],
  groundX = [],
  groundY = [],
  platformNumber,
  currentOffsetX = 0,
  min_offset = 100,
  max_offset = 900,
  blockstart = 0,
  groundBlocks = 20;
const BLOCK_HEIGHT = 45,
  BLOCK_WIDTH = 45;
window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  init();
  render();
  //starts game if enter is pressed
};

function init() {
  for (var i = 0; i < pipeCount; i++) {
    pipes.push({
      position: {
        x: 900 + 300 * i,
        y: 320 - 200 * Math.random()
      },
      dimensions: {
        width: 10,
        height: 180
      },
      color: "white"
    });
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  move();
  var hit = collisionDetection(player, pipes);

  if (hit !== null) {
    hit.color = "red";
  }

  drawLevel();
  drawPipes(pipes);

  requestAnimationFrame(render); //recursively updates the level
}

//draws the level and character
function drawLevel() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  var circle = ctx.arc(
    player.position.x,
    player.position.y,
    player.dimensions.width,
    0,
    Math.PI * 2,
    true
  );
  ctx.fill();
}

//moves character
function move() {
  if (keys[32]) {
    //if space is pressed
    player.velocity.y = -maxVelY; //sets the initial velocity when jumping
    jumping = true;
    onGround = false;
  }

  if (jumping == true) {
    //if the character is moving upwards
    player.velocity.y += gravity; //addi
    player.velocity.y *= inertia;
    player.position.y += player.velocity.y;
    for (var i = 0; i < groundBlocks; i++) {
      if (
        player.position.y <= 500 &&
        player.position.y >= 492 &&
        player.position.x <= groundX[i] + 45
      ) {
        //if the ball is on the ground, stop subtracting gravity from Y coord
        jumping = false;
        onGround = true;
      }
    }
  }
}

function bigBlock(xIn, yIn, colorIn, sizeXin = 1, sizeYin = 1) {
  sizeX = xIn + sizeXin;
  sizeY = yIn + sizeYin;
  for (var i = xIn; i < sizeX; i++) {
    for (var z = yIn; z < sizeY; z++) {
      groundX[i] = i * 45;
      stackBlock(i, z, colorIn);
    }
  }
}

function stackBlock(xin, yin, colorIn, hide = false) {
  var sum = BLOCK_HEIGHT * yin; // + yin;
  var sum2 = BLOCK_WIDTH * xin; // + xin;
  var b_height = canvas.height - sum;
  var b_long = sum2;
}

function colorRect(leftX, topY, width, height) {
  ctx.fillRect(leftX, topY, width, height);
}
