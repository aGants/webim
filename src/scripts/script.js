$(document).ready(function () {
  console.log(5)
  $('.header-burger').click(function (event) {
    $('.header-burger, .header-container').toggleClass('active');
  });
})