
// Navebar and footer Add 
$(function () {
  $("#nav-placeholder").load("/nav-bar.html");
  $("#Footer_placeholder").load("/footer.html");
});

// hero js
let smallDeviceHeroSection = window.matchMedia('(max-width: 960px)');

// console.clear();
gsap.registerPlugin(ScrollTrigger);

smallDeviceHeroSection.addListener(handleDeviceChange);
function handleDeviceChange(e) {
  if (e.matches) {

  }
  else {

    var image = document.getElementById("image");
    var ctx = image.getContext("2d");
    var imgelink =
      "https://integramagna.s3.ap-south-1.amazonaws.com/Integra_Magna/Landing-Page/integra-magna-landing-sequence/00";

    var image_lenght = 60;
    var currentImageIndex = 0;
    const imgarray = [];
    const loadedImages = [];
    for (var i = 1; i <= image_lenght; i++) {
      imgarray.push(imgelink + i + ".webp");
    }
    const images = [];
    for (let i = 1; i <= image_lenght; i++) {
      const img = new Image();
      img.src = imgelink + i + ".webp";
      images.push(img);
    }
    ctx.drawImage(images[0], 0, 0, image.width, image.height);


    window.onmousemove = function (event) {
      var image_index = 1
      event = event || window.event;
      var rect = image.getBoundingClientRect();
      var centerXRelativeToWindow =
        rect.left + rect.width / 2 + window.scrollX;
      var xRelativeToWindow =
        image.getBoundingClientRect().left + window.scrollX;
      var yRelativeToWindow =
        image.getBoundingClientRect().top + window.scrollY;
      var x = event.clientX / self.innerWidth;
      var y = event.clientY / self.innerWidth;
      image_index = Math.round(x.toFixed(2) * (image_lenght - 1));

      gsap.to(image, {
        rotation: -30 * (y - 0.25),
        duration: 0.1
      });

      gsap.to(image, {
        opacity: 1,
        duration: 0.2,
        onComplete: function () {

          ctx.clearRect(0, 0, image.width, image.height);
          ctx.drawImage(images[image_index], 0, 0, image.width, image.height);
          gsap.to(image, { opacity: 1, duration: 0.3 });

        }
      });
    };
  };
}

handleDeviceChange(smallDeviceHeroSection);

// Video Auto play

var video_container = $(".video_container");



function applyAnimation() {

  // console.log("hello");
  const screenWidth = window.innerWidth;
  if (screenWidth >= 960) {
    // var video_space = ($('.video_container_Autoplay').height() - $('.video_container').height());

    gsap.from(".video_container", {
      scale: .5,
      // y: `${-video_space} + "px"`,
      y: "-10%",
      transformOrigin: "top center",
      scrollTrigger: {
        trigger: "",
        start: "top top",
        end: () => `+=${document.querySelector(".video_container").offsetHeight}`,
        scrub: .1,
        pin: true,
        // anticipatePin: 1,
        invalidateOnRefresh: true,
        // markers: true
      },
    });
  }
  else {
    gsap.set(".video_container", {
      scale: 1,
      y: "0",
      transformOrigin: "top center"
    })
  }
}

applyAnimation();

window.addEventListener("resize", applyAnimation);



if (document.readyState !== "loading") {
  us_customDOMChanges();
} else {
  document.addEventListener("DOMContentLoaded", us_customDOMChanges);
}


function us_customDOMChanges() {
  const customCursor = document.querySelector(".custom-cursor");
  document.addEventListener("mousemove", (e) => {
    var left = e.clientX - 100;
    var top = e.clientY - 100;
    customCursor.style.left = `${left}px`;
    customCursor.style.top = `${top}px`;
    customCursor.style.mixBlendMode = "difference";
  });

  const sectionSelect = document.querySelector(".video-section");

  sectionSelect.addEventListener("mousemove", (e) => { });

  sectionSelect.addEventListener("mouseenter", () => {
    customCursor.style.visibility = "visible";
    customCursor.style.opacity = "1";
  });
  sectionSelect.addEventListener("mouseleave", () => {
    customCursor.style.visibility = "hidden";
    customCursor.style.opacity = "0";
  });
}


//   Type Writer


var TxtType = function (el, toRotate, period, colors) {
  this.toRotate = toRotate;
  this.colors = colors;
  this.el = el;

  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  var colorIndex = i % this.colors.length;
  this.el.style.color = this.colors[colorIndex];
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    var colors = JSON.parse(elements[i].getAttribute("data-color"));
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period, colors);
    }
  }

  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};


