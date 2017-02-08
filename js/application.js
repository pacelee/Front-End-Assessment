$(document).ready(function() {
  $('button').on('click', function() {
    $('.emailreturn').empty();
    var email = $('.data').val();
    $('.emailreturn').append('<p>Thank you for your submission!</p>')

  });
});

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  document.getElementById(cityName).style.display = "block";
}

  $('#dropdown').on('click', function() {
    $('#links').toggle();
  });

  function counter() {
  setInterval(function() {
  if ((Number($('.counter').html()) < 10))
  {
  $('.counter').html(Number($('.counter').html()) + 1)
  }
  }, 1000);
};

  counter();
