
app.controller('landingController', [
	'$scope', 'apiService',
function(
	$scope, apiService
) {

	$scope.images = [];
	$scope.tags = {};
	$scope.cumulativeLikes = null;

	$scope.init = function init() {

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
