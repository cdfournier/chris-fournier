// CHANGE CSS WHEN PAGE LOADS
function loaded (callback) {
  callback();
};
loaded(function () {
  document.body.className = "visible";
});

// HEADROOM
var myElement = document.querySelector("header");
var headroom  = new Headroom(myElement);
headroom.init();


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
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
};