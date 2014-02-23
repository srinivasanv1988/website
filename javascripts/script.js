//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";


var viewportHeight = $(window).height();
var quarTop = viewportHeight/4;
var halfTop = viewportHeight-quarTop;



$(function ($) {
	$('#intro').css('min-height',viewportHeight);
	$('.promo-head').css('padding-top',quarTop);
	$('#wrapper, .caroufredsel_wrapper, .promo-item, .promo-item > .scroll-pane').css('height',halfTop);
	$('.promo-first').prev('li').css('opacity','0');

	$('.promo-item').mouseenter(function(){
		$(this).find('h1').css('color','#E3001B');
		$(this).find('h3').css('background','#E3001B').css('color','#FFFFFF');
	});
	$('.promo-item').mouseleave(function(){
		$('.promo-item').find('h1').css('color','#000');
		$('.promo-item').find('h3').css('background','#EEEEEE').css('color','#000000');
	});


});

function if_touch_supported() {
  return !!('ontouchstart' in window);
}


$(function()
{
	$('.scroll-pane').jScrollPane();
});

// Initialize prettyPhoto plugin
	$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
		theme:'light_square', 
		autoplay_slideshow: false, 
		overlay_gallery: false, 
		show_title: true
	});

//MASONRY PORTFOLIO INIT:
    $(function(){
      
      var $container = $('#container');

      $container.isotope({
        itemSelector : '.element',
        layoutMode : 'masonry' 
      });
      
      
      var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        var changeLayoutMode;
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options);
        } else {
            // creativewise, apply new options
            $container.isotope(options);
        }

        return false;
    });

      
    });


$(window).load(function() {
	
	
	
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: false
  });
	
	
   $('#slider').nivoSlider();
    
   

	//PORTFOLIO ITEM IMAGE HOVER                                                
	$("ul.folio li .item-overlay").hide();
	
	if( if_touch_supported() ){
		$("ul.folio li").click(function(){
			var items_prefix = $(this).prevAll("li").length;
			var opacity = $(this).find(".item-overlay").css("opacity");
			var display = $(this).find(".item-overlay").css("display");
			if ((opacity === 0)||(display === "none")) {$(this).find(".item-overlay").fadeTo(300, 0.9);} 
			else {$(this).find(".item-overlay").fadeTo(300, 0);}
			$(this).parent().find("li:lt(" + items_prefix + ") .item-overlay").fadeTo(300, 0);
			$(this).parent().find("li:gt(" + items_prefix + ") .item-overlay").fadeTo(300, 0);
		});	
	}
	else {
			$("ul.folio li").hover(function() {
					$(this).find(".item-overlay").fadeTo(250, 0.9);
				}, function() {
					$(this).find(".item-overlay").fadeTo(250, 0);		
			});
	}	
});

