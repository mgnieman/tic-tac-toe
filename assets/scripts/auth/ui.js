'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Your account has been successfully created')
}
const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Something went wrong, please try again')
}

const signInSuccess = function (data) {
  console.log(data)
  $('#message').text('You are now signed in')
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function () {
  console.log('Your password has been updated')
  $('#message').text('Your password has been updated')
}
const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error changing password')
}

const signOutSuccess = function () {
  console.log('You have successfully signed out')
  $('#message').text('You have successfully signed out')
  store.user = null
}
const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error signing out')
}
const clickBoxSuccess = function () {
  $('box0').text('X')
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
  clickBoxSuccess
}
