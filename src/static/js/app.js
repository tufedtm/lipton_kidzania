$(() => {

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
    $(this).parent().toggleClass('active')
  });

});
