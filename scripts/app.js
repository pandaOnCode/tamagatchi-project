const doge = {
    timer: 0,
    level: 1,
    dollarvalue: 10,
    alive: true,

    newLevel: function () {
        console.log("new level");
    },
    crash: function () {
        doge.dollarvalue--
        console.log("Dollar Value " + doge.dollarvalue);
        if (doge.dollarvalue === 0) {
            $("#game").hide()
            console.log("Dollar value reach 0, game over");
            doge.alive = false;
            return $('#gameover').show();
        }

    },
    dogerun: function () {
        setInterval(doge.crash, 250);

    },
    save: function (event) {
        doge.dollarvalue++
        console.log("Dollar Value " + doge.dollarvalue);
    },
    increaseTimer: function () {
        doge.timer++;
        console.log(doge.timer);
        if (doge.alive === true && doge.timer === 10) {
            doge.newLevel;
        }
    }

    //update timer
    //update level
}
$("#gameover").hide()
$("#game").hide();

const startGame = function () {
    console.log("clicked");
    $(".startTitles").hide();
    $("#game").show();
    setInterval("doge.increaseTimer()", 1000)
    doge.dogerun();
}

$("#startGame").on("click", startGame)
$(".save").on("click", doge.save)


// const newLevel = function () {

//     doge.hodl = 10;
//     //create hold button, update image
// }

// const newLevel2 = function () {
//     doge.reddit = 0;
//     //create reddit button, update image
// }

// const newLevel3 = function () {
//     doge.muskTweet = 0;
//     //create tweet button, update image
// }

// const newLevel4 = function () {
//     doge.diamondHands = 0;
//     //create diamond button, update image
// }
//in all of the above add event listeners connected to the numbers

