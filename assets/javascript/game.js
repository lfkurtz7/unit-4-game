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
    else if (counter > targetNumber) { // should I use > instead of >= ?? //
        alert("You lose, try again!")
        losses++;
        reset();
    }
    $(".wins").text(wins);
    $(".losses").text(losses);

});

function reset() { // something isnt right with this //
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
// function GetTargetNumber() {
//     return Math.floor(Math.random() * 101) + 19
// }
// function GetNumberOptions() {
//     var tempArr = [];
//     for (var i = 0; i < 4; i++) {
//         var rand = Math.floor(Math.random() * 12) + 1;
//         tempArr.push(rand)
//     }
//     return tempArr
// }

function GetRandomNumber(low, high){
    var difference = (high - low) + 1;
    return Math.floor(Math.random() * difference) + low
}



// // make sure game restarts when player wins or loses 
// // issue with losses function