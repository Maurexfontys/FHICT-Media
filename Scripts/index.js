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
  "Hallo, mijn naam is Maurice Waelen (20), ik studeer ICT & Media Design aan de Fontys Hogeschool ICT te Eindhoven  Naast mijn studie ben ik ook veel bezig met StinStin Multimedia. Een eigen bedrijfje dat met een paar vrienden is opgezet. Stinstin Multimedia Design is gevestigd in Haelen en biedt verschillende producten aan op het gebied van webdesign, grafische vormgeving, film en fotografie. Wij kunnen daarmee een complete multimedia oplossing voor bedrijven/ particulieren bieden. Ook hebben wij een professionele kortfilm genaamd 2Fast4U gemaakt. Waar ik ook een scene in meespeel. Deze kortfilm is ook geselecteerd voor het amateur filmfestival in Cannes (Frankrijk)."; /* The text */
var speed = 5; /* The speed/duration of the effect in milliseconds */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("txt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log("ok");
  }
};
