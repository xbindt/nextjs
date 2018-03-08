//  OpenShift sample Node serverlication
const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const ns = require ('ns-api') ({
    username: 'xbindt@hotmail.com',
    password: 'gg3NJSUPGqdHZaKvmsmt5FVP8wvpF2JqEl-0rbWED8u0UE5ZcgTzdw'
  });
  

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.prepare()
.then(() => {
    const server = express()

    //stations
    server.get("/stations", function(request, response) {
        ns.stations(function( err, data ) {
            response.writeHead(200, {"content-type":"application/json"});
            data = JSON.stringify(data);
            response.end(data);
        });
    });

    //actueele vertrektijden
    server.get("/vertrektijden", function(request, response) {
        ns.vertrektijden(request.query.station || '', function( err, data ) {
            response.writeHead(200, {"content-type":"application/json"});
            data = JSON.stringify(data);
            response.end(data);
        });
    });

    server.get('/p/:id', (req, res) => {
        const actualPage = '/post'
        const queryParams = { id: req.params.id }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('/departuretimes/:station', (req, res) => {
        const actualPage = '/departuretimes'
        const queryParams = { station: req.params.station }
        app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, ip, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:8080', port, ip)
    })
    
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
