const doge = {
    timer: 0,
    level: 1,
    dollarvalue: 10,
    alive: true,
    stop: null,
    stop2: null,


    crash: function () {
        doge.dollarvalue--;
        doge.hodlvalue--;
        doge.redditvalue--;
        doge.tweetValue--;

        console.log("Dollar Value " + doge.dollarvalue);
        if (doge.dollarvalue === 0 || doge.hodlvalue === 0 || doge.redditvalue === 0 || doge.tweetvalue === 0) {
            $("#game").hide()
            console.log("game over");
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
    hodlValue: function (event) {
        doge.hodlvalue++;
        console.log("Hodle Value " + doge.hodlvalue);
    },
    redditValue: function (event) {
        doge.redditvalue++
        console.log("Reddit Value " + doge.redditvalue);
    },
    tweetValue: function (event) {
        doge.tweetvalue++
        console.log("Reddit Value " + doge.tweetvalue);
    },
    newLevel: function () {
        console.log("level 2 reached");
        doge.hodlvalue = 10;
        doge.dollarvalue = 25;
        $('#game').append('<button class="hodlSave">Hodl</button>');
        $("#dogepic").attr("src", "styles/images/level2Dog.png");
        $(".hodleSave").on("click", doge.hodlValue);
    },
    newLevel3: function () {
        console.log("level 3 reached");
        doge.hodlvalue = 10;
        doge.dollarvalue = 10;
        doge.redditvalue = 10;
        $('#game').append('<button class="redditSave">Reddit</button>');
        $("#dogepic").attr("src", "styles/images/level3Dog.png");
        $(".redditSave").on("click", doge.redditValue);
    },
    newLevel4: function () {
        console.log("level 4 reached");
        doge.hodlvalue = 32;
        doge.dollarvalue = 32;
        doge.redditvalue = 32;
        doge.tweetvalue = 32;
        $('#game').append('<button class="tweetSave">Musk Tweet</button>');
        $("#dogepic").attr("src", "styles/images/level4Dog.png");
        $(".tweetSave").on("click", doge.tweetValue);
    },
    increaseTimer: function () {
        doge.timer++;
        console.log(doge.timer);
        if (doge.alive === true && doge.timer === 10) {
            doge.newLevel();
        }
        if (doge.alive === true && doge.timer === 20) {
            doge.newLevel3();
        }
        if (doge.alive === true && doge.timer === 30) {
            doge.newLevel4();
        }
    }


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

$("#startGame").on("click", startGame);
$(".save").on("click", doge.dollarValue);
