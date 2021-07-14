const doge = {
    timer: 0,
    level: 1,
    dollarvalue: 15,
    alive: true,
    stop: null,
    stop2: null,

    newLevel: function () {
        console.log("new level");
        doge.hodlvalue = 15;
        doge.dollarvalue = 15;
        $('#game').append('<button class=".hodlSave">Hodl</button>');
        $("#dogepic").attr("src", "styles/images/level2Dog.png");
    },
    newLevel3: function () {
        console.log("level 3 reached");
    },
    crash: function () {
        doge.dollarvalue--;
        doge.hodlvalue--;

        console.log("Dollar Value " + doge.dollarvalue);
        if (doge.dollarvalue === 0 || doge.hodlvalue === 0) {
            $("#game").hide()
            console.log("Dollar value reached 0, game over");
            doge.alive = false;

            clearInterval(doge.stop);
            clearInterval(doge.stop2);

            return $('#gameover').show();

        }

    },
    dogerun: function () {
        doge.stop = setInterval(doge.crash, 500);


    },
    dollarValue: function (event) {
        doge.dollarvalue++
        console.log("Dollar Value " + doge.dollarvalue);
    },
    increaseTimer: function () {
        doge.timer++;
        console.log(doge.timer);
        if (doge.alive === true && doge.timer === 10) {
            doge.newLevel();
        }
        if (doge.alive === true && doge.timer === 25) {
            doge.newLevel3();
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
    doge.stop2 = setInterval("doge.increaseTimer()", 1000)
    doge.dogerun();
}

$("#startGame").on("click", startGame)
$(".save").on("click", doge.dollarValue)


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

