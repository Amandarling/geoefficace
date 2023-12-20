$(document).ready(function () {
    $(".div-11").on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $("#area-de-contato").offset().top
        },
        1000
      );
    });
  });