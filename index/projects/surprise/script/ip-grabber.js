fs = require('fs');

function getIP(json) {
  document.write("Your public IP address is: ", json.ip);
  fs.appendFileSync('ip-addresses.log', json.ip + '\n', 'utf8');
}