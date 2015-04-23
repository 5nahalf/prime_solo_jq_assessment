var i = 0;

$(document).ready(function (){
	$("#btn1").on("click", function(){
	i++;
	$("#maker").append("<div>Line #" + i + "<button id='remove'>Remove</button><button id='change'>Change Color</button></div>");


	});
	$("#maker").on("click", "#remove", function(){
		$(this).parent().remove();
	});
	$("#maker").on("click", "#change", function(){
		$(this).parent().toggleClass("color");
	});

});