$(function ($) {
	$('.page').mouseenter(function(){
		var pageInd = $(this).attr('id');
		$('.desktop-nav a').removeClass('lighted');
		$('#'+pageInd+'-linker').addClass('lighted');
	});

	$('.desktop-nav a').click(function(){
		$('.desktop-nav a').removeClass('lighted');
		$(this).addClass('lighted');
	});


	//PORTFOLIO IMAGE HOVER
			$('.element').mouseenter(function(){
				$(this).find('img').css('opacity','0.4');
			});

			$('.element').mouseleave(function(){
				$('.element').find('img').css('opacity','1');
			});

			//PORTFOLIO FILTER ON CLICK
			$('.inner-link').find('a').click(function(){
				$('.inner-link').find('a').removeClass('.selected');
				$(this).addClass('.selected');
			});


	//PROJECT NAVIGATION
	$('.promo-item').mouseenter(function(){
		// var projectPage = $(this).attr('data-project');
		// window.open (projectPage,'_self',false)
		$(this).find('.project-link').fadeIn();
	});
	$('.promo-item').mouseleave(function(){
		// var projectPage = $(this).attr('data-project');
		// window.open (projectPage,'_self',false)
		$('.project-link').fadeOut();
	});

	//VIMEO VIDEO EMBEDD SCRIPTS
	var vimeoUrl = $('.vimeo_container').attr('data-vimeo-url');
	var vimeoW = $('.vimeo_container').attr('data-vimeo-width');
	var vimeoH = $('.vimeo_container').attr('data-vimeo-height');
	$('.vimeo_container').html('<iframe src="'+vimeoUrl+'" width="'+vimeoW+'" height="'+vimeoH+'" frameborder="0"></iframe>');

	//YOUTUBE VIDEO EMBEDD SCRIPTS
	var ytUrl = $('.youtube_container').attr('data-youtube-url');
	var ytW = $('.youtube_container').attr('data-youtube-width');
	var ytH = $('.youtube_container').attr('data-youtube-height');
	$(".youtube_container").html('<object width="'+ytW+'" height="'+ytH+'"><param name="movie" value="'+ytUrl+'"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="'+ytUrl+'" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="'+ytW+'" height="'+ytH+'"></embed></object>');
	
});





//PORTFOLIO ENGINE

$(function ($) {


	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).data('rel'));
	});

	$("a[rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'fast', /* fast/slow/normal */
		slideshow: false, /* false OR interval time in ms */
		autoplay_slideshow: false, /* true/false */
		opacity: 0.80, /* Value between 0 and 1 */
		show_title: true, /* true/false */
		allow_resize: true, /* Resize the photos bigger than viewport. true/false */
		default_width: 500,
		default_height: 344,
		counter_separator_label: '/', /* The separator for the folio counter 1 "of" 2 */
		theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
		hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
		wmode: 'opaque', /* Set the flash wmode attribute */
		autoplay: true, /* Automatically start videos: True/False */
		modal: false, /* If set to true, only the close button will close the window */
		overlay_folio: false, /* If set to true, a folio will overlay the fullscreen image on mouse over */
		keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
		deeplinking: false,
		social_tools: false
	});

$("ul.folio li:visible").filter(":nth-child(3n)");
	$('ul#filterOptions li').click(function() {								
		$('ul#filterOptions li.active').removeClass('active');
		$(this).addClass('active');
		
		var filterIndex = $(this).text().toLowerCase().replace(/ /g,'-');
				
		if(filterIndex === 'all') {
			$('ul.folio li, img.absolute').stop().animate({opacity: 1}, 1000);
			$("a[rel^='prettyPhoto']").each(function() 
				{
					$(this).addClass('active-items');
				});		
		} else {
			$('ul.folio li').each(function() {
				if(!$(this).hasClass(filterIndex)) {
					$(this).stop().animate({opacity: 0.1}, 1000);
				} else {
					$(this).stop().animate({opacity: 1}, 1000);
					$(this).find('a').addClass('active-items');
				}
			});
		}
		
		$("a[rel^='prettyPhoto']a[class~='active-items']").prettyPhoto({
			animation_speed: 'fast', /* fast/slow/normal */
			slideshow: false, /* false OR interval time in ms */
			autoplay_slideshow: false, /* true/false */
			opacity: 0.80, /* Value between 0 and 1 */
			show_title: true, /* true/false */
			allow_resize: true, /* Resize the photos bigger than viewport. true/false */
			default_width: 500,
			default_height: 344,
			counter_separator_label: '/', /* The separator for the folio counter 1 "of" 2 */
			theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
			hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
			wmode: 'opaque', /* Set the flash wmode attribute */
			autoplay: true, /* Automatically start videos: True/False */
			modal: false, /* If set to true, only the close button will close the window */
			overlay_folio: false, /* If set to true, a folio will overlay the fullscreen image on mouse over */
			keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
			deeplinking: false,
			social_tools: false 
		});
		$('*').removeClass('active-items');
		return false;	
	});
});






})();