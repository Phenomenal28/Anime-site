const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

// Modified sliderNav function with fade-out animation
var sliderNav = function(manual) {
    const activeBtn = document.querySelector(".nav-btn.active");
    const activeSlide = document.querySelector(".video-slide.active");
    const activeContent = document.querySelector(".content.active");

    // If an active button exists and it's not the current one, fade it out
    if (activeBtn && activeBtn !== btns[manual]) {
        activeBtn.classList.add("fade-out");
        setTimeout(() => {
            activeBtn.classList.remove("active", "fade-out");
        }, 500); // Match CSS animation duration
    } else {
        activeBtn?.classList.remove("active"); // Remove active class if no animation needed
    }

    // Remove active state from slides and contents
    activeSlide?.classList.remove("active");
    activeContent?.classList.remove("active");

    // Set new active elements
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
};

// Button click event listeners
btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});
