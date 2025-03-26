jQuery(function($) {
  // Change class to indicate JS is enabled
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // Select the submit button
  let $submitButton = $('#submit input[type="submit"]');
  $submitButton.prop('disabled', true); // Disable button initially

  // Enable submit when all required fields are filled
  $('form :input[required]').on('input', function() {
    let allFilled = true;
    $('form :input[required]').each(function() {
      if ($(this).val().trim() === '') {
        allFilled = false;
      }
    });
    $submitButton.prop('disabled', !allFilled); // Enable button if all fields are filled
  });

  // Add confirmation before form submission
  $('form').on('submit', function(e) {
    let confirmSubmit = confirm('Are you sure you want to submit the form?');
    if (!confirmSubmit) {
      e.preventDefault(); // Prevent submission if user clicks "Cancel"
    }
  });
});
