$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Learner", "Developer", "Producer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Learner", "Developer", "Producer", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById("digital-clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Show the clock when the page is fully loaded
window.addEventListener("load", () => {
  const clockContainer = document.querySelector(".clock-container");
  clockContainer.style.display = "flex";
});

// script.js
const cursor = document.querySelector(".cursor");
var timeout;

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});

// Add the following code to resize the cursor when hovering over links and buttons
const interactiveElements = document.querySelectorAll("a, button");
interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.style.width = "40px"; // Adjust the desired width
    cursor.style.height = "40px"; // Adjust the desired height
  });

  element.addEventListener("mouseleave", () => {
    cursor.style.width = "20px"; // Restore the original width
    cursor.style.height = "20px"; // Restore the original height
  });
});


const projectsContainer = document.querySelector(".projects-container");
const projectWidth = 300; // Adjust this value to match the width of your individual projects
const autoScrollInterval = 3000; // Adjust the auto-scrolling interval (in milliseconds)

let scrollPosition = 0;
let scrollDirection = 1; // 1 for scrolling right, -1 for scrolling left

const scrollLeft = () => {
    scrollPosition -= projectWidth;
    if (scrollPosition < 0) {
        scrollPosition = projectsContainer.scrollWidth - projectsContainer.clientWidth;
    }
    projectsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
};

const scrollRight = () => {
    scrollPosition += projectWidth;
    if (scrollPosition >= projectsContainer.scrollWidth - projectsContainer.clientWidth) {
        scrollPosition = 0;
    }
    projectsContainer.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
    });
};

// Add event listeners to scroll left and right
document.querySelector(".scroll-left").addEventListener("click", scrollLeft);
document.querySelector(".scroll-right").addEventListener("click", scrollRight);

// Function to auto scroll
function autoScroll() {
    if (scrollDirection === 1) {
        scrollRight();
    } else {
        scrollLeft();
    }
}

// Set an interval to call the autoScroll function at the specified interval
const autoScrollIntervalId = setInterval(autoScroll, autoScrollInterval);

// Stop auto scrolling when the mouse hovers over the projects container
projectsContainer.addEventListener("mouseenter", () => {
    clearInterval(autoScrollIntervalId);
});

// Resume auto scrolling when the mouse leaves the projects container
projectsContainer.addEventListener("mouseleave", () => {
    autoScrollIntervalId = setInterval(autoScroll, autoScrollInterval);
});
