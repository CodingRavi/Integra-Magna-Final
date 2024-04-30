// Navebar and footer Add 
$(function () {
  $("#nav-placeholder").load("/nav-bar.html");
  $("#Footer_placeholder").load("/footer.html");
});



// grid A culture that wins 

let tl = gsap.timeline({
       
    scrollTrigger: {
      trigger: ".culture-that-win-section",
     
      start: "top bottom",
      pin: false, 
      scrub: 1, 
      scrub: true, 
      onUpdate: self => {
        const rotation = self.progress * 720;
        gsap.set(".star-rotation",{rotation: -rotation});
        gsap.set(".community-wheel-rotation-gsap", { rotation: rotation });
      }
    },
  });

  // Accodetion

  $(document).ready(function() {
    $(".set > a").on("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("border_bottom")
          .removeClass("fa-times")
          .addClass("fa-plus");
      } else {
        $(".set > a i")
          .removeClass("border_bottom")
          .removeClass("fa-times")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .removeClass("fa-plus")
          .addClass("fa-times");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  });

  // Footer
$(function(){
  $("#Footer_placeholder").load("/Footer.html");
});



  