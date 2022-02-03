const connect = require('connect');
const http = require('http');
const file = require('fs');
const requestIp = require('request-ip');
const redirect = require('connect-redirection')

let redirectURL = 'https://arrayinamatrix.xyz'
if (process.argv[2] != undefined) {
    redirectURL = process.argv[2]
}

let httpPort = 3030
console.log(`Redirect: ${redirectURL}`);
console.log(`Port: ${httpPort}`)
console.log("########## IP LOGGER STARTED ##########");

const app = connect()
    .use(requestIp.mw())
    .use(redirect())
    .use(function (req, res) {
        res.redirect(redirectURL)
        const ip = req.clientIp;
        console.log(ip);
        file.appendFile("/matrix/nginx-proxy/data/matrix-domain/server/ip-grabber/ip-addresses.log", ip + '\n', (e) => {
            if (e) {
                console.log(e);
            };
        });
    });

http.createServer(app).listen(httpPort);