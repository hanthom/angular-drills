angular.module('insultApp').controller('insultCtrl', function($scope, insultService) {

	$scope.getInsult = function() {
		$scope.insult = insultService.getInsult();
		return $scope.insult;
	}


});