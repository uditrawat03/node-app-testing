const request = require("request");
// const https = require("https");

const forecast = (lat, long, callback) => {
  if (!lat || !long) {
    callback("lat and long is incorrect, please check", undefined);
  } else {
    const url =
      "https://api.darksky.net/forecast/a0e79e7834d2c7bf680069f6bb36b85f/" +
      lat +
      "," +
      long;
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback(error, undefined);
      } else {
        const data = {
          temprature: response.body.currently.temperature,
          precipProbability: response.body.currently.precipProbability
        };

        callback(undefined, data);
      }
    });
  }
};

// const forecast = (lat, long, callback) => {
//   const url =
//     "https://api.darksky.net/forecast/a0e79e7834d2c7bf680069f6bb36b85f/" +
//     lat +
//     "," +
//     long;

//   const request = https.request(url, response => {
//     let data = "";
//     response.on("data", chunk => {
//       data = data + chunk.toString();
//     });

//     response.on("end", () => {
//       const body = JSON.parse(data);
//       console.log(body);
//     });
//   });

//   request.on("error", error => {
//     console.log("An error", error);
//   });

//   request.end();
// };

module.exports = forecast;
