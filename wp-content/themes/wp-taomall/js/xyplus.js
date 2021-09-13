/* erx@qq.com 2021/05/08 */

jQuery(document).ready(function ($) {
	$(".detail_dec img:not('.wptao-res')").each(function(){
		var path = $(this).attr("src");
        $(this).wrap('<a href="'+path+'" data-src="'+path+'" class="erx-lg-item"></a>');
	});
    $(".detail_dec").lightGallery({
        selector: '.erx-lg-item'
    });   

});