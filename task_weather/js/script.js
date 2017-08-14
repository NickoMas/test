"use strict"

angular.module("factory", [])
	.factory("sendHttp", ["$http", 
		function ($http) {
			return $http({
				method: "GET",
				url : "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=95fce1ea5c2190183b85f3e518de44cd"
			}).then(a => {
				console.log(a.data)
			})
	}])

angular.module("root", ["factory"])
	.controller("main-Ctrl", ["$scope", "sendHttp", 
		function ($scope, sendHttp) {
			$scope.send = sendHttp;
	}])