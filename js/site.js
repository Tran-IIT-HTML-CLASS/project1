jQuery(function($) {
  // Change class to indicate JS is enabled
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');

  // Add confirmation before form submission
  $('form').on('submit', function(e) {
    let confirmSubmit = confirm('Are you sure you want to submit the form?');
    if (!confirmSubmit) {
      e.preventDefault();
    }
  });

  // Disable submit until all required fields are filled
  let $submitButton = $('#submit input[type="submit"]');
  $submitButton.prop('disabled', true);

  $('form :input[required]').on('input', function() {
    let allFilled = true;
    $('form :input[required]').each(function() {
      if ($(this).val().trim() === '') {
        allFilled = false;
      }
    });
    $submitButton.prop('disabled', !allFilled);
  });
});
