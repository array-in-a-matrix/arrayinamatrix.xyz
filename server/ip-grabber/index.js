const connect = require('connect');
const http = require('http');
const file = require('fs');
const requestIp = require('request-ip');
const redirect = require('connect-redirection')

var httpsOptions = {
    key: fs.readFileSync('/path/to/HTTPS/server-key.pem'),
    cert: fs.readFileSync('/path/to/HTTPS/server-crt.pem')
};

let redirectURL = 'http://arrayinamatrix.xyz'
let http_port = 3030
let https_port = 3031
console.log(`Redirect: ${redirectURL}`);
console.log(`Port: ${http_port}`)
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

http.createServer(app).listen(http_port);
https.createServer(httpsOptions, app).listen(https_port);