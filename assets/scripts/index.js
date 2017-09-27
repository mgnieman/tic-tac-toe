'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})
$('#box0').click(function () {
  console.log('you clicked box0')
})
$('#box1').click(function () {
  console.log('you clicked box1')
})
$('#box2').click(function () {
  console.log('you clicked box2')
})
$('#box3').click(function () {
  console.log('you clicked box3')
})
$('#box4').click(function () {
  console.log('you clicked box4')
})
$('#box5').click(function () {
  console.log('you clicked box5')
})
$('#box6').click(function () {
  console.log('you clicked box6')
})
$('#box7').click(function () {
  console.log('you clicked box7')
})
$('#box8').click(function () {
  console.log('you clicked box8')
})
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
