/*
Template Name: Spourmo
Author: <a href="discord.io/Aladinstore">Aladinstore</a>
Author URI: discord.io/Aladinstore
Copyright: Aladinstore
Licence: Free to use under our free template licence terms
Licence URI: discord.io/Aladinstoretemplate-terms
File: Back to Top JS
*/

jQuery("#backtotop").click(function () {
    jQuery("body,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#backtotop").addClass("visible");
    } else {
        jQuery("#backtotop").removeClass("visible");
    }
});