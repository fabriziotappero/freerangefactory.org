$(document).ready(function() {

  /* resize fonts for small/mobile screen */
  $('body').flowtype({
   minimum   : 500,
   maximum   : 600,
   minFont   : 12,
   maxFont   : 30,
   fontRatio : 30
  });

});


$(function () {
  /* IP Cores search field */
  $('input#id_search').quicksearch('table tbody tr',{'delay': 300,
    'stripeRows': ['odd', 'even']});
});


$(function() {
  smoothScroll(700);
});

// smoothScroll function is applied from the document ready function
function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event) {

      var target = $( $(this).attr('href') );

      if( target.length ) {
          event.preventDefault();
          // scroll to section
          $('html, body').animate({
              scrollTop: target.offset().top
          }, duration);
      }
  });
}
