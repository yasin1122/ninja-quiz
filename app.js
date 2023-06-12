const correctAnswers = ['B', 'B', 'B', 'B']
const form = document.querySelector('.quiz-form')
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
  e.preventDefault()

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ]

  let score = calculateScore(userAnswers)

  // show the result
  scrollTo(0, 0)
  result.classList.remove('d-none')

  let output = 0
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`
    output === score ? clearInterval(timer) : output++
  }, 10)
})

function calculateScore(userAnswers) {
  let correctCount = 0
  userAnswers.forEach((answer, index) => {
    answer === correctAnswers[index] && correctCount++
  })

  const totalQuestions = correctAnswers.length
  const score = (correctCount / totalQuestions) * 100

  return score
}
