// Navebar and footer Add 
$(function () {
  $("#nav-placeholder").load("/nav-bar.html");
  $("#Footer_placeholder").load("/footer.html");
});

const sectionS = document.getElementsByClassName("about-us-gallary-section");
    const winHeight = window.innerHeight;
    const ele = document.getElementsByClassName("about-us-gallary-grid");
    sectionS[0].style.marginTop = -winHeight + " !important";

    
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-us-grid-section",
            start: "top top",
            end: "250%",
            onUpdate: self => fix(self.progress),
            scrub: 1,
            pin: true
        }
    });


    function fix(progression) {
       
    }
    tl.to(".about-us-gallary-container", { scale: 2 })
    .to(".grid-video",{scale:1},0)
    .to(".vertical-move-column",{y:800},0);




// Meet the founder
const Meet_the_founder_container = document.querySelector(
    ".Meet_the_founder_container"
  );
  const service_div_padding = document.querySelector(
    ".Meet_The_Founders_Misbah_Qureshi_Founder"
  ).clientWidth;

  const smallDevice = window.matchMedia("(min-width: 960px)");
  smallDevice.addListener(handleDeviceChange);
  function handleDeviceChange(e) {
    if (e.matches) {
      gsap.registerPlugin(ScrollTrigger);

      function getScrollAmount() {
        let service_containerWidth = Meet_the_founder_container.scrollWidth;
        return -(
          service_containerWidth -
          window.innerWidth +
          2 * service_div_padding
        );
      }

      const tween = gsap.to(Meet_the_founder_container, {
        x: getScrollAmount,
        duration: 10,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".Meet_The_Founder_wrapper",
        start: "center 50%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        invalidateOnRefresh: true,
        scrub: 1,
      });
    } else {
    }
  }
  handleDeviceChange(smallDevice);


  // The Quirky Family We Chose


  // Resize refresh
  window.onresize = function () {
    location.reload();
    console.log("refresh")
  };


 
  

