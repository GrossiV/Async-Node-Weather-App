let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Vikram'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};


getUser(42, (user) => {
    console.log(user);
});

//http://www.mapquestapi.com/geocoding/v1/address?key=5y4lyDIGoKrFX8ogTtoeElTAt87a6OFG&location=1301%20lombard%20street%20philadelphia

//  The latitude is stored on the response body here: body.results[0].locations[0].latLng.lat
//  The longitude is stored on the response body here: body.results[0].locations[0].latLng.lng