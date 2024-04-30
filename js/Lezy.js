
document.addEventListener("DOMContentLoaded", function() {
    var lazyElements = [].slice.call(document.querySelectorAll(".lazy"));

    if ("IntersectionObserver" in window) {
        var lazyElementObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var lazyElement = entry.target;

                    if (lazyElement.tagName === 'IMG') {
                        lazyElement.src = lazyElement.dataset.src;
                        
                        
                    } else if (lazyElement.tagName === 'VIDEO') {
                        var sourceElement = lazyElement.querySelector('source');
                    var sourceSrc = sourceElement.getAttribute('src');
                        sourceElement.src = sourceSrc;
                        lazyElement.load();
                    }
                    lazyElement.classList.remove("lazy");
                    lazyElementObserver.unobserve(lazyElement);
                }
            });
        });

        lazyElements.forEach(function(lazyElement) {
            lazyElementObserver.observe(lazyElement);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        lazyElements.forEach(function(lazyElement) {
            if (lazyElement.tagName === 'IMG' || lazyElement.tagName === 'VIDEO') {
                lazyElement.src = lazyElement.dataset.src;
                lazyElement.classList.remove("lazy");
            }
        });
    }
});
