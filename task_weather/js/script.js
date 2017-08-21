"use strict"

const myApiKEY = "AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE"; // for google maps api
const url_ = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pt_BR&key=AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE";

angular.module("root", [])
	.controller("main_Ctrl", ["$scope", "$http",  
		function ($scope, $http) {
			
			$scope.text = "";
			$scope.city = null;
			$scope.temp = null;
			$scope.weather = null;

			$scope.optionArray = ["Minsk", "Moscow", "London", "Berlin", "Paris"];

			$scope.send = function(arg) {console.dir(arg.target)
				const cityName = arg.target.children[1].value;

				const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95fce1ea5c2190183b85f3e518de44cd`;

				return $http.get(url).then(item => {
					$scope.city = item.data.name;
					$scope.temp = `${~~(item.data.main.temp - 273.15)} °C`;
					$scope.weather = item.data.weather[0].main;
				});

			};

			$scope.save = function (arg) {
				console.log(arg)
				$scope.optionArray.push(arg)
			}
	}])









				//const trusted = $sce.trustAsResourceUrl(url);

				//console.log(trusted)

						// return $http({
				// 		method: "GET",
				// 		url : `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95fce1ea5c2190183b85f3e518de44cd`,
				// 		headers: {
				// 			"Access-Control-Allow-Origin": "*",
				// 			"Access-Control-Allow-Headers": "X-Requested-With",
				// 			"Access-Control-Allow-Credentials": "true"
				// 		}
				// 	}).then(a => {
				// 		console.log(a.data)
				// 	})	