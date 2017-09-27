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
// $('.box').click(function (event) {
//   $(event.target).html('X')
// })

const firstClick = function (event) {
  $(event.target).html('X')
  // array[event.target] = 'X'
  array[event.target.id] = 'X'
  console.log(event.target.id.charAt(3))
}
$('.box').click(firstClick)

$(() => {
  events.addHandlers()
})
