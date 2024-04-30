let menuBtn = document.getElementsByClassName("openButton");
let sidebar = document.getElementsByClassName("sidebar")[0];
let links = document.getElementsByClassName(".sidebar-navlinks>.nav-item>a");
let aniamted_wheel = document.getElementsByClassName("animation-wheel")[0];
let open_Button = document.getElementsByClassName("openButton")[0];

gsap.registerPlugin(ScrollTrigger);
let initialCount = 1;

let intentObserver = ScrollTrigger.observe({
    type: "wheel,touch",
    onUp: (self) => headerup(),
    onDown: (self) => headerdown(),
    wheelSpeed: -1,
    tolerance: 10,
    preventDefault: false,
});
const head_scroll_up =
    document.getElementsByClassName("header-scroll-up");
function headerup() {
    for (let i = 0; i < head_scroll_up.length; i++) {
        head_scroll_up[i].style.transform = "translateY(-30vh)";
    }
    console.log();
};
function headerdown() {
    for (let i = 0; i < head_scroll_up.length; i++) {
        head_scroll_up[i].style.transform = "translateY(0)";
    }
};

window.closeSidebar = function () {
    if (initialCount == 1) {
        gsap.fromTo(".sidebar-navlinks>.nav-item>a", { y: 100 }, { duration: .6, y: 0, stagger: .3 });
        gsap.fromTo(".social-media-links>li>a", { x: -100 }, { duration: .6, x: 0, stagger: .3 });

        sidebar.style.transform = "translate3d(0, 0, 0)";
        aniamted_wheel.style.bottom = "-60px";
        open_Button.style.transform = "translateY(0px)";
        document.body.classList.add('no-scroll');
        initialCount = 0;
    } else {
        sidebar.style.transform = "translate3d(0, -100%, 0)";
        aniamted_wheel.style.bottom = "60px";
        open_Button.style.transform = "translateY(-45px)";
        document.body.classList.remove('no-scroll');
        initialCount = 1;
    }
};
