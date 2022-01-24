const request = require("request");
const name = process.argv.slice(2)[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
    if (error) {
        console.error('error:', error);
    } else {
        const data = JSON.parse(body);
        if (data.length === 0) {
            console.log("the requested breed is not found.");
        } else {
            console.log(data[0].description);
        }
    }
});