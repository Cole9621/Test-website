document.addEventListener("DOMContentLoaded", function() {
    const banners = document.querySelectorAll(".banner img");
    let currentBannerIndex = 0;

    setInterval(function() {
        banners[currentBannerIndex].classList.remove("active");
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        banners[currentBannerIndex].classList.add("active");
    }, 5000);
});
document.addEventListener("DOMContentLoaded", function() {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add("fade-in-visible");
        }
    });

    window.addEventListener("scroll", function() {
        fadeElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add("fade-in-visible");
            }
        });
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
