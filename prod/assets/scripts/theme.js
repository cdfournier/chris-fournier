const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
window.addEventListener("DOMContentLoaded", function(theme) {
  if(localStorage.getItem("theme") === "false") {
    $("html").removeClass("dark");
    $("input.switch").prop("checked",false);
  }
  else {
    if(prefersColorScheme.matches) {
      $("html").toggleClass("dark");
      $("input.switch").prop("checked",true);
      localStorage.setItem("theme",true);
    }
    else {
      localStorage.setItem("theme",false);
    }
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
