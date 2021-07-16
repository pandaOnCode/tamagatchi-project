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
        doge.diamondValue--
        $(".dollar").text(`Dollar Value: ${doge.dollarValue}`);
        $(".hodl").text(`Hodl Power: ${doge.hodlValue}`);
        $(".reddit").text(`Reddit Participation: ${doge.redditValue}`);
        $(".tweet").text(`Musk Tweets: ${doge.tweetValue}`);
        $(".diamond").text(`Diamond Hands: ${doge.hodlValue}`);

        $(".pf1").css("width", `${doge.dollarValue * 5}%`);
        $(".pf2").css("width", `${doge.hodlValue * 5}%`);
        $(".pf3").css("width", `${doge.redditValue * 5}%`);
        $(".pf4").css("width", `${doge.tweetValue * 5}%`);
        $(".pf5").css("width", `${doge.diamondValue * 5}%`);

        // $(".pf1").css("width",)

        // console.log("Dollar Value " + doge.dollarValue);
        // console.log("Hodl Value " + doge.hodlValue);
        // console.log("Reddit Value " + doge.redditValue);
        // console.log("Tweet Value " + doge.tweetValue);
        if (doge.dollarValue === 0 || doge.hodlValue === 0 || doge.redditValue === 0 || doge.tweetValue === 0 || doge.diamondValue === 0) {
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
        console.log("Hodl Value " + doge.hodlValue);
        $(".hodl").text(`Hodl Power: ${doge.hodlValue}`);

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
        doge.hodlValue = 18;
        doge.dollarValue = 18;
        $('.buttonrow').append('<button class="hodlSave">Hodl</button>');

        $("#dogepic").attr("src", "styles/images/level2Dog.png").addClass("animate__animated animate__bounceInUp");
        $(".hodlSave").on("click", doge.hodlValueIncrease);
        $("#stats ul").append('<li class="hodl"></li>');
        $("#stats ul").append('<li><div class="pb2"></div></li>');
        $(".pb2").append('<div class="pv2"></div>');
        $(".pb2").append('<div class="pf2"></div>');


    },
    newLevel3: function () {
        console.log("level 3 reached");
        doge.hodlValue = 18;
        doge.dollarValue = 18;
        doge.redditValue = 18;
        $('.buttonrow').append('<button class="redditSave">Reddit</button>');
        $("#dogepic").attr("src", "styles/images/level3Dog.png").addClass("animate__animated animate__zoomInDown");
        $(".redditSave").on("click", doge.redditValueIncrease);
        $("#stats ul").append('<li class="reddit"></li>');
        $("#stats ul").append('<div class="pb3"></div>');
        $(".pb3").append('<div class="pv3"></div>');
        $(".pb3").append('<div class="pf3"></div>');

    },
    newLevel4: function () {
        console.log("level 4 reached");
        doge.hodlValue = 18;
        doge.dollarValue = 18;
        doge.redditValue = 18;
        doge.tweetValue = 18;
        $('.buttonrow').append('<button class="tweetSave">Musk Tweet</button>');
        $("#dogepic").attr("src", "styles/images/level4Dog.png").addClass("animate__animated animate__rollIn");
        $(".tweetSave").on("click", doge.tweetValueIncrease);
        $("#stats ul").append('<li class="tweet"></li>');
        $("#stats ul").append('<div class="pb4"></div>');
        $(".pb4").append('<div class="pv4"></div>');
        $(".pb4").append('<div class="pf4"></div>');

    },

    newLevel5: function () {
        console.log("level 4 reached");
        doge.hodlValue = 18;
        doge.dollarValue = 18;
        doge.redditValue = 18;
        doge.tweetValue = 18;
        doge.diamondValue = 18;
        $('.buttonrow').append('<button class="diamondSave">Diamond Hands</button>');
        $("#dogepic").attr("src", "styles/images/level5Dog.png").addClass("animate__animated animate__zoomOutUp animate__infinite");
        $(".diamondSave").on("click", doge.diamondValueIncrease);
        $("#stats ul").append('<li class="diamond"></li>');
        $("#stats ul").append('<div class="pb5"></div>');
        $(".pb5").append('<div class="pv5"></div>');
        $(".pb5").append('<div class="pf5"></div>');
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
            $("body").append("")
            $("body").append('<audio src="sounds/Free Synthwave Loop.wav" autoplay loop></audio>');
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
    let name = $("#fname").val();
    $(".name").text(name);
}

$("#startGame").on("click", startGame);
$(".save").on("click", doge.dollarValueIncrease);
