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
        $(".dollar").text(`Dollar Value: ${doge.dollarValue}`);
        $(".hodl").text(`Hodl Power: ${doge.hodlValue}`);
        $(".reddit").text(`Reddit Participation: ${doge.redditValue}`);
        $(".tweet").text(`Musk Tweets: ${doge.tweetValue}`);
        $(".diamond").text(`Diamond Hands: ${doge.hodlValue}`);

        // console.log("Dollar Value " + doge.dollarValue);
        // console.log("Hodl Value " + doge.hodlValue);
        // console.log("Reddit Value " + doge.redditValue);
        // console.log("Tweet Value " + doge.tweetValue);
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
        $(".dollar").text(`Dollar Value: ${doge.dollarValue}`);
    },
    hodlValueIncrease: function (event) {
        doge.hodlValue++;
        console.log("Hodle Value " + doge.hodlValue);
        $(".hodl").text(`Hodl Value: ${doge.hodlValue}`);

    },
    redditValueIncrease: function (event) {
        doge.redditValue++
        console.log("Reddit Value " + doge.redditValue);
        $(".reddit").text(`Reddit Participation: ${doge.redditValue}`);
    },
    tweetValueIncrease: function (event) {
        doge.tweetValue++
        console.log("Musk Tweet Value " + doge.tweetValue);
        $(".tweet").text(`Musk Tweets: ${doge.tweetValue}`);
    },
    diamondValueIncrease: function (event) {
        doge.diamondValue++
        console.log("Diamond Hands Value " + doge.diamondValue);
        $(".diamond").text(`Diamond Hands: ${doge.hodlValue}`);
    },
    newLevel: function () {
        console.log("level 2 reached");
        doge.hodlValue = 25;
        doge.dollarValue = 25;
        $('#game').append('<button class="hodlSave">Hodl</button>');
        $("#dogepic").attr("src", "styles/images/level2Dog.png");
        $(".hodlSave").on("click", doge.hodlValueIncrease);
        $("#stats").append('<li class="hodl"></li>');
    },
    newLevel3: function () {
        console.log("level 3 reached");
        doge.hodlValue = 20;
        doge.dollarValue = 20;
        doge.redditValue = 20;
        $('#game').append('<button class="redditSave">Reddit</button>');
        $("#dogepic").attr("src", "styles/images/level3Dog.png");
        $(".redditSave").on("click", doge.redditValueIncrease);
        $("#stats").append('<li class="reddit"></li>');
    },
    newLevel4: function () {
        console.log("level 4 reached");
        doge.hodlValue = 17;
        doge.dollarValue = 17;
        doge.redditValue = 17;
        doge.tweetValue = 17;
        $('#game').append('<button class="tweetSave">Musk Tweet</button>');
        $("#dogepic").attr("src", "styles/images/level4Dog.png");
        $(".tweetSave").on("click", doge.tweetValueIncrease);
        $("#stats").append('<li class="tweet"></li>');
    },

    newLevel5: function () {
        console.log("level 4 reached");
        doge.hodlValue = 15;
        doge.dollarValue = 15;
        doge.redditValue = 15;
        doge.tweetValue = 15;
        doge.diamondValue = 15;
        $('#game').append('<button class="diamondSave">Diamond Hands</button>');
        $("#dogepic").attr("src", "styles/images/level5Dog.png");
        $(".diamondSave").on("click", doge.diamondValueIncrease);
        $("#stats").append('<li class="diamond"></li>');
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
    let name = prompt("Name your doge");
    $(".name").text(name);
}

$("#startGame").on("click", startGame);
$(".save").on("click", doge.dollarValueIncrease);
