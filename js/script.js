window.addEventListener("load", function () {
    ScrollTrigger.refresh();
});


function lenisScroll() {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

}
lenisScroll()




function loaderAnimation() {
    
    const tl1 = gsap.timeline();
    tl1.to("#loader .loader-div1", {
        y: "-120%",
        duration: 1.5,
        ease: "power1.out",
        delay:0.5
    },"loader");
    tl1.to("#loader .loader-div2", {
        y: "120%",
        duration: 1.5,
        ease: "power1.out",
        delay:0.5
    },"loader");
    tl1.to("#loader", {
        display:"none",
        duration: 0.01
    });
    tl1.from("nav ul li", {
        y:-40,
        duration: 0.8,
        stagger:0.1
    });

}
loaderAnimation()


// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     center:false,
//     video:true,
//     dots:false,
//     autoplay:true,
//     lazyLoad:true,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:3,
//             nav:true
//         }
//     }
// })
