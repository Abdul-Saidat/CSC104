const rules = {
  'minLength': (value) => value.length >= 8,
  'hasUppercase': (value) => (/[A-Z]/).test(value),
  'hasLowercase': (value) => (/[a-z]/).test(value),
  'hasNumber': (value) => (/[0-9]/).test(value)
//   'validChars': (value) => '/^[A-Za-z0-9]+$/'.test(value)
}

const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const phoneInput = document.getElementById('phone')
const feedback = document.getElementById('feedback')

usernameInput.addEventListener('input', () => {
  const value = usernameInput.value
  const result = {
    'minLength': rules.minLength(value),
    'hasUppercase': rules.hasUppercase(value),
    'hasLowercase': rules.hasLowercase(value),
    'hasNumber': rules.hasNumber(value)
    // 'validChars': rules.validChars(value)
  }
  const isValid = Object.values(result).every(Boolean)
  if (isValid) {
    feedback.textContent = 'Username valid'
  }
})

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.match(/[a-zA-Z0-9]./)) {
    console.log('Right password pattern')
  } else {
    console.log('wrong password pattern')
  }
})

phoneInput.addEventListener('input', () => {
  if (phoneInput.value.match(/(\+234)\d{10}$/)) {
    console.log('Right phone pattern')
  } else {
    console.log('wrong phone pattern')
  }
})

