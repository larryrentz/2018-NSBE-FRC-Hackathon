var url = require('url');
var fs = require('fs');

function renderHTML(path, response)
{
    fs.readFile('./results/index.html', null, function(error, data){
      if(error)
      {
          response.writeHead(404);
          response.write('File not found!');
      }
      else {
        response.write(data);
      }
      response.end();
    });
}

module.exports = {
  handleRequest : function(request, response) {
    response.writeHead(200, {'Context-Type': 'text/html'});

    var path = url.parse(request.url).pathname;
    switch (path) {
      case '/':
        renderHTML('./results/index.html', response);
        break;
      case '/page2':
        renderHTML('./results/page2.html', response);
      default:
        response.writeHead(404);
        response.write('Route not defined');
        response.end();

    }
  }
}
