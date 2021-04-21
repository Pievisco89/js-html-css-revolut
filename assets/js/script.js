$(function(){

  $('.with-dropdown').mouseenter(function(){

    $(this).find('.dropdown-menu').addClass('active');
    
  });

  $('.with-dropdown').click(function(){

    $(this).find('.dropdown-menu.active').removeClass('active');

  });

})