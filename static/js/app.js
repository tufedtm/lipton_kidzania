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
});
//# sourceMappingURL=app.js.map
