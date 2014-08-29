$(function () {

	/* Scrolling top menu */
	$(document).on('scroll', function(e){
		if($(document).scrollTop() > 80){
			$('#header').addClass('header-mini')
		} else {
			$('#header').removeClass('header-mini')
		};
	});
















/*
var $window     = $(window);
var header      = $('#header');
var headerLogo  = $('.header-logo');
var headerTitre = $('.header-titre');
var headerLogin = $('.header-login');
var block       = $('.container-block-elem');
var blockB      = $('.container-block-elem .btn');
var side        = $('#aside');


side.on('click', function() {
	$('.badge').velocity("fadeIn", {
	}, "linear");
})

blockB.on('mouseover', function() {
	blockB.velocity("fadeIn", {
		duration:100
	}, "linear");
})

 $window.scroll(function () {
	if ($window.scrollTop() == 0){
		console.log('Scroll en haut de page');
		header
			.velocity({
				translateY:"0px"
			})
			headerLogo
			.velocity({
				translateY:"0px"
			})
		headerTitre
			.velocity({
				translateY:"0px"
			})

		headerLogin
			.velocity({
				translateY:"26px"
			})

	}else{
		console.log('Scroll en milieu de page');
		
		header
			.velocity({
				translateY:"-26%"
			})
			headerLogo
			.velocity({
				translateY:"52px"
			})
		headerTitre
			.velocity({
				translateY:"80px"
			})

		headerLogin
			.velocity({
				translateY:"180px"
			})

	}

});*/



});