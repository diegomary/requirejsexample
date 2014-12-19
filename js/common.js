require.config({

    baseurl:"js/lib",
    paths: {
        jquery:"lib/jquery",    
        underscore : "lib/underscore",
        bootstrap: "lib/bootstrap",
        sub:"app/sub",
        sub1:"app/sub1"       
    },
    shim : {
        underscore : {
            exports : "_"
        },
        bootstrap : { deps :['jquery'] }
    }




});

