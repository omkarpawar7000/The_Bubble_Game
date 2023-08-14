var timer = 60;
var score = 0;
var hitrn = 0;
var timerint;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function resetTimer() {
    timer = 60;
    document.querySelector("#timerval").textContent = timer;
    clearInterval(timerint);
    runTimer();
}

document.querySelector("#pbtm")
    .addEventListener("click", function (dets) {
        var clickedNum = Number(dets.target.textContent);
        if (clickedNum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
            resetTimer();
        }
    });

runTimer();
makeBubble();
getNewHit();
increaseScore();