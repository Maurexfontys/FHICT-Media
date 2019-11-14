/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var i = 0;
var txt =
  "Hallo, mijn naam is Maurice Waelen (20), ik studeer ICT & Media Design aan de Fontys Hogeschool ICT te Eindhoven.                                                     Naast mijn studie ben ik ook veel bezig met StinStin Multimedia. Een eigen bedrijfje dat met een paar vrienden is opgezet. Stinstin Multimedia Design is gevestigd in Haelen en biedt verschillende producten aan op het gebied van grafische vormgeving, film en fotografie. Wij kunnen daarmee een complete multimedia oplossing voor bedrijven/ particulieren bieden. Ook hebben wij een professionele kortfilm genaamd 2Fast4U gemaakt. Waar ik ook een scene in meespeel.                                                                   Deze kortfilm is ook geselecteerd voor het amateur filmfestival in Cannes (Frankrijk)."; /* The text */
var speed = 15; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log("ok");
  }
};

(function() {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
