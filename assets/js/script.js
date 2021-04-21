$(function(){

  $('.with-dropdown').mouseenter(function(){
    /* punto i dropdown-menu con classe active e la tolgo */
    $('.dropdown-menu.active').removeClass('active');
    /* aggiungo al dropdown cliccato la classe active */
    $(this).find('.dropdown-menu').addClass('active');
    
  });

  $('.with-dropdown').click(function(){
    /* cliccando sul link del menu tolgo active per chiudere il dropdown */
    $(this).find('.dropdown-menu.active').removeClass('active');

  });

})