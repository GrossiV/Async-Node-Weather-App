const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=5y4lyDIGoKrFX8ogTtoeElTAt87a6OFG&location=1301%20lombard%20street%20philadelphia',
    json: true
},(error, response, body) => {
    console.log(body);
});