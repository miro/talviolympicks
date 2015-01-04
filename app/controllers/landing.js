
app.controller('landingController', [
	'$scope', 'apiService',
function(
	$scope, apiService
) {

	$scope.images = [];
	$scope.tags = {};
	$scope.cumulativeLikes = 0;

	$scope.init = function init() {

		// Init the counter (through global scope)
		setCounter('2015-01-23 15:00');


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
