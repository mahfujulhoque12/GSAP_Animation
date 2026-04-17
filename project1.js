let menu = document.querySelector("#nav button i");
let cross = document.querySelector("#full button i");

let tl = gsap.timeline();

tl.to("#full", {
  right: "0",
  duration: 0.7,
});

tl.from("#full p", {
  x: 150,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("#full button i", {
  opacity: 0,
});

tl.pause();

menu.addEventListener("click", () => {
  tl.play();
});

cross.addEventListener("click", () => {
  tl.reverse();
});
