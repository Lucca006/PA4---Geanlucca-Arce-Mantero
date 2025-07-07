$(document).ready(function () {
  const banners = ["img/banner1.jpg", "img/banner2.png", "img/banner3.webp"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % banners.length;
    $('#banner-img').fadeOut(500, function () {
      $(this).attr('src', banners[index]).fadeIn(500);
    });
  }, 3000);
});
