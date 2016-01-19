
app.controller('landingController', [
	'$scope', 'apiService',
function(
	$scope, apiService
) {

	$scope.images = [];
	$scope.tags = {};
	$scope.cumulativeLikes = 0;

	$scope.init = function init() {

		// Init the flipclockcounter (through global scope)
		var START_TIME = '2016-01-22 15:00';
		if (moment().isBefore(moment(START_TIME))) {
			// show the counter only if the start time is in the future
			// (the flipclock kind of explodes otherwise)
			setCounter(START_TIME);
		}


		// Fetch Instagram photos
		apiService.getInstagameFeed()
		.then(
			function success(data) {
				$scope.images = data.images;
				$scope.tags = data.tags;
				$scope.cumulativeLikes = data.cumulativeLikes;
			},
			function error(error) {
				console.log('Error while fetching Instagame data', error);
			}
		);
	};
}]);
