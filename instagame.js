var request     = require('request');
var Promise     = require('bluebird');
var _           = require('lodash');


var clientId = process.env.TO_INSTAGRAM_CLIENTID; // user key to your Instagram app
var userId = 1573517626; // user id for IG user whos images we are fetching. this one is @talviolympicksofficial


function latestPictures(cb) {

    request('https://api.instagram.com/v1/users/' + userId + '/media/recent?count=50&client_id=' + clientId,
        function (error, response, body) {
            if (error) sendJson(error);

            var images = [];
            var likes = 0;

            _.each(JSON.parse(body).data, function(item) {
                // Add image url to the list
                images.push(item.images.standard_resolution.url);

                // Update Like count
                likes += item.likes.count;
            });

            cb(null, {images: images, likeCount: likes});

        }
    );
}



module.exports = {
    latestPictures: latestPictures
};
