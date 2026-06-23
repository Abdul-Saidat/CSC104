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
  },
  {
    'question': 'Which of these is NOT a JavaScript data type?',
    'options': [
      'String',
      'Boolean',
      'Float',
      'Undefin'
    ],
    'answer': 'Float',
    'userAnswer': null
  }
]

let score = document.createElement('p')
score.textContent = 0
let current_question_index = 0
const next = document.createElement('button')
next.classList.add('next_btn')
const prev = document.createElement('button')
prev.classList.add('prev_btn')
const selectOption = document.createElement('button')
next.textContent = 'Next'
prev.textContent = 'Previous'

const quizContainer = document.getElementById('quiz')
const questionContainer = document.createElement('p')
questionContainer.classList.add('question')
const optionsContainer = document.createElement('div')
optionsContainer.classList.add('options')
const displayScore = document.createElement('p')
const finalScore = document.createElement('p')

function updateScore () {
  displayScore.textContent = `Score: ${score.textContent}`
  finalScore.textContent = `Final score: ${score.textContent} / ${questions.length}`
}

function showFinalScore () {
  quizContainer.innerHTML = ''
  const result = document.createElement('h2')
  result.classList.add('show_result')
  result.textContent = `Your score: ${score.textContent} / ${questions.length}`
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
  document.body.style.backgroundColor = 'white'
  const q = questions[current_question_index]
  questionContainer.innerHTML = ''
  const questionText = document.createElement('p')
  questionText.textContent = q.question

  questionContainer.appendChild(questionText)
  optionsContainer.innerHTML = ''

  q.options.forEach((option) => {
    const btn = document.createElement('button')
    btn.textContent = option
    btn.classList.add('options_btn')

    btn.addEventListener('click', () => {
      if (q.userAnswer === q.answer) {
        document.body.style.backgroundColor = 'green'
      } else {
        console.log('wrong answer')
        document.body.style.backgroundColor = 'red'
      }
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
      // document.body.style.backgroundColor = 'green'
    }
  })

  score.textContent = newScore
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
