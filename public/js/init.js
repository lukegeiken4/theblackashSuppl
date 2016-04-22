(function($){
  $(function(){
	$( "td" ).css('text-align', 'center');
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.tooltipped').tooltip({delay: 50});
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $( "td" ).click(function() {
    	console.log($(this).css('background-color'));

    	if ($(this).css('background-color') === "rgba(0, 0, 0, 0)" || $(this).css('background-color') === "rgb(255, 255, 255)") 
    	{
   			$(this).css('backgroundColor','black');
	  		$(this).css('color','white');
		}
		else
		{
			$(this).css('backgroundColor','white');
	  		$(this).css('color','black');
		}
	});
  }); 
})(jQuery); 