'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Your account has been successfully created')
}
const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong, please try again')
}

const signInSuccess = function (data) {
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
  $('#message').text('Your password has been updated')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password')
}
const signOutSuccess = function () {
  $('#message').text('You have successfully signed out')
  $('.signed-in').hide()
  $('.sign-up-in').show()
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error signing out')
}
const newGameSuccess = function (data) {
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
