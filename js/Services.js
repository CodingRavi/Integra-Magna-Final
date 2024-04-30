// Navebar and footer Add 
$(function () {
  $("#nav-placeholder").load("/nav-bar.html");
  $("#Footer_placeholder").load("/footer.html");
});


const ContanerWidth = document.querySelector(
    ".images_shape_move_container"
  );
  const ShapeWidth = document.querySelector(".img1");
  // console.log(ContanerWidth.clientWidth, ShapeWidth.clientWidth);
  gsap.registerPlugin(ScrollTrigger);
  let horizontalSection = document.querySelector(".img1");
  let ShapeLength = horizontalSection.scrollWidth;
  let endcon = ""
  gsap.to(".img1", {
    x: -(window.innerWidth)/4,
    scrollTrigger: {
      trigger: ".service-hero-section",
      start: "center center",
      end: `${window.innerHeight}`,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
  gsap.to(".img2", {
    x: (window.innerWidth)/4,
    scrollTrigger: {
      trigger: ".service-hero-section",
      start: "center center",
      end: `${window.innerHeight}`,
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

//   Services ssectiion

const service_container = document.querySelector(".service_container");
const service_div_padding = parseInt(window.getComputedStyle(document.querySelector(".service_div")).getPropertyValue('padding-left'));






    const smallDevice = window.matchMedia('(max-width: 960px)');
    smallDevice.addListener(handleDeviceChange);
    function handleDeviceChange(e) {
        if (e.matches) {

          
        }
        else {
            function getScrollAmount() {
                let service_containerWidth = service_container.scrollWidth;
                return -(service_containerWidth - window.innerWidth + 3 * (service_div_padding));
            }

            const tween = gsap.to(service_container, {
                x: getScrollAmount,
                duration: 10,
                ease: "none",
            });

            ScrollTrigger.create({
                trigger: ".Service-section-wrapper",
                start: "center 45%",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            })


        };
    }

    handleDeviceChange(smallDevice);


    // testomony

    (function ($) {
      "use strict";
  
     
      var $testimonialCarousel1 = $(".testimonial-carousel-1");
      var $testimonialCarousel2 = $(".testimonial-carousel-2");
  
    
      if ($testimonialCarousel1.length) {
        $testimonialCarousel1.owlCarousel({
         
          loop: true,
          margin: 0,
          nav: false,
          mouseDrag: false,
          touchDrag: false,
          smartSpeed: 600,
          
          dots: true,
          navText: [
            '<span class="arrow-left"></span>',
            '<span class="arrow-right"></span>',
          ],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              nav: false,
            },
            640: {
              items: 1,
              dots: true,
              // nav: true,
            },
            1200: {
              items: 1,
              nav: true,
              dots: false,
            },
          },
          
        });
      }
  
     
      if ($testimonialCarousel2.length) {
        $testimonialCarousel2.owlCarousel({
         
          loop: true,
          margin: 0,
          nav: false,
          mouseDrag: false,
          touchDrag: false,
          smartSpeed: 600,
         
          dots: false,
          navText: [
            '<span class="arrow-left"></span>',
            '<span class="arrow-right"></span>',
          ],
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            640: {
              items: 1,
            },
            1200: {
              items: 1,
              
            },
          },
        });
  
      }
  
   
      $testimonialCarousel1.on("changed.owl.carousel", function (event) {
        var currentItem = event.item.index;
     
        $testimonialCarousel2.trigger("to.owl.carousel", [currentItem + 2, 600, true]);
      });
    
      $testimonialCarousel2.on("changed.owl.carousel", function (event) {
        var currentItem = event.item.index;
  
      });
  
  
    
      $(".testimonial-carousel-1 .owl-next").on("click", function () {
        
      });
  
      $(".testimonial-carousel-1 .owl-prev").on("click", function () {
       
      });
  
  
      function syncCarousels(event) {
        if (event.namespace && event.property.name === "position") {
          var current = event.relatedTarget.relative(event.property.value);
  
        }
      }
  
    })(window.jQuery);








