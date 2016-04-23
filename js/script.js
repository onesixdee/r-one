  "use strict";
  $(function() {
    var submitForm = $('.submit-form');
    var requiredFields = $('.required');
    var errorMessage = $('.error');
    $('#submit-btn').click(function(event) {
      event.preventDefault();
      var firstName = $("input[name='fname']").val();
      var lastName = $("input[name='lname']").val();
      var company = $("input[name='company']").val();
      var title = $("input[name='title']").val();
      var country = $("select[name='country']").val();
      var state = $("select[name='states']").val();
      var comments = $("textarea[name='comments']").val();
      if (requiredFields.val() === '') {
        errorMessage.text("*All fields are required.");
        $(this).val('');
      } else {
        submitForm.addClass('form-wrapper');
        submitForm.append('<p>First Name: ' + firstName + '</p><br><p>Last Name: ' + lastName + '</p><br><p>Company: ' + company + '</p><br><p>Title: ' + title + '</p><br><p>Country: ' + country + '</p><br><p>State: ' + state + '</p><br><p>Additional Comments: ' + comments + '</p>');
        errorMessage.empty();
        requiredFields.val('');
      }
    });
  });


       
      




  