//DATA
let leftScore = 0
let rightScore = 0
let totalScore = 0
//----------------------Left
function pointLeft() {
  leftScore++
  totalScore++
  draw()
}
function pointLeftMinus() {
  leftScore--
  totalScore--
  draw()
  console.log('leftScore')
}

//-----------------------Right
function pointRightMinus() {
  rightScore--
  totalScore--
  draw()
  console.log(rightScore)
}
function pointRight() {
  rightScore++
  totalScore++
  draw()
  console.log(rightScore)
}

function touchDownRight() {
  rightScore + 6
  totalScore++
  draw()
  console.log(rightScore)
}


function Reset() {
  leftScore = 0
  rightScore = 0
  totalScore = 0
  draw()
}

function draw() {
  let leftCountElem = document.getElementById('leftPoint-score')
  let rightCountElem = document.getElementById('rightPoint-score')
  let totalScoreElem = document.getElementById('totalScore')

  leftCountElem.innerText = leftScore.toString()
  rightCountElem.innerText = rightScore.toString()
  totalScoreElem.innerText = totalScore.toString()




}