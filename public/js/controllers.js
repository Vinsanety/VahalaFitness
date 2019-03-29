app.controller('homeController', function($scope) {
  angular.element(document).ready(function () {
    $(this).scrollTop(0);
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
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
    $("#videos-materialboxed-trigger-4").click(function() {
      $('#videos-materialboxed-4').materialbox().click();
    });
    $("#videos-materialboxed-trigger-5").click(function() {
      $('#videos-materialboxed-5').materialbox().click();
    });
    $("#videos-materialboxed-trigger-6").click(function() {
      $('#videos-materialboxed-6').materialbox().click();
    });
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
