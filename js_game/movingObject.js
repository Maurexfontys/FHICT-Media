document.addEventListener("keydown", drawPipe);

function drawPipes(pipes) {
  for (var pipe of pipes) {
    drawPipe(pipe);
  }
}

function drawPipe(pipe) {
  ctx.beginPath();
  ctx.fillStyle = pipe.color;
  var rect = ctx.fillRect(
    pipe.position.x,
    pipe.position.y,
    pipe.dimensions.width,
    pipe.dimensions.height
  );
  ctx.closePath();
  pipe.position.x = pipe.position.x - 3;
  console.log(pipe.position.x);
}
