require.config({
    paths: {
        jquery:"lib/jquery",    
        underscore : "lib/underscore",
        sub:"app/sub",
        sub1:"app/sub1"       
    },
    shim : {
        underscore : {
            exports : "_"
        }
    }
});

require(['jquery','underscore','sub',"sub1"], function($,_,sub,sub1) {
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

		var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
		alert('Underscore is loaded ->' + evens);
        alert(diego);
        alert(maria);
	});

}); 