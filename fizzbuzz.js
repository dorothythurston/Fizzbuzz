$(document).on('submit', 'form', function (e) {
  e.preventDefault();
  $('ul').empty();
  var userNum = $('input').val();
  var append = function(a) {
    return $('ul').append("<li>" + a + "</li>");
  }

  var fizzBuzz = function (n) {
    for (var i = 1; i <= n; i++) {
      if (i % 3 === 0) {
        if (i % 5 === 0) {
          append("fizzBuzz");
        }
        else {
          append("fizz");
        }
      }
      else if (i % 5 === 0)  {
        append("buzz");
      }
      else {
        append(i);
      }
    }
  };

  fizzBuzz(userNum);
});
