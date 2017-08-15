"use strict"

const myApiKEY = "AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE"; // for google maps api

angular.module("factory", [])
	.factory("sendHttp", ["$http", 
		function ($http) {
			return function sendHttp (arg) {
				const cityName = arg.target.children[1].value;

				console.log();
				return $http({
						method: "GET",
						url : `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pt_BR&key=AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE`,
						headers: {
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Headers": "X-Requested-With",
							"Access-Control-Allow-Credentials": "true"
						}
					}).then(a => {
						console.log(a.data)
					})	
			}
	}])

angular.module("root", ["factory"])
	.controller("main-Ctrl", ["$scope", "sendHttp", 
		function ($scope, sendHttp) {
			$scope.text = "";
			$scope.send = sendHttp;
	}])