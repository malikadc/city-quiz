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
    // get status of answer, so we can set the right logo.png to it
    let answerStatusImage = document.querySelector(".answer-status-image");
    // checking if the answer is correct
    if (ev.currentTarget == correctAnswerElement) {
        // if it`s correct, it will show green border
        correctAnswerElement.classList.add('answer-correct');
        // with correct.png logo inside the question-container
        answerStatusImage.src  = 'img/correct.png';
        // and increment counter
        correctCounter++;
    }
    else {
        ev.currentTarget.classList.add('answer-wrong');
        // if it`s not correct, it will show red border
        correctAnswerElement.classList.add('answer-correct');
        // with wrong.png logo inside the question-container
        answerStatusImage.src  = 'img/wrong.png';
    }
    // after all calling function updateCounters where we can update our question number & points
    updateCounters();
    // here setting timeout for 2 seconds after which 
    setTimeout(() => {
        // and calling
        showNextQuestion();
    }, 2000); 
}

// 
function showNextQuestion() {
    // checking if you get to the 10th question
    if(totalQuestion === maxQuestions) {
        // shows message on html with score calculated with Math.round
        document.querySelector('.game-over-text').innerHTML =`Game Over, your score is ${Math.round(correctCounter/totalQuestion * 100)}%`;
        // using return so it will stop here
        return;
    }

 
    // get all answer-options from flag-container
    let answerOptions = document.querySelectorAll(".answer-option");
    // clean all the correct/wrong classes
    answerOptions.forEach(function(el){
        el.classList.remove('answer-correct');
        el.classList.remove('answer-wrong');
    });
    // get status of answer, so we can set right image-logo to it
    let answerStatusImage = document.querySelector(".answer-status-image");
    // clean previous answer status image
    answerStatusImage.src = 'img/question.png';

    // using lodash libary to get randomly 4 countries from the array
    const options = _.sampleSize(allCountries, 4);

    // asign image to the right box
    const images = document.querySelectorAll(".answer-option img");

    //populate flags, write down country names
    const countryNames = document.querySelectorAll(".country-name");

    // asign city name to the question text where it belongs
    const cityName = document.querySelector(".question-text");
    
    // loop through trivia object
    options.forEach(function(obj, index) {
        // change image src
        images[index].src = `png250px/${obj.flag}.png`;
        // update p tag using innerText
        countryNames[index].innerText = obj.country;
    })
    // shoose on of the options as correct answer, remember it`s index, so you can find right answer by it index
    answerIndex = _.random(0, 3);
    const questionCountry = options[answerIndex]
    // shows questions on html
    cityName.innerHTML = `<span class="capital-city">${questionCountry.city}</span> is the capital of which country`
    // increment total question
    totalQuestion++;
    updateCounters();

    

// create a function where we can update our question number & points and show it on html
function updateCounters() {
    document.querySelector('.question-number').innerText = `${totalQuestion}/${maxQuestions}`;
    document.querySelector('.points-total').innerText = correctCounter;
}

}







