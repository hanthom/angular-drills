angular.module('parseApp').controller('parseCtrl', function($scope, parseService) {

	$scope.types = ['7/11s', 'restaurant', 'strip-clubs', 'zoos', 'bars', 'deli', 'barbers/salon', 'time-machines', 'prison'];

	$scope.addBiz = function() {
		parseService.postBiz($scope.biz).then(function(res) {
			console.log('Bizness posted', res);
			$scope.biz = '';
		}, function(err) {
			console.log('something that happened', err);
		})
	};

	$scope.getBizInfo = function() {
		parseService.getBiz().then(function(res) {
			console.log(res.data.results);
			$scope.biznesses = res.data.results;
		});
	}

	$scope.getBizInfo();

});