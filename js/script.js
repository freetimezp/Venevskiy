$(document).ready(function() {

/*Скрипт на гамбургер*/
	var sandwich = function() {

		$(document).on('click', '.catalog-nav__header', function() {
			
			var sandwichClick = $(this).find('.sandwich');
			var catalogOpen = $(this).parent();
			sandwichClick.toggleClass('sandwich--active');
			catalogOpen.toggleClass('catalog-nav--active');
		});

	};
	

/*Скрипт на Слик слайдер*/
	var popularCategoriesSlider = function() {

		if($(window).width() < 768) {
			$('.js-categories-prev').slick({
				slidesToShow: 2,
				slidesToScroll: 1
			});
		} 
	};


/*...Ниже слайдер в котором задействован счетчик страниц, но он до конца не считает!...*/
	var productPrevSlider = function() {
		
		var sliderCount = $('.product-slider__count');
		var prodSlider = $('.js-product-slider');

		prodSlider.on('init afterChange', function(event,slick,currentSlide, nextSlide) {
			var i = (currentSlide ? currentSlide : 0) + 1;
			sliderCount.text('Страница ' + i + ' из ' + slick.slideCount);
		});

		prodSlider.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			prevArrow: '.slider-nav--prev',
			nextArrow: '.slider-nav--next',
			infinite: false,
			responsive: [
				{
					breakpoint: 1239,
					settings: {
						slidesToShow: 3,
						arrows: false,
						dots: true 
					}
				}
			]
		});
	};


/*скрипт чтобы каталог нав боди расширялся на всю длину для правильного отображения бокс шедоу*/
	var catalogNavHover = function() {
		$('.catalog-nav__item').hover(
			function() {
			var catalogBody = $(this).closest('.catalog-nav__body'); 
			catalogBody.css('width', 825);
		},
			function() {
				var catalogBody = $(this).closest('.catalog-nav__body'); 
			 catalogBody.css('width', 'auto');
			}
		);
	};

	var locationChoose = function() {
		$(document).on('click', '.location-question__button', function() {
   var answer = $(this).data('location');
			$(this).closest('.location-question').hide();
			if (answer === 'no') {
				$(this).closest('.location-body').addClass('is-location-choose');
			}
		});

		$(document).on('click', '.location-choose__item, .location-choose__close', function() {
			$(this).closest('.location-body').removeClass('is-location-choose');
		});

		$(document).on('click', '.location-header', function() {
			$(this).siblings('.location-body').addClass('is-location-choose');
		}); 
	};


	var popupLink = function() {
		$('.js-popup-link').magnificPopup({
			showCloseBtn: false
		});

		$(document).on('click','.popup-close', function(){
			$.magnificPopup.close();
		});
	};



	var formValidate = function() {
		$('form').each(function() {
			$(this).on('submit', function() {
				$(this).validate({
					rules: {
							name: 'required',
							phone: 'required',
							password: 'required',
							"req-textarea": 'required'
					},
					messages: {
						 name: 'Введите корректное имя',
							phone: 'Введите корректный телефон',
							password: 'Введите корректный пароль',
							"req-textarea": 'Введите Ваш комментарий'
					},
					errorPlacement: function(error, element) {
						 element.attr("placeholder", error[0].outerText);
					}
				});

				if ($(this).valid()) {
					var wrap = $(this)[0].closest('.hide-on-success');
					if (wrap) {
						$(wrap).siblings('.show-on-success').show();
						$(wrap).hide();
					}
				}
				return false;

			});
		});
	};


	var reviewLine = function() {
		$(document).on('click','.review-line__number',function() {
			var left = $(this).parent().position().left;
			$(this).parent().siblings().removeClass('review-line__item--active');
			$(this).parent().addClass('review-line__item--active');
			$('.review-line').css('width',left - 1);
		});

		$(document).on('click','.review-line__item', function() {
			var leftX = $(this).position().left;
			$(this).siblings().removeClass('review-line__item--active');
			$(this).addClass('review-line__item--active');
			$('.review-line').css('width',leftX - 1);
		});
	};



	var contactsPopup = function() {
		$(document).on('click','.contacts-popup__toggle', function() {
			$(this).parent().toggleClass('contacts-popup--active');
		});

		$(document).on('click','.contacts-popup__close', function() {
			$(this).closest('.contacts-popup').removeClass('contacts-popup--active');
		});
	};



 
 sandwich();
	popularCategoriesSlider();
	productPrevSlider();
	catalogNavHover();
	locationChoose();
	popupLink();
	formValidate();
	reviewLine();
	contactsPopup();
/*......*/

});


var popularCategoriesSlider = function() {

	var sliderElement = $('.js-categories-prev');

	if($(window).width() < 768 && !(sliderElement.hasClass('slick-initialized'))) {
		sliderElement.slick({
			slidesToShow: 2,
				slidesToScroll: 1
		}) 
	} else if ($(window).width() > 768 && sliderElement.hasClass('slick-initialized')) {
		sliderElement.slick('unslick');
	}

};


$(window).on('resize', function() {
	popularCategoriesSlider();
});







