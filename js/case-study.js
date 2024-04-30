
// Navebar and footer Add 
$(function () {
    $("#nav-placeholder").load("/nav-bar.html");
    $("#Footer_placeholder").load("/footer.html");
  });


window.addEventListener('DOMContentLoaded', function () {
    // Get all elements with class "image-flick"
    var flickImages = document.querySelectorAll('.image-flick');

    // Function to preload images and store them in an array
    function preloadImages(images, callback) {
        var loadedImages = 0;
        var numImages = images.length;
        var imgArray = [];

        // Load each image and push it into imgArray
        images.forEach(function (imageUrl) {
            var img = new Image();
            img.onload = function () {
                loadedImages++;
                if (loadedImages === numImages) {
                    callback(imgArray);
                }
            };
            img.src = imageUrl;
            imgArray.push(img);
        });
    }

    // Iterate through each image with class "image-flick"
    flickImages.forEach(function (image) {
        // Get the data-image attribute value
        var imageData = JSON.parse(image.getAttribute('data-image'));

        // Preload the images and store them in an array
        preloadImages(imageData, function (imgArray) {
            var currentIndex = 0;

            // Function to change image
            function changeImage() {
                // Set the src attribute of the image to the next image in imgArray
                image.src = imgArray[currentIndex].src;
                // Increment currentIndex and reset to 0 if exceeds the length of imgArray
                currentIndex = (currentIndex + 1) % imgArray.length;
            }

            // Call changeImage function
            changeImage();

            // Optionally, you can set a time interval to automatically change the image
            setInterval(changeImage, 1000); // Change image every 3 seconds (3000 milliseconds)
        });
    });
});


// Navebar Add
$(function () {
    $("#nav-placeholder").load("/Header.html");
});
// Footer
$(function () {
    // $("#Footer_placeholder").load("");
});


// Hero Section Image
window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    const angle = scrollY / 12; // Adjust the division factor to control rotation speed
    const parallaxOffset = scrollY * 0.1; // Adjust the multiplier to control parallax effect
    document.querySelector(
        ".challange_move"
    ).style.transform = `rotate(${angle}deg)`;
    document.querySelector(
        ".Decathlon_hero_text"
    ).style.top = `calc(10vw + 5px - ${parallaxOffset}px)`; // Adjust the offset value as needed
});

//Main script

window.addEventListener("DOMContentLoaded", function () {
    var flickImages = document.querySelectorAll(".image-flick");

    function preloadImages(images, callback) {
        var loadedImages = 0;
        var numImages = images.length;
        var imgArray = [];

        images.forEach(function (imageUrl) {
            var img = new Image();
            img.onload = function () {
                loadedImages++;
                if (loadedImages === numImages) {
                    callback(imgArray);
                }
            };
            img.src = imageUrl;
            imgArray.push(img);
        });
    }

    flickImages.forEach(function (image) {
        var imageData = JSON.parse(image.getAttribute("data-image"));

        preloadImages(imageData, function (imgArray) {
            var currentIndex = 0;

            function changeImage() {
                image.src = imgArray[currentIndex].src;
                currentIndex = (currentIndex + 1) % imgArray.length;
            }

            changeImage();

            setInterval(changeImage, 1000);
        });
    });
});
