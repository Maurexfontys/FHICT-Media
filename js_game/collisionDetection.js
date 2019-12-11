function collisionDetection(player, pipes) {
  for (var pipe of pipes) {
    if (intersects(player, pipe)) {
      return pipe;
    }
  }
  return null;
}

function intersects(player, pipe) {
  return (
    player.position.x < pipe.position.x + pipe.dimensions.width &&
    player.position.x + player.dimensions.width > pipe.position.x &&
    player.position.y < pipe.position.y + pipe.dimensions.height &&
    player.position.y + player.dimensions.height > pipe.position.y
  );
}
