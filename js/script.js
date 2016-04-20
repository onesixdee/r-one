// 'use strict'

$(function() {

var submitForm = $('.submit-form')

	$('#submit').click(function() {
		console.log("submit button clicked")

		var firstName = $("input[name='fname']").val()
		var lastName = $("input[name='lname']").val()
		var company = $("input[name='company']").val()
		var title = $("input[name='title']").val()
		var country = $("select[name='country']").val()
		var state = $("select[name='states']").val()
		var comments = $("textarea[name='comments']").val()

		console.log('<p>Name:' + firstName + ' ' + lastName + '</p><br><p>Company and Title:' + company + ', ' + title + '</p><br><p>Country and State:' + country + ', ' + state)

		submitForm.append('<p>Name:' + firstName + ' ' + lastName + '</p><br><p>Company and Title:' + company + ', ' + title + '</p><br><p>Country and State:' + country + ', ' + state)
	})
})