const URL ="https://covid19.mathdro.id/api";

let app = angular.module("MyApp", []);

app.controller('MyCtrl', ($scope, $http) => {

 // This is controller

 $scope.title = "COVID-19 Tracker";

 $http.get(URL).then( (response) => {

 // success
 // console.log(response.data);

 $scope.all_data = response.data;

 }, (error) => {
 
 // error
 console.log(error);

 })

 $scope.get_country_data = () => {
  
  // console.log($scope.country);

  let country = $scope.country;
  if(country == "")
  {
  	$scope.country_data = undefined;
  	return;
  }
  
   $http.get(`${URL}/countries/${country}`).then( (response) => {


   $scope.country_data = response.data;

   }, (error) => {
 
   // error
   console.log(error);

 })


 }

})