const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    address +
    ".json?access_token=pk.eyJ1IjoidWRpdHJhd2F0IiwiYSI6ImNrNDUzcnJneDA1MW0zb2p0c2RtNm10d2cifQ.DKsA5kSLNglUrvx0TUwp0A";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect with location API", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location", undefined);
    } else {
      const data = {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      };
      callback(undefined, data);
    }
  });
};

module.exports = geocode;
