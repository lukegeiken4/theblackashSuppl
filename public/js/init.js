(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$('.tooltipped').tooltip({delay: 50});
    $('.modal-trigger').leanModal();
    $('select').material_select();
    $( ".request-reservation" ).click(function() {
	  var date = $('#date').val();
	  var time = $('#time').val();
	  var name = $('#name').val();
	  var phone = $('#phone').val();

	  if(date == "" || date == null || time == "" || time == null || name == "" || name == null || phone == "" || phone == null) {
	  	Materialize.toast('Reservation request was not filled out completely, complete it before sending it', 4000);
	  } else {
	  	var message = "Reservation Request for " + name + ". \nOn " + date + " @ " + time + ".\nRespond to " + phone;
	  	var json_data = {message: message};
	  	console.log(JSON.stringify(json_data));
	  	$.ajax({
		  type: "POST",
		  url: "https://pacific-depths-29271.herokuapp.com",
		  dataType: 'json',
		  data: json_data,
		  success: function(msg){
		  	if(msg.error) {
		  		Materialize.toast('Error sending message. You will need to call to setup reservation-', 4000);
		  	} else {
		  		Materialize.toast('Request was sent, look for text message for 402-214-8577 for response. ', 4000);
		  	}
	  		$('#reservation-modal').closeModal();
		  },
		  error: function(XMLHttpRequest, textStatus, errorThrown) {
		  		Materialize.toast('Error sending message. You will need to call to setup reservation', 4000);
	  			$('#reservation-modal').closeModal();
		  }
		});
	  }
	});
  }); 
})(jQuery); 