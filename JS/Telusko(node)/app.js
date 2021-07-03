// create server is present in module http
var http = require('http')

http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type':'text/html'}) // Header (status, content type)
    res.write("Welcome Back Alien !!! ");
    res.end(); // to let server know this is end

}).listen(9000)


/* How when node js do not use multi threading, handle the multiple request?
- Node JS use the concept of libuv(special library build in c language which uses kernal which has mulitple threads, so you are not directly using multiple threads but behind the scene your kernal is) providing concept of following
 Non-Blocking I/O(input output) - The node js server will not block itself for a client. We dont use node.js for CPU intensive work.
 Asynchronous - The moment nodejs server get respone from database or server, it will execute a call back function 
*/

/*
NodeJS provides
1. NPM - Node Package Manager- provides packages and libraries.
(npmjs.com)
2. Non-Blocking I/O
*/