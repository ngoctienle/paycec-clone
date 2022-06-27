$(document).ready(function () {
  const isTablet = 991;
  const toggle = $(".toggle svg");

  function RemoveTabletStyle() {
    $(".overlay-mobile").removeClass("--is-click-toggle");
    $("header").removeClass("--is-scroll");
    $(".toggle svg").removeClass("active");
  }

  $(window).on("resize", function () {
    let widthWindow = window.innerWidth;
    if (widthWindow > isTablet) {
      RemoveTabletStyle();
    }
  });
  $(window).on("scroll", function () {
    let scrollY = $(this).scrollTop();
    if (scrollY !== 0) {
      $("header").addClass("--is-scroll");
    } else {
      $("header").removeClass("--is-scroll");
    }
  });
  toggle.on("click", function () {
    setTimeout(function () {
      $(".overlay-mobile").toggleClass("--is-click-toggle");
    }, 100);
    setTimeout(function () {
      $(this).toggleClass("active");
      $("header").toggleClass("--is-scroll");
    }, 300);
  });
});
