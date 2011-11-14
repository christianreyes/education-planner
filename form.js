$(function(){
	$('#add_purchase').click(function(){
		var newRow = $('<tr>');
		
		newRow.append($('<td>Fun Stuff</td>'));
		newRow.append($('<td>$100.00</td>'));
		newRow.append($('<td><button class="btn">Details</button></td>'));
		newRow.append($('<td><button class="btn">Edit</button></td>'));
		
		var deleteButton = $('<td><button class="btn delete">Delete</button></td>');
		deleteButton.click(function(){ 
			deleteButton.closest('tr').fadeOut();
			return false;
		});
		deleteButton.hover(
				function(){
					deleteButton.toggleClass('danger');
				},
				function(){
					deleteButton.toggleClass('danger');
				});
				
		newRow.append(deleteButton);

		newRow.insertAfter($('#purchases tr').last());
		
		return false;
		
		//$('html, body').animate({scrollTop: $(document).height()}, 2500);
	});
	
	$('.btn.delete').click(function(){ 
		$(this).closest('tr').fadeOut();
		return false;
	 });
	
	$('.btn.delete').hover(
			function(){
				$(this).toggleClass('danger');
			},
			function(){
				$(this).toggleClass('danger');
			});
});