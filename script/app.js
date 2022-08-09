// Typewriter created by Tameem Safi
// source: https://github.com/tameemsafi/typewriterjs
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 40,
    deleteSpeed: 4
});

typewriter.typeString('Hello!')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Welcome to my Web Portfolio.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am a student at UT Arlington.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am majoring in Software Engineering.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am interested in cloud computing & UI/UX.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I am based in Dallas, TX.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Contact me for further inquiries!")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("Thank you for visiting!")
    .pauseFor(1000)
    .deleteAll()
    .start();
