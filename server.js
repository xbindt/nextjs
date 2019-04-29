//  OpenShift sample Node serverlication
const express = require('express')
const next = require('next')
const path = require('path');
const fetch = require('node-fetch');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
/* const ns = require ('ns-api') ({
    username: 'xbindt@hotmail.com',
    password: 'gg3NJSUPGqdHZaKvmsmt5FVP8wvpF2JqEl-0rbWED8u0UE5ZcgTzdw'
  }); */

const nsaApi = {
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'gpdUysxVJ2e8ameC2hAWVs6TF3R5HfaOisFz2B70'
    },
    'baseUrl':'https://ns-api.nl/reisinfo/api/v2'
}


const port = parseInt(process.env.PORT, 10) || 3008

async function start() {
    try {
       await app.prepare()
        .then(() => {
            const server = express();
            server.use('/fonts', express.static(path.join(__dirname, 'fonts')));
            server.use('/assets', express.static(path.join(__dirname, 'assets')))

            //stations
            server.get("/stations", function(request, response) {
                fetch(`${nsaApi.baseUrl}/stations`, {
                    method: 'get',
                    headers: nsaApi.headers,
                })
                .then(res => res.json())
                .then(json => {
                    response.writeHead(200, {"content-type":"application/json"});
                    json = JSON.stringify(json);
                    response.end(json);
                });
            });

            //actueele vertrektijden
            //request.query.station || ''
            server.get("/departures", function(request, response) {
                fetch(`${nsaApi.baseUrl}/departures?station=${request.query.station}`, {
                    method: 'get',
                    headers: nsaApi.headers,
                })
                .then(res => res.json())
                .then(json => {
                    response.writeHead(200, {"content-type":"application/json"});
                    json = JSON.stringify(json);
                    response.end(json);
                });
            });

            server.get('/departuretimes/:station', (req, res) => {
                const actualPage = '/departuretimes'
                const queryParams = { station: req.params.station }
                app.render(req, res, actualPage, queryParams)
            })

            server.get('/p/:id', (req, res) => {
                const actualPage = '/post'
                const queryParams = { id: req.params.id }
                app.render(req, res, actualPage, queryParams)
            })

            server.get('*', (req, res) => {
                return handle(req, res)
            })

            server.listen(port, (err) => {
                if (err) throw err
                console.log('> Ready on http://localhost:3008', port)
            })
        })
        .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
        })
    }
    catch (err) {
        console.log(err)
    }
}
start();