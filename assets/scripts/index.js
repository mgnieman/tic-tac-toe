'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const logic = require('./logic.js')
const array = logic.array

$(() => {
  setAPIOrigin(location, config)
})

const countXs = function (arr) {
  let xCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'X') {
      xCount++
    }
  }
  return xCount
}
const countOs = function (arr) {
  let oCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'O') {
      oCount++
    }
  }
  return oCount
}
function chooseLetter (event) {
  countXs()
  countOs()
  if (countXs() === countOs()) {
    $(event.target).html('X')
    array[event.target.id.charAt(3)] = 'X'
    console.log(event.target.id.charAt(3))
    logic.checkForWin()
  } else {
    $(event.target).html('O')
    array[event.target.id.charAt(3)] = 'O'
    console.log(event.target.id.charAt(3))
    logic.checkForWin()
  }
}
$('.box').click(chooseLetter)
$(() => {
  events.addHandlers()
})
