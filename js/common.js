require.config({

    baseurl:"ssssjs/lib",
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

