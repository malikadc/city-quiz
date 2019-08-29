// asign veriable to -1
let answerIndex = -1;
start();

// const nextButton = document.querySelector(".next-btn");
// const score = document.querySelector('#score');

// function displayScore() {

// } 

// nextButton.addEventListener("click", function() {

// })

function updateOptions(options) {
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
    }
    else {
        ev.currentTarget.classList.add('answer-wrong');
        correctAnswerElement.classList.add('answer-correct');
    }
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



function start() {
    // get all answer-options from flag-container
    let answerOptions = document.querySelectorAll(".answer-option");
    // loop through each element by index
    answerOptions.forEach(function(el, i) {
        el.addEventListener('click', onClick)
    });

    getNextQuestions()

    // creat variable and asigned a function to it
    
    // answerIndex = optionsAndAnswer.answerIndex;
    
}

function getNextQuestions() {
    const countries = getRandomCountries();
    updateOptions(countries);
}


