// HEADROOM
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();

//HEADER NAVIGATION UPDATES
$("button.menu-toggle").click(function() {
  $("body").toggleClass("open");
  $("header").toggleClass("open");
  $("button.menu-toggle").attr("aria-expanded",true);
  $("nav ul").attr("aria-hidden",false);
});
$(".close").click(function() {
  $("button.menu-toggle").attr("aria-expanded",false);
  $("nav ul").attr("aria-hidden",true);
});

// COLOR MODE CONTROLS
window.addEventListener("DOMContentLoaded", function(theme) {
  if(localStorage.getItem("theme") === "true") {
    $("html").toggleClass("dark");
    $("input.switch").prop("checked",true);
  }
  else {
    localStorage.setItem("theme",false);
  }
});
$("input.switch").click(function() {
  $("html").toggleClass("dark");
  if(localStorage.getItem("theme") === "true") {
    $("input.switch").prop("checked",false);
    localStorage.setItem("theme",false);
  }
  else {
    $("input.switch").prop("checked",true);
    localStorage.setItem("theme",true);
  }
});

// ANIMATE OBJECTS AS THEY COME ON SCREEN
const addVisible = document.querySelectorAll(".animate");
const io_options = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0
};
const io_observer = new IntersectionObserver(io_callback, io_options);

addVisible.forEach(element => {
    io_observer.observe(element);
});

function io_callback (entries, observer) {
    entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
};

// PARALAX BANNERS
const banner = document.querySelector(".banner.intro .text");
const speed = 0.2;
banner.style.transform = "translateY( calc( var(--scrollparallax) * 1px ) )";
function setScrollParallax() {
  banner.style.setProperty("--scrollparallax", (document.body.scrollTop || document.documentElement.scrollTop) * speed);
  window.requestAnimationFrame( setScrollParallax );
}
window.requestAnimationFrame( setScrollParallax );
