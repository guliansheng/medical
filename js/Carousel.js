$(function() {
  var oindex = 0;
  $('.Carousel-dot ul li').eq(0).attr('style', 'background:#f00');
  $('.Carousel-img img').eq(0).css({ 'opacity': 1 });
  $('.Carousel-img img').not($('.Carousel-img img').eq(0)).css({ 'opacity': 0 });
  bStart = setInterval(function() {
    Brun();
  }, 4000);
  $('.Carousel-dot li').mouseenter(function() {
    oindex = $(this).index();
    bannerBg();
    $(this).attr('style', 'background:#f00');
    $('.Carousel-dot li').not($(this)).removeAttr('style', 'background:#f00');
    $('.Carousel-img img').eq(oindex).stop(true, true).animate({
      opacity: 1
    }, 200);
    $('.Carousel-img img').eq(oindex).siblings().stop(true, true).animate({
      opacity: 0
    }, 200);
    clearInterval(bStart);
  });
  $('.Carousel-dot li').mouseout(function() {
    bStart = setInterval(function() {
      Brun();
    }, 3000);
  });

  function Brun() {
    oindex++;
    if (oindex > 3) {
      oindex = 0;
    }
    oindexRun();
    bannerBg();
  }

  function oindexRun() {
    $('.Carousel-img img').eq(oindex).stop(true, true).animate({
      opacity: 1
    }, 200);
    $('.Carousel-img img').eq(oindex).siblings().stop(true, true).animate({
      opacity: 0
    }, 200);
    $('.Carousel-dot li').eq(oindex).attr('style', 'background:#f00');
    $('.Carousel-dot li').not($('.Carousel-dot li').eq(oindex)).removeAttr('style', 'background:#f00');
  }

  function bannerBg() {
    if (oindex == 0) {
      setTimeout(function() {
        $('.banner').css({ 'background': 'rgb(249, 240, 229)' })
      }, 50)
    } else if (oindex == 1) {
      setTimeout(function() {
        $('.banner').css({ 'background': 'rgb(196, 232, 255)' })
      }, 50)
    } else if (oindex == 2) {
      setTimeout(function() {
        $('.banner').css({ 'background': 'rgb(117, 200, 255)' })
      }, 50)
    } else {
      setTimeout(function() {
        $('.banner').css({ 'background': 'rgb(142, 204, 215)' })
      }, 50)
    }
  }
});
