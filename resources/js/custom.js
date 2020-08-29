$(document).ready(function(){ 

//=======Banner Slick Slider
	$('.banner_slider').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
		speed:1500,
		arrows: true,
		nextArrow: '.banner_left_icon', 
  		prevArrow: '.banner_right_icon',
		autoplay: true,
		autoplaySpeed:1500,
		dots: true,
		cssEase:"linear"        
});
	

	
//===== VenoBox Video

$('.venobox').venobox(); 

		
	
//===== Our Team Section Slick Slider

	$('.team_slider').slick({
  		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
		speed:1500,
		arrows: true,
		nextArrow: '.team_left_icon', 
  		prevArrow: '.team_right_icon',
		autoplay: true,
		autoplaySpeed:1500,
		cssEase:"linear",
		
		responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
	
	
//===== Our Work Section VenoBox (Image)

$('.venobox').venobox(); 

	
//===== Client Feadback Section slick slider 
	
$('.feadback_content_row').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.feadback_row_bottom',
  speed:1500,
  autoplay: false,
  autoplaySpeed:1500,
  cssEase:"linear",
});
	
$('.feadback_row_bottom').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.feadback_content_row',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '0px',
  arrows: true,
  nextArrow: '.feadback_right_icon', 
  prevArrow: '.feadback_left_icon',
  cssEase:"linear",
  speed:1500,
  autoplay: false,
  autoplaySpeed:1500,
	
	responsive: [
    {
      breakpoint: 991.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }
    },
    {
      breakpoint: 767.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575.98,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});	
	
	
//===== Sticky Manu JS

$(window).scroll(function(){
	
	var scrolling = $(this).scrollTop();
	var sticky = $('.my_sticky_top');
	
	if(scrolling >= 200){
		sticky.addClass('sticky_nav_bg');
	}
	else{
		sticky.removeClass('sticky_nav_bg');
	}
});
	

	
// Active nav button
	
$('body').scrollspy({target: ".navbar", offset: 50});
	


// smooth scrolling/animation scroll js
	

$("#myNavbar a").on('click', function (event) {


	if (this.hash !== "") {

		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 1200, function () {


			window.location.hash = hash;
		});

	}

});

	
	
// =======  WOW js code	============

new WOW().init();	
	
	
	
// =======  Background Video / YTPlayer Video JS ============

jQuery("#bgndVideo").YTPlayer();
	
	

// ======= Moving Text/ Typad JS ============
	
$(".typed").typed({
		strings: ["Web Designer.", " Web Developer.",  "Full stack web Developer."],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1000,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 300,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});	
	
	
	

// ======= Particles JS ============	

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

	

	
// ======= Scroll to Top JS ============	
	
var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src="https://i1155.photobucket.com/albums/p559/scrolltotop/arrow60.png" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();	
	
	
	
	
	
// ======= Preloader JS ============





	
	
}); //End Of jQuery Default


 

 