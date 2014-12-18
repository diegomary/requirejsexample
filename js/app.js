requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js/lib',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: '../app',
        app1: '../app1'
       
    }
,
 shim: {
        "underscore": {
            exports: "_"            
        }
    }



});

// Start the main app logic.
requirejs(['jquery','underscore','app/sub','app/sub1','app1/sub2','app1/sub3'],
function($,_,sub,sub1,sub2,sub3) {

			$( document ).ready(function() {
			$('#btn').click(function(){
			       myFunc();

		     });
		    $('#btn1').click(function()
		    {
		        myFunc1();
		    });
		    $('#btn2').click(function()
		    {
		        alert(diego.email);
		    });

 $('#btn3').click(function()
		    {
		        myFunc22();
		         alert(even);
		    });

  $('#btn4').click(function()
		    {
		        myFunc3();
		    });





		}); 
			
});
