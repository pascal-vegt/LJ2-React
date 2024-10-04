
object = document.getElementById("objectContainer")

for (let i = 0; i < 1856; i++) {
    object.innerHTML += "<div class=pixel></div>"
    
}

for (let j = 0x000000; j < 0xffffff; j++) {
    randomColor = j;
}

let timeline = gsap.timeline({repeat: -1, repeatDelay: 0.1});
timeline.to(".pixel", {backgroundColor: randomColor, stagger: 0.1})
timeline.to(".pixel", {backgroundColor: randomColor, stagger: 0.1})