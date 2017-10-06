'use strict'
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const events = require('./auth/events')
const logic = require('./logic.js')

$(() => {
  setAPIOrigin(location, config)
})

const countXs = function (array) {
  let xCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'X') {
      xCount++
    }
  }
  return xCount
}
const countOs = function (array) {
  let oCount = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'O') {
      oCount++
    }
  }
  return oCount
}

const checkForDraw = function () {
  const boxArray = logic.getBoxArray()
  if (countXs(boxArray) + countOs(boxArray) === 9 && logic.checkForWin() === false) {
    $('#winLoseMessage').text('Right! We\'ll call it a draw.').show()
    return true
  } else {
    return false
  }
}

const chooseLetter = function (event) {
  const boxArray = logic.getBoxArray()
  const move = {
    game: {
      'cell': {
        'index': null,
        'value': null
      },
      'over': false
    }
  }
  if (logic.checkForWin() || $(event.target).html() === 'X' || $(event.target).html() === 'O') {
    // do nothing
  } else {
    move.game.cell.index = $(event.target).html()
    // debugger
    if (countXs(boxArray) === countOs(boxArray)) {
      $(event.target).html('X')
      boxArray[event.target.id.charAt(3)] = 'X'
      move.game.cell.value = 'x'
      // console.log(event.target.id.charAt(3))
      const draw = checkForDraw()
      const win = logic.checkForWin()
      if (draw || win) {
        // logic.startNewGame()
        move.game.over = true
      }
    } else {
      $(event.target).html('O')
      boxArray[event.target.id.charAt(3)] = 'O'
      move.game.cell.value = 'o'
      // console.log(event.target.id.charAt(3))
      const draw = checkForDraw()
      const win = logic.checkForWin()
      if (draw || win) {
        // logic.startNewGame()
        move.game.over = true
      }
    }
    // console.log('boxArray', boxArray)
    // console.log('checkForWin', logic.checkForWin())
    events.onStoreNewMove(move)
  }
  // console.log(move)
}

$('.box').click(chooseLetter)
$(() => {
  events.addHandlers()
})
module.exports = {
  countXs,
  countOs
  // resetGame
}
