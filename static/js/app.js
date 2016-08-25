'use strict';

$(function () {

  /**
   * mask for input type tel
   */
  $('input[type=tel]').mask('+7 (999) 999-99-99');

  /**
   * form styler
   */
  $('input[type=radio]').styler();
  $('input[type=file]').styler({
    filePlaceholder: '',
    fileBrowse: 'Загрузить фото'
  });

  /**
   * faq ask add
   */
  $('[data-js-faq-ask-add-btn]').on('click', function () {
    $('[data-js-faq-ask-add-form]').toggleClass('active');
  });

  /**
   * faq accord
   */
  $('.faq__question').on('click', function () {
    $(this).parent().toggleClass('active');
  });

  /**
   * pop-up
   */
  function showPopUp(name) {
    $('[data-js-popup-item=' + name + ']').addClass('active');
  }

  function hidePopUp() {
    $('[data-js-popup-item]').removeClass('active');
  }

  $('[data-js-popup-link]').click(function () {
    var name = $(this).attr('data-js-popup-link');
    showPopUp(name);
  });

  $('[data-js-popup-close]').click(function () {
    hidePopUp();
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      hidePopUp();
    }
  });

  /**
   * parallax
   */
  function parallax_div() {

    if ($('[data-js-parallax]').length === 0) {
      return;
    }

    var tpp = 'px';
    var kf = 1;
    var scrolled = $(window).scrollTop();

    $('.parallax_1 img').css('top', (-(scrolled * 0.3) - 30) / kf + tpp);
    $('.parallax_2 img').css('top', (260 - scrolled * 0.5) / kf + tpp);
    $('.parallax_3 img').css('top', (470 - scrolled * 0.5) / kf + tpp);
    $('.parallax_4 img').css('top', (660 - scrolled * 0.3) / kf + tpp);
    $('.parallax_5 img').css('top', (950 - scrolled * 0.3) / kf + tpp);
    $('.parallax_6 img').css('top', (1250 - scrolled * 0.5) / kf + tpp);
  }

  function parallax_init() {
    parallax_div();
    console.log(1);

    $(window).scroll(function () {
      parallax_div();
    });
  }

  parallax_init();
});
//# sourceMappingURL=app.js.map
