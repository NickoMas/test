"use strict"

const myApiKEY = "AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE"; // for google maps api
const url_ = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pt_BR&key=AIzaSyCvU7DOgrnK1i4IkR9gFE9j7c4qyscb_FE";

const rootModule = angular.module("root", []);

//factory with operations
rootModule.factory("getWeatherService", ["$http", function ($http) {

	const getWeather = function (event) {

		const cityName = event.target.children[1].value;
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=95fce1ea5c2190183b85f3e518de44cd`;

		return $http.get(url).then(item => {
				this.info.city = item.data.name;
				this.info.temp = `${~~(item.data.main.temp - 273.15)} °C`;
				this.info.weather = item.data.weather[0].description;
				this.info.icon = item.data.weather[0].icon;
			});
	};

	const saveCity = function (city) {
		let cityArray = this.optionArray;
		return cityArray.find(item => item === city) ? null : cityArray.push(city);
	}

	return {getWeather, saveCity};		

}])

rootModule.service("mainService", function(getWeatherService){
	return getWeatherService
})

rootModule.controller("main_Ctrl", ["$scope", "$http", "mainService", 
		function ($scope, $http, mainService) {

			$scope.info = {
				text: "Minsk",
				city: null,
				temp: null,
				weather: null,
				icon:null
			}

			$scope.send = mainService.getWeather;
			$scope.save = mainService.saveCity;

			$scope.optionArray = ["Minsk", "Moscow", "London", "Berlin", "Paris"];

	}])

rootModule.directive("weather", function () {
	return {
		restrict: "E",
		template: `<section class="info">
						<p>Your city is: {{info.city}}</p>
						<p>Current temperature: {{info.temp}}</p>
						<p>Overall weather: {{info.weather}}</p>
						<img src="http://openweathermap.org/img/w/{{info.icon}}.png" alt="" />
					</section>`
	}
})
