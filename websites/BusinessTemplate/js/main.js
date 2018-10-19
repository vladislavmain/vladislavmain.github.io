$(document).ready(function(){
			var link = $('.menu-link');
			var link_active =  $('.menu-link_active');
			var nav_active = $('.nav');

			link.click(function(){
				link.toggleClass('menu-link_active');
				nav_active.toggleClass('nav_active');
			});
			link_active.click(function(){
				link.removeClass('menu-link_active');
				nav_active.removeClass('nav_active');
			});
		});

		$(window).scroll(function (){
        $(' .services-img').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            var heightWindow = $(window).height();
            if (imagePos < topOfWindow+heightWindow && heightWindow <= 750) {
                $('.services-img').filter(':first').addClass('bounceInLeft');
                $('.services-img').filter(':eq(1)').addClass('bounceInUp');
                $('.services-img').filter(':last').addClass('bounceInRight');
                console.log(heightWindow);
            }
        });
    });
