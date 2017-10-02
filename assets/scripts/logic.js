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

const winMessage = function (xOrO) {
  if (xOrO === 'X') {
    return $('#winLoseMessage').text('X wins!').show()
  } else {
    return $('#winLoseMessage').text('O wins!').show()
  }
}

let boxArray = null

const getBoxArray = function () {
  return boxArray
}

const startNewGame = function () {
  boxArray = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  $('#new-game').click(function () {
    $('#winLoseMessage').hide()
  })
  const boxesChildren = $('.boxes').children().children()
  let counter = 0
  $.each(boxesChildren, function () {
    $('#box' + counter).html(counter)
    counter++
  })
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
    same(boxArray[0], boxArray[1], boxArray[2]) ||
    same(boxArray[3], boxArray[4], boxArray[5]) ||
    same(boxArray[6], boxArray[7], boxArray[8]) ||
    same(boxArray[0], boxArray[4], boxArray[8]) ||
    same(boxArray[2], boxArray[4], boxArray[6]) ||
    same(boxArray[0], boxArray[3], boxArray[6]) ||
    same(boxArray[1], boxArray[4], boxArray[7]) ||
    same(boxArray[2], boxArray[5], boxArray[8])
  ) {
    // console.log('same true', same())
    return true
  } else {
    // console.log('same false', same())
    return false
  }
}
$('#new-game').click(startNewGame)
module.exports = {
  getBoxArray,
  checkForWin,
  startNewGame
}
