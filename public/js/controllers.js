app.controller('homeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $(document).ready(function(){
        $('.parallax').parallax();
      });
  });
})

app.controller('mattController', function($scope) {
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

app.controller('videosController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    // ToolTip
    $('.tooltipped').tooltip();
    // Materialboxed
    $("#videos-materialboxed-trigger-1").click(function() {
      $('#videos-materialboxed-1').materialbox().click();
    });
    $("#videos-materialboxed-trigger-2").click(function() {
      $('#videos-materialboxed-2').materialbox().click();
    });
    $("#videos-materialboxed-trigger-3").click(function() {
      $('#videos-materialboxed-3').materialbox().click();
    });
  });
})
