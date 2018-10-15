const request = require('request');

request({
    url: 'http://www.mapquestapi.com/geocoding/v1/address?key=5y4lyDIGoKrFX8ogTtoeElTAt87a6OFG&location=1301%20lombard%20street%20philadelphia',
    json: true
},(error, response, body) => {
    console.log(`Address: ${body.results[0].providedLocation.location}`)
    console.log(`lat: ${body.results[0].locations[0].latLng.lat}`)
    console.log(`lng: ${body.results[0].locations[0].latLng.lng}`)
});



//http://www.mapquestapi.com/geocoding/v1/address?key=5y4lyDIGoKrFX8ogTtoeElTAt87a6OFG&location=1301%20lombard%20street%20philadelphia

//  The latitude is stored on the response body here: body.results[0].locations[0].latLng.lat
//  The longitude is stored on the response body here: body.results[0].locations[0].latLng.lng