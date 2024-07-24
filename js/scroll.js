$("a").click(function (event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($(this).attr("href")).offset().top,
    },
    80000
  ); // Швидкість у мілісекундах
});
