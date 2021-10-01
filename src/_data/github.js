// const axios = require('axios');

// // Make a request for a user with a given ID
// axios
//     .get('https://api.github.com/users/jensnti')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//         return response.data;
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     });

// npm i @11ty/eleventy-cache-assets
const Cache = require('@11ty/eleventy-cache-assets');

module.exports = async function () {
    try {
        let json = await Cache('https://api.github.com/users/jensnti', {
            duration: '1d', // 1 day
            type: 'json' // also supports "text" or "buffer"
        });
        return json;
    } catch (e) {
        console.log(e);
        return {};
    }
};