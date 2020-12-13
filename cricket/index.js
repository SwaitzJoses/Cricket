//Arun
var Player = /** @class */ (function () {
    function Player() {
        this.b;
        this.score = 0;
        this.team1Tot = [];
        this.ts = 0;
        this.tss = 0;
        this.timer;
        this.counter = 60;
        this.high = [];
    }
    Player.prototype.setRandVal = function () {
        this.b = Math.floor(Math.random() * 7);
        this.team1Tot.push(this.b);
        console.log(this.team1Tot);
        this.ts = this.team1Tot.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
        console.log("ts" + this.ts);
        document.getElementById("t1").innerHTML = this.ts;
    };
    Player.prototype.setRandVal2 = function () {
        this.b = Math.floor(Math.random() * 7);
        this.team1Tot.push(this.b);
        console.log(this.team1Tot);
        this.tss = this.team1Tot.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
        console.log("tss" + this.tss);
        document.getElementById("t2").innerHTML = this.tss;
    };
    Player.prototype.setTotalScore = function (i) {
        this.score = this.score + i;
        console.log("s" + this.score);
    };
    Player.prototype.totalScore2 = function () {
        console.log('bb', this.score);
    };
    Player.prototype.resetTotalScore = function (scoreInput) {
        this.score = scoreInput;
    };
    Player.prototype.scores = function (row, col) {
        document.getElementById("ball" + (String(row)) + (String(col))).innerHTML = this.b;
    };
    Player.prototype.high = function (row) {
        this.high.push(document.getElementById("ball" + (String(row)) + "7").innerHTML);
        console.log("high " + this.high);
    };
    Player.prototype.totalScore = function (row) {
        console.log('total', this.score);
        document.getElementById("total" + (String(row))).innerHTML = this.score;
    };
    Player.prototype.getScore = function () {
        return this.b;
    };
    Player.prototype.matchWon = function () {
        if (+document.getElementById("t1").innerHTML > +document.getElementById("t2").innerHTML) {
            document.getElementById("won").innerHTML = "Team 1";
        }
        else if (+document.getElementById("t1").innerHTML < +document.getElementById("t2").innerHTML) {
            document.getElementById("won").innerHTML = "Team 2";
        }
        console.log(document.getElementById("t1").innerHTML);
        console.log(document.getElementById("t2").innerHTML);
    };
    Player.prototype.countDown = function () {
        if (this.counter > 0) {
            this.counter = this.counter - 1;
            document.getElementById("timer").innerHTML = this.counter;
        }
        else if (this.counter === 0) {
            document.getElementById("hit1").disabled = true;
        }
    };
    Player.prototype.countDown2 = function () {
        if (this.counter > 0) {
            this.counter = this.counter - 1;
            document.getElementById("timer").innerHTML = this.counter;
        }
        else if (this.counter === 0) {
            // document.getElementById("hit1").disabled = true;
            document.getElementById("hit2").disabled = true;
            // document.getElementById("timer").innerHTML=""
        }
    };
    return Player;
}());
var player = new Player();
var row = 1;
var col = 1;
document.getElementById("hit1").addEventListener("click", function () {
    player.setRandVal();
    player.setTotalScore(player.getScore());
    if (player.getScore() === 0 || (col > 6 && row <= 10)) {
        if (player.getScore() === 0) {
            player.scores(row, col);
        }
        player.setRandVal();
        col = 1;
        row = row + 1;
        // console.log(row)
        player.resetTotalScore(player.getScore());
    }
    if (player.getScore() !== 0 && row <= 10 && col <= 7) {
        // player.setRandVal()
        // player.setTotalScore(player.getScore())
        console.log(row, col, player.getScore());
        //     
        player.scores(row, col);
        col = col + 1;
        player.totalScore(row);
        player.totalScore2();
    }
    if (row > 10 || col > 7) {
        alert("You have reached the wrong ids " + row + " " + col);
        document.getElementById("hit1").disabled = true;
    }
    if (row === 10 && col === 7) {
        document.getElementById("timer").innerHTML = "";
    }
});
var player2 = new Player();
var row2 = 11;
var col2 = 1;
document.getElementById("hit2").addEventListener("click", function () {
    player2.setRandVal2();
    player2.setTotalScore(player2.getScore());
    if (player2.getScore() === 0 || (col2 > 6 && row2 <= 20)) {
        if (player2.getScore() === 0) {
            player2.scores(row2, col2);
        }
        player2.setRandVal2();
        col2 = 1;
        row2 = row2 + 1;
        // console.log(row)
        player2.resetTotalScore(player2.getScore());
    }
    if (player2.getScore() !== 0 && row2 <= 20 && col2 <= 7) {
        console.log(row2, col2, player2.getScore());
        player2.scores(row2, col2);
        col2 = col2 + 1;
        player2.totalScore(row2);
    }
    if (row2 > 20 || col2 > 7) {
        alert("You have reached the wrong ids " + row + " " + col);
        document.getElementById("hit2").disabled = true;
    }
});
var gen = new Player();
document.getElementById("result").addEventListener("click", function () {
    gen.matchWon();
});
document.getElementById("hit1").addEventListener("pointerover", function () {
    setInterval("player.countDown()", 1000);
});
document.getElementById("hit2").addEventListener("mouseover", function () {
    setInterval("player2.countDown2()", 1000);
});
