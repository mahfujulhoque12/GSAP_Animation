function breakTheText() {
  let h2 = document.querySelector("h2");
  let h2Text = document.querySelector("h2").textContent;
  let splitText = h2Text.split("");

  let halfValue = Math.floor(splitText.length / 2);

  let clutter = "";
  splitText.forEach((e, idx) => {
    if (idx < halfValue) {
      clutter += `<span class="a">${e}</span>`;
    } else {
      clutter += `<span class="b">${e}</span>`;
    }
  });

  h2.innerHTML = clutter;
  console.log(clutter);
}

breakTheText();

gsap.from("h2  .a", {
  y: 40,
  duration: 0.8,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});

gsap.from("h2  .b", {
  y: 40,
  duration: 0.8,
  opacity: 0,
  delay: 0.5,
  stagger: -0.3,
});
