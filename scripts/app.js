const doge = {
    timer: 0,
    level: 1,
    dollarValue: 10,
    alive: true,
    stop: null,
    stop2: null,


    crash: function () {
        doge.dollarValue--;
        doge.hodlValue--;
        doge.redditValue--;
        doge.tweetValue--;

        console.log("Dollar Value " + doge.dollarValue);
        console.log("Hodl Value " + doge.hodlValue);
        console.log("Reddit Value " + doge.redditValue);
        console.log("Tweet Value " + doge.tweetValue);
        if (doge.dollarValue === 0 || doge.hodlValue === 0 || doge.redditValue === 0 || doge.tweetValue === 0) {
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
    dollarValueIncrease: function (event) {
        doge.dollarValue++
        console.log("Dollar Value " + doge.dollarValue);
    },
    hodlValueIncrease: function (event) {
        doge.hodlValue++;
        console.log("Hodle Value " + doge.hodlValue);
    },
    redditValueIncrease: function (event) {
        doge.redditValue++
        console.log("Reddit Value " + doge.redditValue);
    },
    tweetValueIncrease: function (event) {
        doge.tweetValue++
        console.log("Musk Tweet Value " + doge.tweetValue);
    },
    diamondValueIncrease: function (event) {
        doge.diamondValue++
        console.log("Diamond Hands Value " + doge.diamondValue);
    },
    newLevel: function () {
        console.log("level 2 reached");
        doge.hodlValue = 10;
        doge.dollarValue = 25;
        $('#game').append('<button class="hodlSave">Hodl</button>');
        $("#dogepic").attr("src", "styles/images/level2Dog.png");
        $(".hodlSave").on("click", doge.hodlValueIncrease);
    },
    newLevel3: function () {
        console.log("level 3 reached");
        doge.hodlValue = 30;
        doge.dollarValue = 30;
        doge.redditValue = 30;
        $('#game').append('<button class="redditSave">Reddit</button>');
        $("#dogepic").attr("src", "styles/images/level3Dog.png");
        $(".redditSave").on("click", doge.redditValueIncrease);
    },
    newLevel4: function () {
        console.log("level 4 reached");
        doge.hodlValue = 32;
        doge.dollarValue = 32;
        doge.redditValue = 32;
        doge.tweetValue = 32;
        $('#game').append('<button class="tweetSave">Musk Tweet</button>');
        $("#dogepic").attr("src", "styles/images/level4Dog.png");
        $(".tweetSave").on("click", doge.tweetValueIncrease);
    },

    newLevel5: function () {
        console.log("level 4 reached");
        doge.hodlValue = 35;
        doge.dollarValue = 35;
        doge.redditValue = 35;
        doge.tweetValue = 35;
        doge.diamondValue = 35;
        $('#game').append('<button class="diamondSave">Diamond Hands</button>');
        $("#dogepic").attr("src", "styles/images/level5Dog.png");
        $(".diamondSave").on("click", doge.diamondValueIncrease);
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
        if (doge.alive === true && doge.timer === 40) {
            doge.newLevel5();
        }
        if (doge.alive === true && doge.timer === 50) {
            $("#game").hide();
            $("body").append("<h1>DOGE HAS LANDED</h1>")
            $("body").css("background-image", "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdogemuchwow.com%2Fwp-content%2Fuploads%2F2019%2F06%2Fdoge-wallpaper-5-moon.jpg&f=1&nofb=1)");
            clearInterval(doge.stop);
            clearInterval(doge.stop2);
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
$(".save").on("click", doge.dollarValueIncrease);
