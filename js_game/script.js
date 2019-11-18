document.addEventListener("keydown", jump);

function jump(event) {
  var mau = document.getElementById("mau");
  switch (event.keyCode) {
    case 32:
      let start = Date.now(); // remember start time
      let timer = setInterval(function() {
        // how much time passed from the start?
        let timePassed = Date.now() - start;

        if (timePassed >= 1700) {
          clearInterval(timer); // finish the animation after 1.7 seconds
        }
        // draw the animation at the moment timePassed
        draw(timePassed);
      }, 29);

      function draw(timePassed) {
        if (timePassed >= 300) {
          mau.style.top = timePassed / 27 + "%";
        }
      }
  }
}
