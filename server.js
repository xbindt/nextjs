//  OpenShift sample Node serverlication
const express = require('express'),
    morgan  = require('morgan'),
    server     = express(),
    next = require('next');
    
Object.assign=require('object-assign');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

server.engine('html', require('ejs').renderFile);
server.use(morgan('combined'))

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



server.get('/', function (req, res) {
  // try to initialize the db on every request if it's not already
  // initialized.
  
    res.render('index.html', { pageCountMessage : null});

});



// error handling
server.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad hserverened!');
});


server.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
