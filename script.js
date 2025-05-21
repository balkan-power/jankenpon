//choisu
let NingenChoice = 0;
let CPUchoice = 0;

//element of spam, jk, its span, XDDD
const OutputofHuman = document.querySelector("#playerspan"); //player
OutputofHuman.innerHTML = "";

const OutputofCPU = document.querySelector("#cpuspan"); //cpu
OutputofCPU.innerHTML = "";

const OutputofResult = document.querySelector("#resultspan"); //result
OutputofResult.innerHTML = "";

const PlayerChoiceDisplay = document.querySelector("#ningenspan"); //player hoice
PlayerChoiceDisplay.innerHTML = "";

//clicky clacky on a button
const rockBtn = document.querySelector("#rock"); //rock
rockBtn.addEventListener("click", function(event) {
    PlayerChoiceDisplay.innerHTML = "グーROCK";
    NingenChoice = 1;
});

const paperBtn = document.querySelector("#paper"); //paper
paperBtn.addEventListener("click", function(event) {
    PlayerChoiceDisplay.innerHTML = "パーPAPER";
    NingenChoice = 2;
});

const scissorsBtn = document.querySelector("#scissors"); //scissors
scissorsBtn.addEventListener("click", function(event) {
    PlayerChoiceDisplay.innerHTML = "チョキSCISSORS";
    NingenChoice = 3;
});
            
//cpu behaviour
const GoBtn = document.querySelector("#go"); //go button, where cpu begins to decide
GoBtn.addEventListener("click", function(event) {
    OutputofHuman.innerHTML = PlayerChoiceDisplay.innerHTML;
    if (NingenChoice > 0) {
        const RandomNumber = Math.floor(Math.random()*3)+1; //cpu choices
        if (RandomNumber === 1) {
            OutputofCPU.innerHTML = "グーROCK";
            CPUchoice = 1;
        }; if (RandomNumber === 2) {
            OutputofCPU.innerHTML = "パーPAPER";
            CPUchoice = 2;
        }; if (RandomNumber === 3) {
            OutputofCPU.innerHTML = "チョキSCISSORS";
            CPUchoice = 3;
        };
    }

    //result of what material triumphs over which
    if (NingenChoice === 1 && CPUchoice === 2 || NingenChoice === 2 && CPUchoice === 1) {
        OutputofResult.innerHTML = "PAPER COVERS ROCK!"
    }
    if (NingenChoice === 3 && CPUchoice === 2 || NingenChoice === 2 && CPUchoice === 3) {
        OutputofResult.innerHTML = "SCISSORS CUT PAPER!"
    }
    if (NingenChoice === 1 && CPUchoice === 3 || NingenChoice === 3 && CPUchoice === 1) {
        OutputofResult.innerHTML = "ROCK BEATS SCISSORS!"
    }
    if (NingenChoice === CPUchoice) {
        OutputofResult.innerHTML = "NOBODY WINS!"
    }

    //play audio
    const audPlay = document.getElementById("aud");
    audPlay.currentTime = 0; //reset to start sound when spamclicked
    audPlay.play();
});

// reset function from right click
GoBtn.addEventListener("contextmenu", function(clear) {
    NingenChoice = 0;
    CPUchoice = 0;
    PlayerChoiceDisplay.innerHTML = "";
    OutputofHuman.innerHTML = "";
    OutputofCPU.innerHTML = "";
    OutputofResult.innerHTML = "";
});