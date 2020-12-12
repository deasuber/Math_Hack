// // var x = document.getElementById("demo");

// // function getMath() {
// //   if (navigator.geolocation) {
// //     navigator.geolocation.getCurrentPosition(showPosition);
// //   } else {
// //     x.innerHTML = "Geolocation is not supported by this browser.";
// //   }
// // }

// // function showPosition(position) {
// //   x.innerHTML = "Latitude: " + position.coords.latitude +
// //   "<br>Longitude: " + position.coords.longitude;
// // }
// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://math-equation-solver.p.rapidapi.com/api/v1/getlatex",
// 	"method": "POST",
// 	"headers": {
// 		"content-type": "application/json",
// 		"accept": "application/json",
// 		"x-rapidapi-key": "3a4721856emshb056b91d84c0932p15df4fjsn2dddcd86d5f3",
// 		"x-rapidapi-host": "math-equation-solver.p.rapidapi.com"
// 	},
// 	"processData": false,
// 	"data": "{\r\n    \"clientInfo\": {\r\n        \"platform\": \"web\"\r\n    },\r\n    \"data\": \"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\",\r\n    \"timestamp\": \"1588536455212\"\r\n}"
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// {7 items
//     "customLatex":"y=1+x+(x^2 ) /(2)"
//     "errorMessage":""
//     "isError":false
//     "latex":"y = 1 + x + \frac { x ^ { 2 } } { 2 }"
//     "ocrText":"2 х 2"
//     "solution":""
//     "timestamp":1588536455212
//     }

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})
function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is 10/5?',
    answers: [
      { text: '8', correct: false },
      { text: '0', correct: false },
      { text: '2', correct: true },
      { text: '7', correct: false }
    ]
  },
  {
    question: 'How many days  are in a week?',
    answers: [
      { text: '42', correct: false },
      { text: '7', correct: true },
      { text: '5', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'How many pair of eyes do you have?',
    answers: [
      { text: '2', correct: false },
      { text: '1', correct: true }
    ]
  }
]

// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://giphy.p.rapidapi.com/v1/gifs/random?api_key=undefined&tag=null",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "3a4721856emshb056b91d84c0932p15df4fjsn2dddcd86d5f3",
// 		"x-rapidapi-host": "giphy.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



