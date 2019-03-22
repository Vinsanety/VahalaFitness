app.controller('homeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
  });
})

app.controller('videosController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
  });
})

app.controller('contactController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('input#input_text, textarea#contactTextArea').characterCounter();
    $('.datepicker').datepicker();
    $('.timepicker').timepicker();
  });

})
