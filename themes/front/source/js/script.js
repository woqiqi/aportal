(function($){
  $(window).on('load',()=>{
    $('#card-body-btn').on('click',()=>{
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', document.getElementById('card-body-span').innerHTML);
      input.select();
      document.execCommand("Copy");
      document.body.removeChild(input);
    })
    $.HSCore.components.HSScrollNav.init($('.js-scroll-nav'), {
      duration: 400,
      customOffsetTop: -60
    });
  })
})(jQuery);