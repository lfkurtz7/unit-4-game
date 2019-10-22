 
var targetNumber = Math.floor(Math.random() * 101) + 19;
var wins = 0; 
var losses = 0; 
var counter = 0;

$("#number-to-guess").text(targetNumber);
$(".wins").text(wins);
$(".losses").text(losses);
$(".totalScore").text(counter);

//Start();

var numberOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
console.log(numberOptions);

$(".crystal-image").each(function(i) {
    $(this).attr("data-crystalvalue", numberOptions[i]);
});

$(".crystal-image").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
     crystalValue = parseInt(crystalValue);
     console.log(crystalValue)
     counter += crystalValue;
     alert(" New score " + counter);
     
    $(".totalScore").text(counter);

     if (counter === targetNumber) {
  alert("You win!")
  wins++;
  //Start();
}

else if (counter >= targetNumber) {
  alert("You lose, try again!")
  losses++;
  //Start();
}
$(".wins").text(wins);
$(".losses").text(losses);

});



// determine if its a win or loss, 
// make sure game restarts when player wins or loses 