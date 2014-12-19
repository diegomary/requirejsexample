define(['jquery','bootstrap','underscore','sub',"sub1"], function($,bootstrap,_,sub,sub1) {
	$(document).ready(function() {
     $('#btn').click(function(){
     myFunc();
    });
    $('#btn1').click(function()
    {
        myFunc1();
    });
    $('#btn2').click(function()
    {
        alert(diego);
    });

$('#btn2').addClass("btn btn-danger");
		var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
		alert('Underscore is loaded ->' + evens);
        alert(diego);
        alert(maria);


$('#saveall').click(function(){
        console.log(1);
        $('#myModal').modal('hide');
    });

 $("#myModal").modal('show');


	});

}); 