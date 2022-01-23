const connect = require('connect');
const http = require('http');
const file = require('fs');
const requestIp = require('request-ip');
const redirect = require('connect-redirection')

let redirectURL = 'http://arrayinamatrix.xyz'
let port = 3030
console.log(`Redirect: ${redirectURL}`);
console.log(`Port: ${port}`)
console.log("########## IP LOGGER STARTED ##########");
const app = connect()
    .use(requestIp.mw())
    .use(redirect())
    .use(function (req, res) {
        res.redirect(redirectURL)
        const ip = req.clientIp;
        console.log(ip);
        file.appendFile("ip-addresses.log", ip + '\n', (e) => {
            if (e) {
                console.log(e);
            };
        });

    });

http.createServer(app).listen(port);