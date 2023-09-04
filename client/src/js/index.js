AOS.init();

$(document).ready(function () {
  //default hide
  $("#mobile-menu").slideUp();
  $("#headline").fadeOut();

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
      $("#headline").fadeIn(500);
    } else {
      $("#header").removeClass("text-black bg-white shadow-sm");
      $("#header").addClass("text-white bg-glassy");
      //showing headline
      $("#headline").fadeOut();
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

  //ajax call to given api

  setInterval(function () {
    $("#news-text").text("Loading...");
    $.ajax({
      url: "http://numbersapi.com/1/30/date?json",
      dataType: "json",
    })
      .then((data) => {
        $("#news-text").text(data.text);
      })
      .catch((err) => {
        $("#news-text").text("Signal loss to load news");
      });
  }, 4000);

  // maping sports
  sports.forEach((sport, i) => {
    $("#sports").append(`
    <div
    data-aos="fade-up"
    data-aos-duration=${i === 0 ? "1000" : i === 1 ? "2000" : i === 2 ? "3000" : i === 3 ? "0" : i === 4 ? "0" : "0"}
    class="portfolio-section-data col-md-4"
    style="
      background-image: url(${sport?.image});
    "
  >
    <div class="portfolio-section-text">
      <div class="portfolio-section-text-inner">
        <p>${sport?.name}</p>
        <a href="#">"${sport?.quote}"</a>
      </div>
    </div>
  </div>
    `);
  });

  const imageUpload = document.getElementById("image-upload");
  const imageDisplay = document.getElementById("image-display");
  const uploadedImage = document.getElementById("uploaded-image");
  const uploadedImageBtn = document.getElementById("uploaded-image-btn");
  const fileInput = document.getElementById("file-input");

  imageUpload.addEventListener("dragover", (e) => {
    e.preventDefault();
    imageUpload.style.backgroundColor = "#e0e0e0";
  });

  imageUpload.addEventListener("dragleave", () => {
    imageUpload.style.backgroundColor = "#f7f7f7";
  });

  imageUpload.addEventListener("drop", (e) => {
    e.preventDefault();
    imageUpload.style.backgroundColor = "#f7f7f7";

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = "block";
        uploadedImageBtn.style.display = "block";
      };

      reader.readAsDataURL(file);
    }
  });

  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = (e) => {
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = "block";
        uploadedImageBtn.style.display = "block";
      };

      reader.readAsDataURL(file);
    }
  });
});
