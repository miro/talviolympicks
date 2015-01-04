var request     = require('request');
var Promise     = require('bluebird');
var _           = require('lodash');


var clientId = process.env.TO_INSTAGRAM_CLIENTID; // user key to your Instagram app
var userId = 1573517626; // user id for IG user whos images we are fetching. this one is @talviolympicksofficial

function latestPictures(cb) {

    request('https://api.instagram.com/v1/users/' + userId + '/media/recent?count=12&client_id=' + clientId,
        function (error, response, body) {
            if (error) sendJson(error);

            // Temp storage
            var images = [];
            var tags = {};
            var likes = 0;

            // Go through the answer
            _.each(JSON.parse(body).data, function(item) {
                // Add image data to the return list
                images.push({
                    link: item.link,
                    thumbnailUrl: item.images.thumbnail.url,
                    lowResImageUrl: item.images.low_resolution.url,
                    imageUrl: item.images.standard_resolution.url,
                    tags: item.tags,
                    likes: item.likes.count
                });

                // Update cumulative like count
                likes += item.likes.count;

                // Count tag counts
                _.each(item.tags, function(tag) {
                    if (tags[tag]) {
                        tags[tag] += 1;
                    }
                    else {
                        tags[tag] = 1;
                    }
                });
            });

            // Remove tags that appears only once
            for (var tag in tags) {
                if (tags[tag] <= 1) {
                    delete tags[tag];
                } 
            }

            // Return the result
            cb(null, {images: images, cumulativeLikes: likes, tags: tags});
        }
    );
}



module.exports = {
    latestPictures: latestPictures
};
