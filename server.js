var http = require('http');
var fs = require('fs');
var exec = require('child_process').exec;

var eopts = {
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 1e9,
  killSignal: 'SIGTERM'
};

var server = http.createServer( function (req, res) {
  console.log(Date(), " request comming");
  
  exec('echo "### '+ Date() +'" >> log.md;', eopts,
    function (err, stdout, stderr) {
      console.log("Execution was " + (err ? "failed" : "successful"));
    }
  );

  res.writeHead(200);
  res.end("Test response " + Date() + "\n");
}).listen(8090);
