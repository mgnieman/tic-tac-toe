'use strict'

// const index = require('./index.js')

// rows
// 0,1,2
// 3,4,5
// 6,7,8
// diagonals
// 0,4,8
// 2,4,6
// columns
// 0,3,6
// 1,4,7
// 2,5,8

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8]

const startNewGame = function () {
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const boxesChildren = $('.boxes').children().children()
  let counter = 0
  $.each(boxesChildren, function () {
    $('#box' + counter).html(counter)
    counter++
    // console.log($('#box' + counter).html(counter))
  })
  // index.resetGame()
  // debugger
  // console.log('value of array', array)
  // return array
}

const winMessage = function (xOrO) {
  if (xOrO === 'X') {
    return $('#winLoseMessage').text('X wins!')
  } else {
    return $('#winLoseMessage').text('O wins!')
  }
}

const same = function (a, b, c) {
  if (a === b && b === c) {
    winMessage(a)
    return true
  } else {
    return false
  }
}

const checkForWin = function () {
  if (
    same(array[0], array[1], array[2]) ||
    same(array[3], array[4], array[5]) ||
    same(array[6], array[7], array[8]) ||
    same(array[0], array[4], array[8]) ||
    same(array[2], array[4], array[6]) ||
    same(array[0], array[3], array[6]) ||
    same(array[1], array[4], array[7]) ||
    same(array[2], array[5], array[8])
  ) {
    return true
  } else {
    return false
  }
}

module.exports = {
  array,
  checkForWin,
  startNewGame
}
