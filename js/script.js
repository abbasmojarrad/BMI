const $ = document
const weight = $.querySelector('#weight')
const height = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const result = $.querySelector('#result')
const category = $.querySelector('#category')
const title = $.querySelector('.title')

function bmi () {
  let newWeight = weight.value
  let newHeight = height.value
  newHeight = newHeight / 100

  let bmi = newWeight / (newHeight * newHeight)
  return bmi.toFixed(1)
}
function bmiCategory (value) {
  if (value < 18.5) {
    category.innerHTML = 'under weight'
    category.style.color = 'red'
    result.style.color = 'red'
    title.style.color = "red"

  } else if (value >= 18.5 && value <= 24.9) {
    category.innerHTML = 'normal weight'
    category.style.color = 'green'
    result.style.color = 'green'
    title.style.color = 'green'
  } else if (value >= 25 && value < 29.9) {
    category.innerHTML = 'over weight'
    category.style.color = 'orange'
    result.style.color = 'orange'
    title.style.color = 'orange'
  } else if (value >= 30 && value < 34.9) {
    category.innerHTML = 'obesity class 1'
    category.style.color = 'red'
    result.style.color = 'red'
    title.style.color = 'red'
  } else if (value >= 35 && value < 39.9) {
    category.innerHTML = 'obesity class 2'
    category.style.color = 'red'
    result.style.color = 'red'
    title.style.color = 'red'
  } else if (value >= 40) {
    category.innerHTML = 'obesity class 3'
    category.style.color = 'red'
    result.style.color = 'red'
    title.style.color = 'red'
  }
}
weight.addEventListener('input', function () {
  weightVal.innerHTML = weight.value + ' kg'
  result.innerHTML = bmi()
  bmiCategory(bmi())
})

height.addEventListener('input', function () {
  heightVal.innerHTML = height.value + ' cm'

  result.innerHTML = bmi()
  bmiCategory(bmi())
})
