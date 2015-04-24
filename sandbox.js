var main = function(){

	$('.btn').click(function(){

		var name = $('.name-box').val();
		var post = $('.status-box').val();

		$('<li>').text(post).prependTo('.posts').addClass('post');
		$('.status-box').val('');

		$('<li>').text(name).prependTo('.posts').addClass('name');
		$('.name-box').val('');

		$('.counter').text('140');
		$('.btn').addClass('disabled');
	});

	$('.status-box').keyup(function(){
		var postLength = $(this).val().length;
		var charactersLeft = 140 - postLength;
		$('.counter').text(charactersLeft);

		if (charactersLeft < 0) {
			$('.btn').addClass('disabled');
		}
		else if(charactersLeft == 140){
			$('.btn').addClass('disabled');
		}
		else{
			$('.btn').removeClass('disabled');
		}
	});

	$('.btn').addClass('disabled');
}

$(document).ready(main);