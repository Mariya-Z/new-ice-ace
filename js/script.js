$('.tabs a').on('click',function(e){
  e.preventDefault();
  $(this).closest('.tabs').find('.tabs__item').removeClass('tabs__item--active');
  $(this).closest('.tabs__item').addClass('tabs__item--active');

  var tabs_cnt_id = $(this).closest('.tabs').data('tabs-content-id');
  $(tabs_cnt_id).find('.instructor__item').removeClass('instructor__item--active');
  $(this.hash).addClass('instructor__item--active');
});

$('.menu-icon').bind('click', function() {
$(this).toggleClass('active');
$(this).find('div').removeClass('no-animation');
$(".header").toggle();
});