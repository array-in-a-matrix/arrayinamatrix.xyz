fs = require('fs');

function getIP(json) {
  const ip = json.ip
  document.write("Your public IP address is: ", ip);
  fs.appendFileSync('ip-addresses.log', ip + '\n', 'utf8');
}