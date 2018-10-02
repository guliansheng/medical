$(function() {
  $('.nav-menu>ul>li>a').eq(1).addClass('aHover');
  $('.services-menu li').hover(function() {
    $(this).css({ 'background': '#ffcc99' }).siblings().css({ 'background': '#fff' });
    ind = $(this).index('.services-menu li');
    $('.services-logo img').eq(ind).attr({ 'src': 'images/index/services-logo' + ind + '-1.png' });
    $('.services-list').eq(ind).show().not($('.services-list').eq(ind)).hide();
  }, function() {
    $(this).css({ 'background': '#fff' });
    $('.services-list').hide();
    $('.services-logo img').eq(ind).attr({ 'src': 'images/index/services-logo' + ind + '.png' });
  })
  $(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 600) {
      $('.backTop').show();
    } else {
      $('.backTop').hide();
    }
  })
  $('.backTop').click(function() {
    var s = $(window).scrollTop();
    var v = 30;
    var back = setInterval(function() {
      if (s >= 0) {
        $(window).scrollTop(s);
        s -= v;
      } else {
        clearInterval(back);
      }
    }, 10)
  })
})
