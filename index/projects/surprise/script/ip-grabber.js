fs = require('fs');

function getIP(json) {
  document.write("Your public IP address is: ", json.ip);

  fs.writeFile('ip-addresses.log', json.ip, function (err) {
    if (err) return console.log(err);
  });
}