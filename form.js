const rules = {
  'validUsername': (value) => (/[a-zA-Z0-9]{5,15}/).test(value),
  'minLength': (value) => value.length >= 8,
  'hasUppercase': (value) => (/[A-Z]/).test(value),
  'hasLowercase': (value) => (/[a-z]/).test(value),
  'hasNumber': (value) => (/[0-9]/).test(value),
  'hasSpecialChar': (value) => (/[!@#$%^&*_()]/).test(value),
  'validPhoneNumber': (value) => (/^\+234\d{10}/).test(value)
}

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')
const feedback = document.getElementById('feedback')
const password_feedback = document.getElementById('password_feedback')
const phone_feedback = document.getElementById('phone_feedback')

usernameInput.addEventListener('input', () => {
  const value = usernameInput.value
  const result = {
    'validUsername': rules.validUsername(value)
  }
  console.log(result)
  const isValid = Object.values(result).every(Boolean)
  if (isValid) {
    feedback.textContent = 'Username valid'
    feedback.style.color = 'blue'
    // feedback.textContent = ''
    console.log(feedback)
  } else {
    feedback.textContent = 'username invalid'
    usernameInput.style.borderColor = '2px solid red'
  }
  console.log(usernameInput.value)
  // feedback.textContent = ''
})

passwordInput.addEventListener('input', () => {
  const value = passwordInput.value
  const result = {
    'minLength': rules.minLength(value),
    'hasUppercase': rules.hasUppercase(value),
    'hasLowercase': rules.hasLowercase(value),
    'hasNumber': rules.hasNumber(value),
    'hasSpecialChar': rules.hasSpecialChar(value)
  }
  const isValid = Object.values(result).every(Boolean)
  if (isValid) {
    password_feedback.textContent = 'password is valid'
    password_feedback.style.color = 'blue'
    console.log(password_feedback)
  } else {
    password_feedback.textContent = 'password is invalid'
  }
})

phoneInput.addEventListener('input', () => {
  const value = phoneInput.value
  const result = {
    'validPhoneNumber': rules.validPhoneNumber(value)
  }
  const isValid = Object.values(result).every(Boolean)
  if (isValid) {
    phone_feedback.textContent = 'Valid Phone Number'
    phone_feedback.style.color = 'blue'
    console.log(phone_feedback)
  } else {
    phone_feedback.textContent = 'phone number is invalid'
  }
})

