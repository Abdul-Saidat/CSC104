const questions = [
  {
    'question': `What is the output of 2 + '2' in JavaScript ?`,
    'options': [
      '4',
      '22',
      'NAN',
      'Error'
    ],
    'answer': '22',
    'userAnswer': null
  },
  {
    'question': 'Which of these is NOT a JavaScript data type?',
    'options': [
      'String',
      'Boolean',
      'Float',
      'Undefined'
    ],
    'answer': 'Float',
    'userAnswer': null
  }
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
  const grade = document.createElement('h2')
  if (score == questions.length) {
    grade.textContent = 'EXCELLENT'
  } else {
    grade.textContent = 'Very good'
  }
  quizContainer.appendChild(result)
  quizContainer.appendChild(grade)
}


function displayQuestion () {
  const q = questions[current_question_index]
  questionContainer.innerHTML = ''
  const questionText = document.createElement('p')
  questionText.textContent = q.question

  questionContainer.appendChild(questionText)
  optionsContainer.innerHTML = ''

  q.options.forEach((option) => {
    const btn = document.createElement('button')
    btn.textContent = option

    btn.addEventListener('click', () => {
      handleAnswer(option)
    })
    optionsContainer.appendChild(btn)
  })
}

function calculateScore () {
  let newScore = 0

  questions.forEach((q) => {
    if (q.userAnswer === q.answer) {
      newScore++
    }
  })

  score = newScore
  updateScore()
}

function handleAnswer (selected) {
  const q = questions[current_question_index]
  if (q.userAnswer) return

  q.userAnswer = selected
  calculateScore()
}

function nextQuestion () {
  current_question_index++

  if (current_question_index >= questions.length) {
    showFinalScore()
  } else {
    displayQuestion()
  }
}

function prevQuestion () {
  if (current_question_index > 0) {
    current_question_index--
    displayQuestion()
  }
}

next.addEventListener('click', nextQuestion)
prev.addEventListener('click', prevQuestion)


quizContainer.appendChild(questionContainer)
quizContainer.appendChild(optionsContainer)
quizContainer.appendChild(prev)
quizContainer.appendChild(next)
quizContainer.appendChild(displayScore)


updateScore()
displayQuestion()
