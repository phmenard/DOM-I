// Grab all the digits
let secondTens = document.querySelector('#secondTens');
let secondOnes = document.querySelector('#secondOnes');
let msHundreds = document.querySelector('#msHundreds');
let msTens = document.querySelector('#msTens');

// Get the body
const myBody = document.getElementsByTagName('body');


// Get the digits parent
const myDigits = document.querySelector('.digits');

// Creat a start button
const startButton = document.createElement('button');
startButton.textContent = 'Start';
startButton.style.borderRadius = '8px';
startButton.addEventListener("click", startTimer);

// Creat a reset buttom
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.style.borderRadius = '8px';
resetButton.addEventListener("click", resetTimer);

// Add buttons to flex box
const buttonDiv = document.createElement('div');
buttonDiv.style.display = 'flex';
buttonDiv.style.justifyContent = 'space-between';
buttonDiv.appendChild(startButton);
buttonDiv.appendChild(resetButton);

//myBody.appendChild(buttonDiv);

// Create explosion img
const explosionImg = document.createElement('img');

explosionImg.src = 'https://media.tenor.com/images/ed059f472dfd77b8fc0e7f6f5bf9e61c/tenor.gif';


// Add explosion flex box
const explosionDiv = document.createElement('div');
explosionDiv.style.display = 'flex';
explosionDiv.style.justifyContent = 'center';
explosionDiv.appendChild(explosionImg);

// Add buttons to the digits parent
myDigits.appendChild(buttonDiv);

//explosionDiv.hidden = true;

var timerHandler; // Hold the timer 

// Setup all our timer variables
var millSecondsTens;
var millSecondsHun;
var secOnes;
var secTens;

resetTimer(); // reset timer just to be sure
function myTimer() {
    if (millSecondsTens < 10) { // make sure we don't pass 9

        millSecondsTens++;

        if (millSecondsTens === 10) { // if 10 update the hundreds
            millSecondsTens = 0;

            msHundreds.innerHTML = millSecondsTens;
            millSecondsHun++;
            msHundreds.innerHTML = millSecondsHun;

            if (millSecondsHun === 10) {
                millSecondsHun = 0;
                msHundreds.innerHTML = millSecondsHun;
                if (secOnes < 10) {

                    secOnes++;

                    if (secOnes === 10) {
                        millSecondsHun = 0;

                        secondTens.innerHTML = secTens;
                        secTens++;
                        msHundreds.innerHTML = millSecondsHun;
                        if (secTens === 1) {
                            secondTens.innerHTML = secTens;
                            secOnes = 0;
                            resetButton.disabled = false;
                            // turn digits red
                            myDigits.setAttribute('style', 'color:red');

                            // Make sure the colan stays black***
                            const colon = document.getElementById("colon")
                            colon.style.color = 'black';

                           

                            myDigits.appendChild(explosionDiv);
                            
                            // End the timer
                            clearInterval(timerHandler);

                        }

                    }
                }
            }

        }

    }

    // Display the updated digits
    secondOnes.innerHTML = secOnes;
    secondTens.innerHTML = secTens;
    msTens.innerHTML = millSecondsTens;

}

function startTimer() {
    timerHandler = setInterval(myTimer, 10);
    startButton.disabled = true;
    resetButton.disabled = true;
}


function resetTimer() {
    millSecondsTens = 0;
    millSecondsHun = 0;
    secOnes = 0;
    secTens = 0;

    secondTens.innerHTML = secTens;
    secondOnes.innerHTML = secOnes;
    msHundreds.innerHTML = millSecondsHun;
    msTens.innerHTML = millSecondsTens;
    myDigits.setAttribute('style', 'color:black');

    // Reste the buttons
    startButton.disabled = false;
    resetButton.disabled = true;

    myDigits.removeChild(explosionDiv);
}

