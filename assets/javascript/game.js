var targetNumber, numberOptions;
var counter = 0;
var wins = 0;
var losses = 0;

reset();


$(".crystal-image").on("click", function () {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    console.log(crystalValue)
    counter += crystalValue;


    $(".totalScore").text(counter);

    if (counter === targetNumber) {
        alert("You win!")
        wins++;
        reset();
    }
    else if (counter > targetNumber) { 
        alert("You lose, try again!")
        losses++;
        reset();
    }
    $(".wins").text(wins);
    $(".losses").text(losses);

});

function reset() { 
    targetNumber = GetRandomNumber(19, 120);
    counter = 0;
    $("#number-to-guess").text(targetNumber);
    $(".wins").text(wins);
    $(".losses").text(losses);
    $(".totalScore").text(counter);

    $(".crystal-image").each(function (i) {
        $(this).attr("data-crystalvalue", GetRandomNumber(1, 12));
    });
}

function GetRandomNumber(low, high){
    var difference = (high - low) + 1;
    return Math.floor(Math.random() * difference) + low
}



