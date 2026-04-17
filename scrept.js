// gsap.to("#page1 #box h2", {
//   transform: "translateX(-150%)",
//   scrollTrigger: {
//     trigger: "#page1",
//     scroller: "body",
//     start: "top 0%",
//     end: "top -150%",
//     scrub: 3,
//     pin: true,
//   },
// });

// let initialPath = `M 10 100 Q 500 100 960 100`;
// let finalPath = `M 10 100 Q 500 100 960 100`;

// let string = document.querySelector("#page2");

// string.addEventListener("mousemove", (dets) => {
//   initialPath = `M 10 100 Q ${dets.x} ${dets.y} 960 100`;
//   gsap.to("svg path", {
//     attr: { d: initialPath },
//     duration: 0.2,
//     ease: "power3.out",
//   });
// });

// string.addEventListener("mouseleave", () => {
//   gsap.to("svg path", {
//     attr: { d: finalPath },
//     duration: 2.5,
//     ease: "elastic.out(1,0.2)",
//   });
// });

const main = document.querySelector("#page3");
const cursor = document.querySelector("#cursor");
const imageDiv = document.querySelector("#image");

main.addEventListener("mousemove", (dets) => {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
  });
});

imageDiv.addEventListener("mouseenter", () => {
  cursor.innerHTML = "Badon More";
  gsap.to(cursor, {
    scale: 4,
  });
});

imageDiv.addEventListener("mouseleave", () => {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
  });
});
