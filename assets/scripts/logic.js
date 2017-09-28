'use strict'

// const events = require('./auth/events')

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
let over = false

const startNewGame = function () {
  const boxesChildren = $('.boxes').children().children()
  let counter = 0
  $.each(boxesChildren, function () {
    $('#box' + counter).html(counter)
    counter++
  })
  array = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  return array
}

const winMessage = function () {
  $('#winLoseMessage').text('You win!')
}
const same = function (a, b, c) {
  if (a === b && b === c) {
    winMessage()
    // console.log('startNewGame', startNewGame())
    startNewGame()
    over = true
    return over
  }
}

const checkForWin = function () {
  same(array[0], array[1], array[2])
  same(array[3], array[4], array[5])
  same(array[6], array[7], array[8])
  same(array[0], array[4], array[8])
  same(array[2], array[4], array[6])
  same(array[0], array[3], array[6])
  same(array[1], array[4], array[7])
  same(array[2], array[5], array[8])
}

module.exports = {
  array,
  checkForWin
}
