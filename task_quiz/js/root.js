angular.module("root", [])
	.controller("main", ["$scope", "$http", ($scope, $http) => {
		
		$scope.overall = 0;

		$scope.request = function () {
			// var r = $resource("http://127.0.0.1:8080/quiz.json");
			// r.get();
			// console.log(r)
			$http({
				method: "GET",
				url: "http://127.0.0.1:8080/quiz.json"
			}).then(a => {
				console.log($scope.overall)
				$scope.overall = a.data.questions.length;
				$scope.apply()
			})

			//$scope.overall = 
		}


	}])