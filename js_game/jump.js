document.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
document.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

let pipes = [];
let player = {};

const pipeCount = 15,
  maxVelY = 6,
  inertia = 0.92,
  gravity = 0.3,
  BLOCK_HEIGHT = 45,
  BLOCK_WIDTH = 45;

var canvas,
  jumping = false,
  onGround = true,
  keys = [],
  groundX = [],
  groundY = [],
  groundBlocks = 20,
  diedCount = 0;

window.onload = function() {
  init();
  render();
  //starts game if enter is pressed
};

function init() {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");

  player = {
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

  pipes = [];
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
    diedCount++;
    if (diedCount < 3) init();
    else return gameOver();
  }

  drawLevel();
  drawPipes(pipes);
  drawScore();

  requestAnimationFrame(render); //recursively updates the level
}

function gameOver() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  drawLevel();
  drawPipes(pipes);
  drawScore();
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Game Over!", canvas.width / 2 - 100, canvas.height / 2);
}

function drawScore() {
  let score = 0;

  for (var pipe of pipes) {
    if (pipe.position.x + player.position.x < player.position.x) {
      score += 10;
    }
  }

  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.fillText("Score: " + score, 100, 100);
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
