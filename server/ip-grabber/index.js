const connect = require('connect');
const http = require('http');
const file = require('fs');
const requestIp = require('request-ip');
const redirect = require('connect-redirection')

console.log("########## IP LOGGER STARTED ##########")
const app = connect()
    .use(requestIp.mw())
    .use(redirect())
    .use(function (req, res) {
        res.redirect('http://127.0.0.1:3000')
        const ip = req.clientIp;
        console.log(ip);
        file.appendFile("ip-addresses.log", ip + '\n', (e) => {
            if (e) {
                console.log(e);
            };
        });

    });

http.createServer(app).listen(3030);