// imageChaning


function scrollimage_changing() {

  const canvas = document.getElementById("team-image-changing");
  const context = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = (innerWidth * 9) / 16;

  const frameCount = 46;
  const currentFrame = (index) =>
    `https://integramagna.s3.ap-south-1.amazonaws.com/Integra_Magna/Landing-Page/Scrolling-team-working/0${(
      index + 1
    )
      .toString()
      .padStart(0, "0")}.webp`;

  const images = [];
  const airpods = {
    frame: 0
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    // console.log(currentFrame(i));
    img.src = currentFrame(i);
    images.push(img);
  }

  // console.log("hello");
  const screenWidth = window.innerWidth;
  if (screenWidth >= 960) {
    let canvas_container_height = $('.canvas-container');
    $('.canvas-container').css('margin-top', -canvas_container_height[0].clientHeight + 10);
    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".canvas-container",
        start: "top top",
        end: `+=${(window.innerHeight) * 2}`,
        // markers: true,
        pin: true,
        scrub: 0.5
      },
      onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
    });

    images[0].onload = render;

    function render() {

      const aspectRatio = 16 / 9;
      const canvasAspectRatio = aspectRatio;

      let renderWidth = canvas.width;
      let renderHeight = canvas.height;

      if (aspectRatio > canvasAspectRatio) {
        renderWidth = canvas.width;
        renderHeight = canvas.width / aspectRatio;
      } else {
        renderWidth = canvas.height * aspectRatio;
        renderHeight = canvas.height;
      }

      const x = (canvas.width - renderWidth) / 2;
      const y = (canvas.height - renderHeight) / 2;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[airpods.frame], x, y, renderWidth, renderHeight);



    }
  }
  else {
    $('.canvas-container').css('margin-top', '0');
  }
}

scrollimage_changing();


// Landing Service
function landingServiceFunction(x) {
  if (x.matches) { // If media query matches
    const cards = gsap.utils.toArray(".s-desc");
    const s_t_heading = $('.s-holder-small-display .s-t-heading').eq(0);

    var card_s = $('.s-holder-small-display .s-desc')
    // var card_s_ = document.querySelectorAll('.s-holder-small-display .s-desc')
    var card_s_h = []

    for (let i = 0; i < card_s.length; i++) {
      // const element = card_s.eq(i).height;
      card_s_h.push(document.querySelectorAll('.s-holder-small-display .s-desc')[i].clientHeight);
    }


    let card_s_h_max = Math.max(...card_s_h);

    cards.forEach((card, index) => {

      ScrollTrigger.create({
        trigger: card,
        start: `top ${(s_t_heading.height()) * 2}`,
        pin: true,
        pinSpacing: false,
        // markers: true,
        id: 'pin',
        endTrigger: '.s-holder-small-display',
        end: `bottom ${(s_t_heading.height()) + card_s_h_max}`,
        invalidateOnRefresh: true,
      });
    });
    const s_desc = $('.s-holder-small-display .s-desc')
    var s_desc_height = 0;

    for (let index = 0; index < s_desc.length; index++) {
      s_desc_height = s_desc.eq(index).height()

    }

    // console.log(s_desc_height);
    ScrollTrigger.create({
      trigger: s_t_heading,
      pin: true,
      // markers: true,
      pinSpacing: false,
      scrub: true,
      startTrigger: '.s-desc-container',
      start: `top ${s_t_heading.height()}`,
      // endTrigger: '.s-desc-container',
      // end: `+=${(card_s_h.reduce((a, b) => a + b, 0)) - card_s_[card_s_.length - 1].clientHeight}`
      endTrigger: '.s-holder-small-display',
      end: `bottom ${(s_t_heading.height()) + card_s_h_max}`,

      // end: `bottom  ${s_desc_height}`
    })
  } else {
    // document.body.style.backgroundColor = "pink";

    var s_descs = gsap.utils.toArray('.s-desc');
    // const canvas = document.getElementsByClassName("i-image-c")[0];
    // const context = canvas.getContext("2d");


    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".s-title-c-image",
        pin: true,
        startTrigger: ".s-desc-container",
        start: 'top 20%',
        endTrigger: ".s-desc-container", // Adjust endTrigger to the corresponding description section
        end: 'bottom 20%',
        // markers: true,
        invalidateOnRefresh: true,
        // onUpdate: (self) => headingImageChange(self.progress)
      }
    });

  }

}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 960px)")

// Call listener function at run time
landingServiceFunction(x);

// Testmonial



window.onresize = function () {
  location.reload();
  console.log("refresh")
};