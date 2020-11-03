var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString(`"Puneet Birdi"`)
  .start();


  ScrollReveal().reveal('.grid-item', { duration: 750 })
  ScrollReveal().reveal('.grid-skill', { duration: 750 })
  ScrollReveal().reveal('.project-container', { duration: 750 })
  ScrollReveal().reveal('.thumbnail', { duration: 1000 })