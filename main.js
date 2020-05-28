const tl = anime.timeline({
  duration: 750,
  easing: "easeOutExpo"
});

tl.add({
  targets: ".a",
  opacity: 1
})
  .add({
    targets: "ul p",
    translateY: "-40px",
    delay: 2000
  })
  .add(
    {
      targets: ".b",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".a",
      opacity: 0
    },
    "-=1000"
  )
  .add({
    targets: "ul p",
    translateY: "-80px",
    delay: 2000
  })
  .add(
    {
      targets: ".c",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".b",
      opacity: 0
    },
    "-=1000"
  );
