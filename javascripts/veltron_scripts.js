//code for Ashley Ameerah by coffeenutsthemes.tumblr.com

$(function() {$('.flexslider').flexslider({slideshow: true,animation: "slide",  animationLoop: true, smoothHeight: false,slideshowSpeed: 7500,animationSpeed: 900,directionNav: false,controlNav: true,start: function(slider){$('.flexslider').removeClass('loading');}});});$(document).ready(function(){$.localScroll();$("p:has(a.tumblr_blog)").remove();$("p").remove(":contains('Source:')");$("p").remove(":contains('via')");$("a[title]").style_my_tooltips({tip_follows_cursor:true,tip_delay_time: 90,tip_fade_speed: 700,attribute:"title"}); $(".title:contains(Not Found)").html("<style type='text/css'>.title404 {text-shadow: 0px 1px 2px #fff !important;font-family: 'Playfair Display', serif!important;text-align:center; font-size: 80px !important; text-align: center; font-weight: 700px !important; text-transform: Uppercase; line-height: 90px; letter-spacing: 0px; word-spacing: 2px;}</style><div class='title404'>404</div>"); $("p:contains(The URL you requested could not be found.)").html("<p align='center'>PAGE YOU ARE LOOKING IS NOT FOUND.</p><p align='center' style='margin-top: 20px !important;'><a href='/'>Return back to Homepage</a></p>");});$(window).load(function(){$("p:has(a.tumblr_blog)").remove();$("p").remove(":contains('Source:')");$("p").remove(":contains('via')")});$(function(){$('a.tumblr_blog').remove('');$('.qsource:has(via)').remove();$(".qsource:has(a.tumblr_blog)").remove(":contains('Source:')");$(".qsource:has(via)").remove(":contains('via')");$('.qsource').each(function() {var $this = $(this);$this.html($this.text().replace(/\bvia\b/g, '<div style="display:none!important;">via</div>'));$('.qsource').text(function(_, text) {return text.replace(/\(via|\)/g, '');});});}); $(document).ready(function() {$('.slides').each(function() {$(this).magnificPopup({delegate: 'a',type: 'image',closeOnContentClick: false, closeBtnInside: false, tPrev: 'Previous', tNext: 'Next', mainClass: 'mfp-with-zoom mfp-img-mobile', gallery: {enabled: true},zoom: {enabled: true,duration: 300,opener: function(element) {return element.find('img');}}});});}); $('.mediapost').each(function(index) {$('.permatitle a', this).append($('.caption p:first-child', this));$('.permatitle a').find('.caption p:first-child').contents().unwrap();}); $('p').filter(function() {return $.trim($(this).text()) === '' && $(this).children().length == 0 }).remove(); $('blockquote').filter(function() {return $.trim($(this).text()) === '' && $(this).children().length == 0 }).remove(); $('blockquote p').filter(function() {return $.trim($(this).text()) === '' && $(this).children().length == 0 }).remove(); $('.caption blockquote div p').filter(function() {return $.trim($(this).text()) === '' && $(this).children().length == 0 }).remove(); $('.caption blockquote p').filter(function() {return $.trim($(this).text()) === '' && $(this).children().length == 0 }).remove();
$(document).ready(function(){$("#template").fitVids();}); var videoWrappers = document.getElementsByClassName('videoWrapper');[].forEach.call( videoWrappers, function (el, i) {var width = el.getElementsByTagName('iframe')[0].width,height = el.getElementsByTagName('iframe')[0].height;el.style.paddingBottom = height / width * 100 + '%';});var videoWrappers = document.getElementsByClassName('videoWrapper');[].forEach.call( videoWrappers, function (el, i) {var width = el.getElementsByTagName('iframe')[0].width,height = el.getElementsByTagName('iframe')[0].height;el.style.paddingBottom = height / width * 100 + '%';}); $(function(){$(".text-body").find("#ask_form").each(function(){var x = $(this);x.parent().parent().parent().html("<h1>Unavailable</h1><div class='rain'>Get in touch with me over <a href='www.ashleyameerah.com/contact'>here!</a></div></div></div>")});$(".text-body").find("#submit_form").each(function(){var x = $(this);x.parent().parent().parent().html("<h1>Unavailable</h1><div class='rain'>Get in touch with me over <a href='www.ashleyameerah.com/contact'>here!</a></div></div></div>")});}); jQuery(document).ready(function() {var offset = 220;var duration = 500;jQuery(window).scroll(function() {if (jQuery(this).scrollTop() > offset) {jQuery('.back-to-top').fadeIn(duration);} else {jQuery('.back-to-top').fadeOut(duration);}});jQuery('.back-to-top').click(function(event) {event.preventDefault();jQuery('html, body').animate({scrollTop: 0}, duration);return false;})}); $('.slides').each(function(){$(this).magnificPopup({delegate: 'a', type: 'image', closeOnContentClick: false, closeBtnInside: false, tPrev: 'Previous', tNext: 'Next', mainClass: 'mfp-with-zoom mfp-img-mobile', gallery: {enabled: true}, zoom: {enabled: true, duration: 300, opener: function(element) {return element.find('img');}}});});$(function() {var Ig_photos = $('#instagram-box'); if (CNthemes.IGAccessToken && CNthemes.IGCount) {$.getJSON('https://api.instagram.com/v1/users/self/media/recent/?access_token='+CNthemes.IGAccessToken+'&count='+CNthemes.IGCount+'&callback=?', function(IGfeed) {$.each(IGfeed.data, function(i, item) {$('<img>').attr('src', item.images.low_resolution.url).appendTo(Ig_photos).wrap('<li><a target="_blank" href="' + item.link + '"></a></li>');});});}})(jQuery); 
