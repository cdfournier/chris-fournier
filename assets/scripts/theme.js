const prefersColorScheme = window.matchMedia("(prefers-color-scheme: dark)");
window.addEventListener("DOMContentLoaded", function(theme) {
  if(sessionStorage.getItem("theme") === "false") {
    $("html").removeClass("dark");
    $("input#switch-theme").prop("checked",false);
  }
  else {
    if(prefersColorScheme.matches) {
      $("html").toggleClass("dark");
      $("input#switch-theme").prop("checked",true);
      sessionStorage.setItem("theme",true);
    }
    else {
      sessionStorage.setItem("theme",false);
    }
  }
});
$("input#switch-theme").click(function() {
  $("html").toggleClass("dark");
  if(sessionStorage.getItem("theme") === "true") {
    $("input#switch-theme").prop("checked",false);
    sessionStorage.setItem("theme",false);
  }
  else {
    $("input#switch-theme").prop("checked",true);
    sessionStorage.setItem("theme",true);
  }
});
