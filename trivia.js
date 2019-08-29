// asign veriable to -1
let answerIndex = -1;
let correctCounter = 0;
let totalCounter = 0;

// get all answer-options from flag-container
let answerOptions = document.querySelectorAll(".answer-option");
let answerStatusImage = document.querySelector(".answer-status-image");


start();

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



// const nextButton = document.querySelector(".next-question");
// const score = document.querySelector('question-number');
// let correctCounter = 0;
// let totalCounter = 0;

// function displayScore() {

// } 



function showNextQuestion() {
    // clean all the correct/wrong classes
    answerOptions.forEach(function(el){
        el.classList.remove('answer-correct');
        el.classList.remove('answer-wrong');
    });
    // clean previous answer status image
    answerStatusImage.src = 'img/question.png';

    const options = getRandomCountries();
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
        // cityName.innerText = `${obj.city}  is the capital of which country?`
    })

    answerIndex = _.random(0, 3);
    const questionCountry = options[answerIndex]

    cityName.innerText = `${questionCountry.city}  is the capital of which country?`

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
        answerStatusImage.src  = 'img/incorrect.png';
    }
    updateCounters();
    setTimeout(() => {
        showNextQuestion();
    }, 2000); 
}

/**
 * return an array of four random countries from everything in allCountries
 */

function getRandomCountries() {
    const options = _.sampleSize(allCountries, 4);
    return options

    // answerIndex = _.random(0, 3);
    // countryIndex = _.random(0, 3);
    // console.log(answerIndex);


}





