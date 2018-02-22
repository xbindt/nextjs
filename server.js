//  OpenShift sample Node serverlication

const next = require('next')
const http = require('http');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const Router = require('node-simple-router');
var router = new Router();

const ns = require ('ns-api') ({
    username: 'xbindt@hotmail.com',
    password: 'gg3NJSUPGqdHZaKvmsmt5FVP8wvpF2JqEl-0rbWED8u0UE5ZcgTzdw'
  });
    

const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';



app.prepare()
.then(() => {
    

    router.get("/stations", function(req, res) {
        ns.stations(function( err, data ) {
            res.writeHead(200, {"content-type":"application/json"});
            data = JSON.stringify(data);
            res.end(data);
        });
    });

    router.get('/p/:id', (req, res) => {
        const actualPage = '/post';
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPage, queryParams)
    })

    router.get('/', (req, res) => {
        return handle(req, res)
    })

    
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

const server = http.createServer(router);

server.listen(port, ip);