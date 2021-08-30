/*creating a server*/
var http=require('http');
var server=http.createServer(function(req,res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hey server');
});
server.listen(8080,'127.0.0.1');
console.log("listening");

/*reading files
var http=require('http');
var fs=require('fs');
var myReadStream=fs.createReadStream(__dirname+'/readme.txt','utf8');
myReadStream.on('data',function(chunk){ 
    console.log("new chunk");
    console.log(chunk);
})*/
/*
var http=require('http');
var fs=require('fs');
var server=http.createServer(function(req,res) {

    console.log('request was made:'+req.url);

    if(req.url==='/home' || req.url==='/') {

        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }

});
server.listen(8080,'127.0.0.1');
console.log("yahoo");


*/