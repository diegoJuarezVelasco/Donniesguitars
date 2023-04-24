gsap.registerPlugin(ScrollTrigger);
const slides = gsap.utils.toArray(".slide");
const box = gsap.utils.toArray(".servicio-box");
const slideRight = gsap.utils.toArray(".slide-right");

const t1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".we-box1",
    start: "top 100%",
    end: "top 20%",
    toggleActions: "restart none none none"
  }
});

t1.from(".we-box1", {x:-20, duration:1, ease:"sine", opacity: 0})
  .from(".we-box2", {x:-20,duration:1, ease:"sine",opacity: 0})
  .from(".we-box3", {x:-20, duration:1, ease:"sine",opacity: 0})
  
  


slideRight.forEach(slideRight => {
  gsap.from(slideRight, {
      scrollTrigger: {
        trigger: slideRight,
        toggleActions: "restart none none none",
      },
      y: 50,
      duration: 2.5,
      ease: "sine",
      opacity: 0.1,
    });

})


slides.forEach(slide => {
    gsap.from(slide, {
        scrollTrigger: {
          trigger: slide,
          toggleActions: "restart none none none",
        },
        x: -50,
        duration: 2.5,
        ease: "sine",
        opacity: 0.1,
      });

})
box.forEach(box => {
  gsap.from(box, {
      scrollTrigger: {
        trigger: box,
        toggleActions: "restart none none none",
      },
      y: -50,
      duration: 2.5,
      ease: "sine",
      opacity: 0.1,
    });

})
