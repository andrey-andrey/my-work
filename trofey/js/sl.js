
	$('.mein-slider').slick({
		arrows: false,
		infinite: true,
		dots: true,
		autoplay:true,
		autoplaySpeed: 2000
		
     
	});
	
	

	$('.banner-slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll:1,
		infinite: true,
		dots: false,
		autoplay:false,
		appendArrows: '.banner-slider__buttons',
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>'	
	});




   


