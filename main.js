$(document).ready(function () {
  $(".header-sliser").owlCarousel(
	{
		smartSpeed:500,
		autoplay:true,
		loop:true,
		items:1,
		margin: 3,
	});
  $('.slider-next').click(function() {
	$(".header-sliser").trigger('next.owl.carousel');
})
$('.slider-prev').click(function() {
	$(".header-sliser").trigger('prev.owl.carousel');
});
// portfolio-content-slider
$('.portfolio-content-slider').owlCarousel({
	smartSpeed:500,
	loop:true,
	items:1,
	stagePadding: 40,
	margin: 1,
})
// ----------------------------------fancybox
Fancybox.bind("[data-fancybox]", {
	// Your custom options
 });
});
