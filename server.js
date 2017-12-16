'use strict';

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let mimes = {
  '.html' : 'text/html',
  '.css' : 'text/css',
  '.js' : 'text/javascript',
  '.gif' : 'image/gif',
  '.jpg' : 'image/jpeg',
  '.png' : 'image/png'
};
function webserver(req, res) {
// if the requestd route is '/' then serve 'index.html'

  let baseURI = url.parse(req.url);
  let filepath =  __dirname +"/"+ (baseURI.pathname === '/' ? 'index.html' : baseURI.pathname);
  console.log("###FILEPATH : "+filepath);

// fs.readdir(__dirname, (err, files) => {
//   files.forEach(file => {
//     console.log(">>"+file);
//   });
// })

  // Check if the file is accessible or not
  fs.access(filepath, fs.F_OK | fs.R_OK, error => {
    if(!error) { // If found fine and accessible, read the file
      fs.readFile(filepath, (e, content) => {
        if(!e) { // If no errors while reading the file
          let contentType = mimes[path.extname(filepath)];
          // This slices css from anyfilename.css and attaches to 'text/css'
          res.writeHead(200, { 'Content-type' : contentType });
          res.end(content, 'utf-8');
        } else { // Serve 500 status code
          res.writeHead(500);
          res.end('Problem while reading the file.');
        }
      });
    } else {
      res.writeHead(404);
      res.end('Content Not Found');
    }
  }); //F_OK for checking is File available & R_OK for read permission.

  // Check if the file
}

http.createServer(webserver).listen(9000, ()=>{
  console.log("Web Server Started, access it using localhost:9000");
});
