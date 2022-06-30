const playbtn = document.querySelector('.burger');
const reversebtn = document.querySelector('.burger-2');
const bothbtn = document.querySelector('.both');




var timeline = gsap.timeline();


timeline
    .fromTo('.nav-links', { x: '-100%' }, { duration: 0.5, x: '0%' })

    .fromTo('.nav-1', { opacity: 0 }, { duration: 0.5, opacity: 1 });

playbtn.addEventListener('click', () => {
    console.log("play");
    timeline.play()
});

reversebtn.addEventListener('click', () => {
    console.log("pause");
    timeline.reverse()
});