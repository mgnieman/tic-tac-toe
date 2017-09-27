'use strict'

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

// const x = 'x'
// const o = 'o'
// const b = 'abracadabra'
// const array = [x, o, x, o, x, o, x, o, x]
// const array = [x, x, x, x, x, x, x, x, x]
// const array = [x, b, o, o, x, o, o, o, o]
const array = []
const same = function (a, b, c) {
  if (a === b && b === c) {
    // console.log('WIN!')
    return true
  } else {
    // console.log('keep playing')
    return false
  }
}

const checkForWin = function () {
  console.log('first row', same(array[0], array[1], array[2]))
  console.log('middle row', same(array[3], array[4], array[5]))
  console.log('bottom row', same(array[6], array[7], array[8]))
  console.log('top left > bottom right', same(array[0], array[4], array[8]))
  console.log('top right > bottom left', same(array[2], array[4], array[6]))
  console.log('first column', same(array[0], array[3], array[6]))
  console.log('middle colum ', same(array[1], array[4], array[7]))
  console.log('right columnm', same(array[2], array[5], array[8]))
  // RUNNING THE LINE BELOW REMOVED THE BOXES
  // console.log('array[' + array.indexOf(event.target) + ']')
}

checkForWin()

module.exports = {
  array
}
