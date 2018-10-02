$(function() {
  function getCode(n) {
    var all = "azxcvbnmsdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP0123456789";
    var b = "";
    for (var i = 0; i < n; i++) {
      var index = Math.floor(Math.random() * 62);
      b += all.charAt(index);
    }
    return b;
  }

  function change() {
    $('.codechange')[0].innerHTML = getCode(6);
  }
  $('.codechange').click(function() {
    change();
  })
  $('.codechange')[0].oncontextmenu = new Function('event.returnValue=false;');
  $('.codechange')[0].onselectstart = new Function('event.returnValue=false;');
  window.onload = change();
  $('.registerTop-left').click(function() {
    window.location.href = "index.html";
  })
  $('.user').blur(function() {
    var user = $(this).val();
    if (!user.match(/^\w{4,16}$/)) {
      $('.error').show().html('用户名必须为4到16位的数字、字母、下划线组成！');
    } else {
      $('.error').hide();
    }
  })
  $('.code').blur(function() {
    var code = $(this).val();
    var codechange = ($('.codechange').html()).toLowerCase();
    if (code != codechange) {
      $('.error').show().html('请正确的输入图中字符，不区分大小写！');
    } else {
      $('.error').hide();
    }
  })
  $('.password').blur(function() {
    var password = $(this).val();
    if (!password.match(/^[a-zA-Z]{1}(\w){4,19}$/)) {
      $('.error').show().html('密码必须为5-20位以字母开头,可带数字下划线的字串！');
    } else {
      $('.error').hide();
    }
  })
  $('.confirm').blur(function() {
    var confirm = $(this).val();
  })
  $('.register-button').click(function() {
    var user = $('.user').val();
    var code = $('.code').val();
    var codechange = ($('.codechange').html()).toLowerCase();
    var password = $('.password').val();
    var confirm = $('.confirm').val();
    if (!user.match(/^\w{4,16}$/)) {
      $('.error').show().html('用户名必须为4到16位的数字、字母、下划线组成！');
      return false;
    } else if (code != codechange) {
      $('.error').show().html('请正确的输入图中字符，不区分大小写！');
      return false;
    } else if (!password.match(/^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/)) {
      $('.error').show().html('密码只能是5-20个以字母开头,可带数字下划线的字串！');
      return false;
    } else if (confirm != password) {
      $('.error').show().html('确认密码出现错误！');
      return false;
    }
  })
})
