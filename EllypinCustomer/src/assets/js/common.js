$('.menu-wrapper nav').before('<div class="mobile-trigger"><span></span><span></span><span></span><span></span><span></span><span></span></div>');

$(window).on("load",function(){
  $('.mobile-trigger').click(function() {
    $('body').toggleClass('mobile-open');
    $('.menu-wrapper ul').slideToggle();
  });
  $('body').click(function(){
    $(".menu-wrapper ul").slideUp();
    $('body').removeClass('mobile-open');
  });
  $('.menu-wrapper ul,.mobile-trigger').click(function(e){
    e.stopPropagation();
  });
  $('.menu-wrapper ul li a').click(function() {
    $('body').removeClass('mobile-open');
  });
});

$('#podtable tbody').on('click', 'tr', function() {
    window.location = '#';
});
$('#pomtable tbody').on('click', 'tr', function() {
    window.location = '#';
});