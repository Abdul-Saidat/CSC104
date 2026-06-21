/*
 * Create an interactive multiple-choice quiz with at least 4 questions. Show one question at a time.
 * When the user selects an answer, the background should turn green for correct or red for wrong before
 * moving to the next question. Display the final score and a grade remark at the end.
 */

const questions = [
  { 'Question': 'What year was the world wide web created?',
    'Options': { 'A': 1728,
      'B': 1998,
      'C': 1978,
      'D': 1999 }},
  { 'Question': `What is the output of 2 + '2' in JavaScript ?`,
    'Options': { 'A': '4',
      'B': '22',
      'C': 'NAN',
      'D': 'Error' }},
  { 'Question': 'Which keyword is used to declare a constant in JavaScript?',
    'Options': { 'A': 'let',
      'B': 'var',
      'C': 'const',
      'D': 'static' }},
  { 'Question': 'What does DOM stand for?',
    'Options': { 'A': 'Document Object Model',
      'B': 'Data Object Model',
      'C': 'Document Oriented Module',
      'D': 'Display Object Management' }},
  { 'Question': 'Which method converts JSON string into a JavaScript Object?',
    'Options': { 'A': 'JSON.parse()',
      'B': 'JSON.stringify()',
      'C': 'JSON.convert()',
      'D': 'JSON.toObject()' }},
  { 'Question': 'Which of these is NOT a JavaScript data type?',
    'Options': { 'A': 'String',
      'B': 'Boolean',
      'C': 'Float',
      'D': 'Undefined' }},
  { 'Question': 'What will typeof null return?',
    'Options': { 'A': 'null',
      'B': 'object',
      'C': 'undefined',
      'D': 'number' }},
  { 'Question': 'Which symbol is used for strict equality?',
    'Options': { 'A': '=',
      'B': '==',
      'C': '===',
      'D': '!==' }}
]

const answers = [
  'A',
  'B',
  'C',
  'A',
  'A',
  'C',
  'B',
  'C'
]

let score = 0
let current_question_index = 0
const next = document.createElement('button')
const prev = document.createElement('button')
const selectOption = document.createElement('button')
next.textContent = 'Next'
prev.textContent = 'Previous'

const quizContainer = document.getElementById('quiz')
const questionContainer = document.createElement('div')
const optionsContainer = document.createElement('div')
const displayScore = document.createElement('p')
const finalScore = document.createElement('p')

function updateScore () {
  displayScore.textContent = `Score: ${score}`
  finalScore.textContent = `Final score: ${score} / ${questions.length}`
}

function showFinalScore () {
  quizContainer.innerHTML = ''
  const result = document.createElement('h2')
  result.textContent = `Your score: ${score} / ${questions.length}`

  quizContainer.appendChild(result)
}

function displayQuestion () {
  document.body.style.backgroundColor = 'white'
  let currentQuestion = questions[current_question_index]
  questionContainer.textContent = currentQuestion.Question
  let options = currentQuestion.Options
  optionsContainer.innerHTML = ''
  Object.entries(options).forEach(([
    key,
    value
  ]) => {
    const button = document.createElement('button')
    button.textContent = `${key}: ${value}`

    button.addEventListener('click', () => {
      if (key === answers[current_question_index]) {
        score += 1
        updateScore()
        document.body.style.backgroundColor = 'green'
      } else {
        if (score == 0) {
          // neither increment nor decrement
        } else {
          updateScore()
        }
        document.body.style.backgroundColor = 'red'
      }
      console.log('Selected:', key, value)
      console.log('score:', score)
    })
    if (current_question_index === 0) {
      prev.disabled = true
    } else {
      prev.disabled = false
    }
    if (current_question_index === questions.length - 1) {
      showFinalScore()
      ext.disabled = true
    } else {
      next.disabled = false
    }
    optionsContainer.appendChild(button)
  })
}

next.addEventListener('click', () => {
  if (current_question_index === questions.length - 1) {
    next.disabled = true
  } else {
    next.disabled = false
    current_question_index += 1
    displayQuestion()
    console.log(current_question_index)
  }
})
prev.addEventListener('click', () => {
  if (current_question_index == 0) {
    prev.disabled = true
  } else {
    prev.disabled = false
    current_question_index -= 1
    console.log(current_question_index)
    displayQuestion()
  }
})

quizContainer.appendChild(questionContainer)
quizContainer.appendChild(optionsContainer)
quizContainer.appendChild(prev)
quizContainer.appendChild(next)
quizContainer.appendChild(displayScore)

updateScore()
displayQuestion()
// console.log(opt)


