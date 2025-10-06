document.addEventListener("DOMContentLoaded", () => {
    const images = [
        "architects-front-brick-wall.jpg", 
        "building-construction-sunset.jpg", 
        "friendly-inspector-talking-construction-workers-outdoors.jpg", 
        "istockphoto-2117759132-612x612.jpg"]; // dodaj imena slika
    
    
    const imageFolder = "assets/slideshow/";
    const slider = document.getElementById("slider");

    // dynamic add images to DOM
    images.forEach(src => {
        const img = document.createElement("img");
        img.src = imageFolder + src;
        slider.appendChild(img);
    });

    const slides = slider.querySelectorAll("img");
    let curIndex = 0;
    slides[curIndex].classList.add("fadeIn");

    function nextSlide() {
        slides[curIndex].classList.remove("fadeIn");
        curIndex = (curIndex + 1) % slides.length;
        slides[curIndex].classList.add("fadeIn");
    }

    setInterval(nextSlide, 10000);

    // hamburger navigation
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        mobileMenu.classList.toggle("flex");

        // animacija hamburger linija (pretvara se u X)
        menuBtn.classList.toggle("open");
        const spans = menuBtn.querySelectorAll("span");
        if (menuBtn.classList.contains("open")) {
            spans[0].classList.add("rotate-45", "translate-y-3");
            spans[1].classList.add("opacity-0");
            spans[2].classList.add("-rotate-45", "-translate-y-3");
        } else {
            spans[0].classList.remove("rotate-45", "translate-y-3");
            spans[1].classList.remove("opacity-0");
            spans[2].classList.remove("-rotate-45", "-translate-y-3");
        }
    });


    function adjustHeader() {
        // const header = document.getElementById("mainHeader");
        const logo = document.getElementById("logo");
        const logoText = document.getElementById("logoText");
        const heightMax = "h-24";
        const heightMin = "h-16";
        const textMax = "text-4xl";
        const textMin = "text-2xl";

        if (window.scrollY > 50 && window.innerWidth > 768) {
            logo.classList.add(heightMin);
            logo.classList.remove(heightMax);
            logoText.classList.add(textMin);
            logoText.classList.remove(textMax);
        } else {
            logo.classList.add(heightMax);
            logo.classList.remove(heightMin);
            logoText.classList.add(textMax);
            logoText.classList.remove(textMin);
        }
    }

    window.addEventListener("scroll", adjustHeader);
    window.addEventListener("resize", adjustHeader);

    adjustHeader();
});


// Back to top button
window.onscroll = function () {
    const btn = document.getElementById("toTop");
    if (document.documentElement.scrollTop > 300) btn.classList.remove("hidden");
    else btn.classList.add("hidden");
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dark mode toggle
function toggleTheme() {
    document.documentElement.classList.toggle("dark");
}