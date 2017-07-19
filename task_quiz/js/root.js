angular.module("root", [])
	.controller("main", ["$scope", "$http", ($scope, $http) => {
		
		$scope.overall = 0;	
		$scope.correct = 0;
		$scope.correctPercent = 0;

		$scope.questions = null;

		// color depends on percent of correct answers
		$scope.markColor = () => (
			{
				'background-color': `hsl(${($scope.correctPercent / 100) *120},100%,50%)`
			}
		);


		$scope.request = function () {

			$http({
				method: "GET",
				url: "http://127.0.0.1:8080/quiz.json"
			}).then(a => {
				$scope.correct = a.data.questions.filter(item => item.correct).length;

				$scope.questions = a.data.questions;

				$scope.overall = a.data.questions.length;

				$scope.correctPercent = Math.round(($scope.correct / $scope.overall) * 100);
				console.log($scope.markColor(), $scope.questions)
			})

		}


	}])