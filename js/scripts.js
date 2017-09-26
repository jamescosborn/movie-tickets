// Business Logic
function Ticket(title, time, age) {
  this.movieTitle = title;
  this.movieTime = time;
  this.movieAge = age;
}
Ticket.prototype.allStuff= function () {
  return this.movieTitle + " " + "@" + this.movieTime + ", " ;
}

Ticket.prototype.getPrice = function () {
  var price = 8;
  if (this.movieAge < 17 || this.movieAge > 55) {
    price = 4;
  }
  else if (this.movieTime <= 4) {
    price /= 2;
  }
  else {
  price *= 2;
  };
  return price;
}

// UI Logic
$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var inputtedTitle = $("#movieTitle").val();
    var inputtedTime = parseInt($("#movieTime").val());
    var inputtedAge = parseInt($("#movieAge").val());
    var ticket = new Ticket (inputtedTitle, inputtedTime, inputtedAge);
    $(".output").append("<p>$" + ticket.getPrice() + "</p>");
    $(".output").append("<p>" + ticket.allStuff() + "</p>");
    // var price = ticket.getPrice();
    // $(".output").text(price);

  });
});
