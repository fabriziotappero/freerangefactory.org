$(document).ready(function() {

//   /* resize fonts for small/mobile screen */
//   $('body').flowtype({
//    minimum   : 500,
//    maximum   : 600,
//    minFont   : 12,
//    maxFont   : 30,
//    fontRatio : 30
//   });
//

$("#fittext0").fitText();
$("#fittext1").fitText(1.7,{ minFontSize: '22px', maxFontSize: '28px' });
$("#fittext2").fitText(1.7, { minFontSize: '31px', maxFontSize: '42px' });

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
  //$('a[href^="#"]').on('click', function(event) {
  $('a[href*="#"]').on('click', function(event) { // every link tha has "#" in it

      var target = $( $(this).attr('href') );

      // if link begins with "#" and target exist smoothly go to it
      if( target.length && target.selector.match('^#') ) {
          event.preventDefault();

          // scroll to section
          $('html, body').animate({
              scrollTop: target.offset().top
              //scrollTop: $(window.location.hash).offset().top
          }, duration);
      }
      else{
        event.preventDefault();
        var target = $( $(this).attr('href') );
        console.log(target);
        //window.location = "/"; // go home
        window.location = target.selector.replace('home#','/#');

      }
  });
}

// shop item tabs styling
$(document).ready(function () {
  $('.accordion-tabs').each(function(index) {
    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
  });

  $('.accordion-tabs').on('click', 'li > a', function(event) {
    if (!$(this).hasClass('is-active')) {
      event.preventDefault();
      var accordionTabs = $(this).closest('.accordion-tabs');
      accordionTabs.find('.is-open').removeClass('is-open').hide();

      $(this).next().toggleClass('is-open').toggle();
      accordionTabs.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    } else {
      event.preventDefault();
    }
  });
});



// PayPal shopping cart
$(document).ready(function () {
  paypal.minicart.render();

  paypal.minicart.cart.on('checkout', function (evt) {
    var items, len, i;

    if (this.subtotal() > 0) {
      items = this.items();

      for (i = 0, len = items.length; i < len; i++) {
        items[i].set('shipping', 0);
        items[i].set('shipping2', 0);
      }
    }
  });

});
