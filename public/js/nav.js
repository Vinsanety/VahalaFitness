$( document ).ready(function(){
  $('.sidenav')
  .sidenav()
  .on('click tap', 'li a', () => {
      $('.sidenav').sidenav('close');
  });
  $('.tabindex-hidden-link').attr('tabindex', '-1');
});
