$("#right").click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  $('.items').css('left', (currentLeft - 1000) + 'px');
})

$('#left').click(function() {
  var currentLeft = parseInt($('.items').css('left'));
  $('.items').css('left', (currentLeft + 800) + 'px');
})
