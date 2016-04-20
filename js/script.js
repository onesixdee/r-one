'use strict'

$(function() {

	var firstName = $('#fname')
	var lastName = $('#lname')
	var company = $('#comany')
	var title = $('#title')
	var country = $('#country')
	var state = $('#state')


	$('#submit').click(function() {
		console.log("submit button clicked")
		firstName.val()
		console.log(firstName)

	})

})