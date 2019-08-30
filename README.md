# City Quiz

Test your knowledge of the capital cities with this multiple choice trivia game.
[Play online here](https://malikadc.github.io/city-quiz/)

## Rules
When the game starts, you will be given multiple-choice questions covering your geography knowledge. 
You have to answer a question by clicking one of the options you think is correct. If you don not know the answer, you can skip it.

You'll get an immediate feedback on whether you've chosen the correct asnwer. The next question will appear in 2 seconds. When you will finish answering 10 questions you will get the final score (in percent).

## Technologies

- HTML
- CSS
- JavaScript
- Lodash library

I used [lodash library](www.lodash.com) to get randomly 4 countries from the array of countries.
```js
const options = _.sampleSize(allCountries, 4);
```

# Installation
You need to link lodash CDN to your main index.html, inside script tag, so you can use it.
```html
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.15/lodash.min.js"></script>
```
### Future goals
I would definitely come back to this project, so I can improve it. And I am sure I will be focusing more on Front-End.


## Note:
This was created at GA DC coding bootcamp in week three:)



![screenshot](img/screen.png)
