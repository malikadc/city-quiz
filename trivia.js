// asign veriable to 0
let answerIndex = 0;

// asign counter for tracking correct answers
let correctCounter = 0;

// asign counter for total number of questions
let totalQuestion = 0;

const maxQuestions = 10;


// calling a function to start game
start();

// create a function to start a game
function start() {

    // get all answer-options from flag-container
    let answerOptions = document.querySelectorAll(".answer-option");
    // loop through each element by index
    answerOptions.forEach(function(el, i) {
        // add eventListener and call the function onClick, which checks if answer is correct
        el.addEventListener('click', onClick)
    });
    // asign next question button and add EL and call function showNextQuestion
    const nextButton = document.querySelector(".next-question");
    nextButton.addEventListener("click", function() {
        showNextQuestion();
    })
    // asign reset button and add EL so we can reset correctCounter & totalQuestion to 0;
    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", function() {
        correctCounter = 0;
        totalQuestion = 0;
        document.querySelector('.game-over-text').innerHTML = '';
        // and call function showNextQuestion right away
        showNextQuestion();
    })

    showNextQuestion();
}

// create a function 
function onClick(ev) {

    const correctAnswerElement = document.querySelector(`.answer${answerIndex}`);
    // get status of answer, so we can set right image-logo to it
    let answerStatusImage = document.querySelector(".answer-status-image");

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


// create a function where we can update our question number & points and show it on html
function updateCounters() {
    document.querySelector('.question-number').innerText = `${totalQuestion}/${maxQuestions}`;
    document.querySelector('.points-total').innerText = correctCounter;
}



// 
function showNextQuestion() {
    if(totalQuestion === maxQuestions) {
        document.querySelector('.game-over-text').innerHTML =`Game Over, your score is ${Math.round(correctCounter/totalQuestion * 100)}%`;
        return;
    }

    // clean all the correct/wrong classes
    // get all answer-options from flag-container
    let answerOptions = document.querySelectorAll(".answer-option");
    answerOptions.forEach(function(el){
        el.classList.remove('answer-correct');
        el.classList.remove('answer-wrong');
    });
    // get status of answer, so we can set right image-logo to it
    let answerStatusImage = document.querySelector(".answer-status-image");
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

    cityName.innerHTML = `<span class="capital-city">${questionCountry.city}</span> is the capital of which country`

    totalQuestion++;
    updateCounters();

    

    /** only updating the DOM for questions/answer for one random country */

}







