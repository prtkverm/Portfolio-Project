const skillsAnimation = anime.timeline({
  duration: 750,
  easing: "easeOutExpo"
});

skillsAnimation
  .add({
    targets: ".one",
    opacity: 1
  })
  .add({
    targets: ".dynamic-section",
    translateY: "-40px",
    delay: 2000
  })
  .add(
    {
      targets: ".two",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".one",
      opacity: 0
    },
    "-=1000"
  )
  .add({
    targets: ".dynamic-section",
    translateY: "-80px",
    delay: 2000
  })
  .add(
    {
      targets: ".three",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".two",
      opacity: 0
    },
    "-=1000"
  )
  .add({
    targets: ".dynamic-section",
    translateY: "-120px",
    delay: 2000
  })
  .add(
    {
      targets: ".four",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".three",
      opacity: 0
    },
    "-=1000"
  )
  .add({
    targets: ".dynamic-section",
    translateY: "-160px",
    delay: 2000
  })
  .add(
    {
      targets: ".five",
      opacity: 1
    },
    "-=500"
  )
  .add(
    {
      targets: ".four",
      opacity: 0
    },
    "-=1000"
  );
