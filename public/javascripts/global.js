
//Example Transition
function aboutButton(){
	$.get('/about', function(data) {
		//data is the html of the about.jade page and the jquery html() function takes
		//a string and renders it to the "Main"  -- <div id="Main"> </div>   
		$('#Main').html(data);  
    });
}