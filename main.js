

const nav = document.querySelectorAll('.nav1');
const burger = document.querySelector('.burger');
const burgerTwo = document.querySelector('.burger-2')
const li = document.querySelector('.nav-1')



nav.forEach((navs) => {
    navs.addEventListener('click', () => {
        removeClass();
        navs.classList.add('active')
    })
})

function removeClass() {
    nav.forEach((navs) => {
        navs.classList.remove('active')
    })
}

// var timeline = gsap.timeline(
//     { reversed: true }
// )



// timeline
//     .fromTo('.nav-links', { x: '100%' }, { duration: 0.5, x: 0 })

//     .fromTo(li, { opacity: 0 }, { duration: 0.5, opacity: 1 });

// burger.addEventListener("click", () => {

//     console.log("hello")
//     if (timeline.reversed()) {

//         timeline.play();

//         return
//     }

//     timeline.reverse()
// })

// burgerTwo.addEventListener("click", () => {
//     if (timeline.isActive()) {

//         timeline.reverse();

//         return
//     }
// })