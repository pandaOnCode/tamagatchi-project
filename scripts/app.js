// $(".startTitles").hide()
const doge = {
    level: 1,
    dollarvalue: 10,
    alive: true,
    crashTimer: 30,
    crash: function () {
        doge.crashTimer--
        console.log("crash timer" + doge.crashTimer);
    },
    dogerun: function () {
        setInterval(doge.crash, 2000);
    },
    save: function (event) {
        doge.crashTimer++
        console.log(doge.crashTimer);
    }

    //update timer
    //update level


}

// const newLevel = function () {

//     doge.hodl = 0;
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
let timer = 0;
const increaseTimer = function () {
    timer++;
    console.log(timer);
}
$("#game").hide();
const startGame = function () {
    console.log("clicked");
    $(".startTitles").hide();
    $("#game").show();
    setInterval("increaseTimer()", 1000)
    if (timer === 30 && doge === alive) {
        doge.level += 1;

    }
    doge.dogerun();



}
$("#startGame").on("click", startGame)
$(".save").on("click", doge.save)