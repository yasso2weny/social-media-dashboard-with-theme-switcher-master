$(document).ready(function() {
    $('#switch input[type="checkbox"]').change(function(e) {
      if (this.checked) {
        $('html').attr('data-theme', 'light');
      } else {
        $('html').removeAttr('data-theme');
      }
    });
  });
  