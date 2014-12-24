
app.factory('apiService', [
	'$http', '$q',
function(
	$http, $q
) {

	var apiUrl = '/api/';

	var apiService = {};

	apiService.getInstagameFeed = function getInstagameFeed() {
		return $q(function(resolve, reject) {
			$http.get(apiUrl + 'instagameFeed')
			.then(
				function success(response) {
					resolve(response.data);
				},
				function error(error) {
					reject(error);
				}
			);
		});
	};


	return apiService;
}]);
