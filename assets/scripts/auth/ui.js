'use strict'

const store = require('../store')
const logic = require('../logic.js')
// const index = require('../index.js')

const signUpSuccess = function (data) {
  // console.log(data)
  $('#message').text('Your account has been successfully created')
}
const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong, please try again')
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#message').text('You are now signed in')
  $('.signed-in').show()
  $('.sign-up-in').hide()
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  // console.log('Your password has been updated')
  $('#message').text('Your password has been updated')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  // console.log('You have successfully signed out')
  $('#message').text('You have successfully signed out')
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error signing out')
}
// // disalbe clicks in boxes
// document.getElementById('box0').style.pointerEvents = 'none'
// document.getElementById('box1').style.pointerEvents = 'none'
// document.getElementById('box2').style.pointerEvents = 'none'
// document.getElementById('box3').style.pointerEvents = 'none'
// document.getElementById('box4').style.pointerEvents = 'none'
// document.getElementById('box5').style.pointerEvents = 'none'
// document.getElementById('box6').style.pointerEvents = 'none'
// document.getElementById('box7').style.pointerEvents = 'none'
// document.getElementById('box8').style.pointerEvents = 'none'

const newGameSuccess = function (data) {
  // console.log(data)
  // logic.startNewGame()
  store.gameId = data.game.id
  $('.box').show()
  // index.countXs()
  // index.countOs()
}
const newGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error loading new game')
}
const storeMoveSuccess = function (data) {
  console.log(data)
}
const storeMoveFailure = function () {
  console.log('Move not stored')
}

const getGamesSuccess = function (numGames) {
  $('#message').text('You have played ' + numGames.games.length + ' games')
  console.log(numGames)
}
const getGamesFailure = function () {
  console.log('Move not stored')
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  storeMoveSuccess,
  storeMoveFailure,
  getGamesSuccess,
  getGamesFailure
}
