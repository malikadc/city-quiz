// asign veriable to 0
let answerIndex = 0;
// asign counter for tracking correct answers
let correctCounter = 0;
// asign counter for total number of questions
let totalCounter = 0;

// get all answer-options from flag-container
let answerOptions = document.querySelectorAll(".answer-option");
// get status of answer, so we can set right image-logo to it
let answerStatusImage = document.querySelector(".answer-status-image");

// calling a function to start game
start();

// asign function to start a game
function start() {
    // loop through each element by index
    answerOptions.forEach(function(el, i) {
        el.addEventListener('click', onClick)
    });
    
    const nextButton = document.querySelector(".next-question");
    nextButton.addEventListener("click", function() {
        showNextQuestion();
    })

    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function() {
        correctCounter = 0;
        totalCounter = 0;
        showNextQuestion();
    })

    showNextQuestion();
}

function updateCounters() {
    document.querySelector('.question-number').innerText = totalCounter;
    document.querySelector('.points-total').innerText = correctCounter;
}




function showNextQuestion() {
    // clean all the correct/wrong classes
    answerOptions.forEach(function(el){
        el.classList.remove('answer-correct');
        el.classList.remove('answer-wrong');
    });
    // clean previous answer status image
    answerStatusImage.src = 'img/question.png';

    const options = _.sampleSize(allCountries, 4);
    //populate flags, write down country names
    const images = document.querySelectorAll(".answer-option img");
    const countryNames = document.querySelectorAll(".country-name");
    const cityName = document.querySelector(".question-text");
    // loop through trivia object

    /** old way, using forEach */
    options.forEach(function(obj, index) {
        // change image src
        images[index].src = `png250px/${obj.flag}.png`;
        // update p tag using innerText
        countryNames[index].innerText = obj.country;
    })

    answerIndex = _.random(0, 3);
    const questionCountry = options[answerIndex]

    cityName.innerText = `${questionCountry.city}  is the capital of which country`

    totalCounter++;
    updateCounters();

    

    /** only updating the DOM for questions/answer for one random country */

}


function onClick(ev) {
    console.log(ev.srcElement)
    const correctAnswerElement = document.querySelector(`.answer${answerIndex}`);
    console.log(correctAnswerElement)

    console.log(answerIndex)
    console.log(correctAnswerElement)

    if (ev.currentTarget == correctAnswerElement) {
        correctAnswerElement.classList.add('answer-correct');
        answerStatusImage.src  = 'img/correct.png';
        correctCounter++;
    }
    else {
        ev.currentTarget.classList.add('answer-wrong');
        correctAnswerElement.classList.add('answer-correct');
        answerStatusImage.src  = 'img/wrong.png';
    }
    updateCounters();
    setTimeout(() => {
        showNextQuestion();
    }, 2000); 
}





