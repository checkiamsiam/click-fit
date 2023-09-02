AOS.init();

$(document).ready(function () {
  //default hide
  $("#mobile-menu").slideUp(0);

  //mobile menu
  $("#mobile-menu-icon").click(function () {
    $("#mobile-menu").slideToggle(500);
  });

  //bg image handler
  $("[bg-image-src]").each(function () {
    var bgImageSrc = $(this).attr("bg-image-src");
    $(this).css({
      "background-image": "url(" + bgImageSrc + ")",
      "background-size": "cover",
      "background-position": "center",
      "background-repeat": "no-repeat",
    });
  });

  //sticky header handler
  window.onscroll = function () {
    if (window.scrollY > 300) {
      $("#header").removeClass("text-white bg-glassy");
      $("#header").addClass("text-black bg-white shadow-sm");

      console.log(window.scrollY);
    } else {
      $("#header").removeClass("text-black bg-white shadow-sm");
      $("#header").addClass("text-white bg-glassy");
    }
  };

  //banner quote handler
  let quoteIndex = 1;
  setInterval(function () {
    if (quoteIndex > quote.length - 1) {
      quoteIndex = 0;
    }
    $("#banner-quote").html(`<h1 data-aos="fade-left" data-aos-duration="1500" class="text-white text-center">${quote[quoteIndex]}</h1>`);
    quoteIndex++;
  }, 3000);
});
