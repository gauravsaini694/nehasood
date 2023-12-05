// JavaScript Document

$(document).ready(function() {
    $('.drawermenu').drawermenu({
        speed: 300,
        position: 'left'
    });
})

function playVideo(e) {
    $('video').trigger('pause');
    $('.play_btn').fadeIn();
    $(e).fadeOut();
    $(e).next('video').trigger('play');
}

topMenu = $("#mainNav"),
    topMenuHeight = topMenu.outerHeight() + 1,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function() {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop - 200
    }, 850);
    e.preventDefault();
});


$('.brand-slider').owlCarousel({
    items: 5,
    loop: true,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 2,
        },
        480: {
            mergeFit: true,
            items: 3,
        },
        678: {
            mergeFit: true,
            items: 4,
        },
        1000: {
            mergeFit: false
        }
    }
});
$('.aids-slider').owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    dots: false,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
        },
        480: {
            mergeFit: true,
            items: 1,
        },
        678: {
            mergeFit: true,
            items: 3,
        },
        1000: {
            mergeFit: false
        }
    }
});

$('.brand-slider33').owlCarousel({
    items: 6,
    loop: true,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 3,
        },
        480: {
            mergeFit: true,
            items: 3,
        },
        678: {
            mergeFit: true,
            items: 4,
        },
        1000: {
            mergeFit: false
        }
    }
});
$('.speciality_slider').owlCarousel({
    items: 3,
    loop: false,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    dots: false,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
            margin: 0,
        },
        480: {
            mergeFit: true,
            items: 1,
        },
        678: {
            mergeFit: true,
            items: 2,
        },
        1000: {
            mergeFit: false
        }
    }
});

$('.article_slider').owlCarousel({
    items: 3,
    loop: false,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    dots: false,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
            margin: 0,
        },
        480: {
            mergeFit: true,
            items: 1,
        },
        678: {
            mergeFit: true,
            items: 2,
        },
        1000: {
            mergeFit: false
        }
    }
});

$('.testimonial_slider').owlCarousel({
    items: 3,
    loop: false,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    dots: false,
    nav: true,
    navText: ["<", ">"],
    autoplay: false,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
            margin: 0,
        },
        480: {
            mergeFit: true,
            items: 1,
        },
        678: {
            mergeFit: true,
            items: 2,
        },
        1000: {
            mergeFit: false
        }
    }
});

$('.condition_slider').owlCarousel({
    items: 5,
    loop: false,
    margin: 2,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    dots: false,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
            margin: 0,
        },
        480: {
            mergeFit: true,
            items: 3,
        },
        678: {
            mergeFit: true,
            items: 4,
        },
        1000: {
            mergeFit: false
        }
    }
});

$('.testimoniales_slider').owlCarousel({
    items: 2,
    loop: false,
    margin: 10,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    dots: false,
    nav: true,
    navText: ["<", ">"],
    autoplay: true,
    responsive: {
        320: {
            mergeFit: true,
            items: 1,
            margin: 0,
        },
        480: {
            mergeFit: true,
            items: 1,
        },
        678: {
            mergeFit: true,
            items: 2,
        },
        1000: {
            mergeFit: false
        }
    }
});


$('.main-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    merge: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    dots: true,
    nav: false,
    navText: ["<img src='/images/arrow_left.png' class='img-fluid'>", "<img src='/images/arrow_right.png' class='img-fluid'>"]
});
$('.analytics-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: {
        600: {
            items: 1,
            margin: 10,
        },
        0: {
            items: 1,
            mergeFit: false
        }
    }
});
$('.live_on_slider').owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: {
        600: {
            items: 2,
            margin: 10,
        },
        0: {
            items: 1,
            mergeFit: false
        }
    }
});
$('.reviews-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    merge: true,
    nav: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 700,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
            margin: 0,
        },
        540: {
            items: 1,
            margin: 0,
        },
        1000: {
            items: 1,
            nav: false,
            margin: 10,
            mergeFit: false
        }
    }
});


$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
        $("nav").addClass("header_sticky")
    } else {
        $("nav").removeClass("header_sticky")
    }
})

$("input[name=prob_faced]").on("change", function() {
    if ($("input[name=prob_faced]:checked").val() == 'others') {
        $("#other_problem").fadeIn();
    } else {
        $("#other_problem").fadeOut();
    }
})


//
//$(".top_nav li").on('click', 'a[href^="#"]:not(.primary_btn)', function (event) {
//	$(".top_nav li").removeClass("active");
//	$(this).parent("li").addClass("active")
//	//console.log(event.target.attributes.href);
//    event.preventDefault();
//    $('html, body').animate({
//        scrollTop: $($.attr(this, 'href')).offset().top - 80
//    }, 1000);
//	$("#navbar-collapse").collapse('hide');
//});