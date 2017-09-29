'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const logic = require('./logic.js')
let array = logic.array
// const api = require('./auth/api.js')

$(() => {
  setAPIOrigin(location, config)
})

function resetGame () {
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
}
const countXs = function () {
  let xCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'X') {
      xCount++
    }
  }
  return xCount
}
const countOs = function () {
  let oCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'O') {
      oCount++
    }
  }
  return oCount
}

const checkForDraw = function () {
  if (countXs() + countOs() === 9 && logic.checkForWin() === false) {
    $('#winLoseMessage').text('Right! We\'ll call it a draw.')
    return true
  } else {
    return false
  }
}
const chooseLetter = function (event) {
  const move = {
    game: {
      'cell': {
        'index': null,
        'value': null
      },
      'over': false
    }
  }
  countXs()
  countOs()
  if ($(event.target).html() === 'X' || $(event.target).html() === 'O') {
    // do nothing
  } else {
    move.game.cell.index = $(event.target).html()
    // debugger
    if (countXs() === countOs()) {
      $(event.target).html('X')
      array[event.target.id.charAt(3)] = 'X'
      move.game.cell.value = 'x'
      // console.log(event.target.id.charAt(3))
      const draw = checkForDraw()
      const win = logic.checkForWin()
      if (draw || win) {
        move.game.over = true
      }
    } else {
      $(event.target).html('O')
      array[event.target.id.charAt(3)] = 'O'
      move.game.cell.value = 'o'
      // console.log(event.target.id.charAt(3))
      const draw = checkForDraw()
      const win = logic.checkForWin()
      if (draw || win) {
        move.game.over = true
      }
    }
    events.onStoreNewMove(move)
  }
  console.log(move)
}

$('.box').click(chooseLetter)
// $('.box').click(saveMove)
$(() => {
  events.addHandlers()
})
module.exports = {
  countXs,
  countOs,
  resetGame
}
