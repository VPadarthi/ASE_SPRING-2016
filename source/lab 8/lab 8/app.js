// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('first', {
    url: '/',
    templateUrl: 'templates/first.html'
  })
  
  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html',
      controller:'getweather'
  })
})

 .controller('getweather', function ($scope, $ionicModal, $location, $state, $http) {
    
    

    city = document.getElementById('cityname').value; //source
    destination = document.getElementById('cityname1').value; //Destination
        $scope.city1='Name of the First city Entered: '+city; //source
        $scope.city2='Name of the Second city Entered: '+destination; 
    var weather = { };
    
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=68d31f0454905cbf6357da222b09baff&callback=JSON_CALLBACK').then(function(data) {
                       console.log(data);
       // $scope.x=data;
        $scope.temp='Humidity is: '+data.data.main.humidity;
        $scope.desc='Pressure is: '+data.data.main.pressure;
                    console.log("in first city");
                                       //         $scope.main=data.main;
        //console.log(main);
                                                //$scope.temp = data.main.temp;
                                            })
     $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q='+destination+'&appid=68d31f0454905cbf6357da222b09baff&callback=JSON_CALLBACK').then(function(data1) {
                       console.log(data1);
       // $scope.x=data1;
        $scope.temp1='Humidity is: '+data1.data.main.humidity;
        $scope.desc1='Pressure is: '+data1.data.main.pressure;
         console.log("In first city....");
                    //console.log(x);
                                       //         $scope.main=data.main;
        //console.log(main);
                                                //$scope.temp = data.main.temp;
                                            })
     
     
//    https://maps.googleapis.com/maps/api/geocode/xml?address='city',+CA&key=YOUR_API_KEY
   $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+city+'&key=AIzaSyDZkDgHOuDwh0H8-jQuehMxd1xY2JtVZ_Y').then(function(data2) {
         
        
      //   $scope.detailsofone='some vale: ' +data2.data.location.lat;
         $scope.lat1=data.data2;
       $scope.lon1=data.data2;
                //$scope.x=data2.data.location.lat;
console.log("in google maps");
        console.log(data2.data.location.lat.toString);
         
                       console.log($scope.detailsofone);
         
     })
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+destination+'&key=AIzaSyDZkDgHOuDwh0H8-jQuehMxd1xY2JtVZ_Y').then(function(data3) {
         
        
      //   $scope.detailsofone='some vale: ' +data2.data.location.lat;
        
                $scope.lat2=data3.data.location.lat;
         $scope.lon2=data2.data.location.lat;
        
         $scope.theta = $scope.lon1 - $scope.lon2;
	          $scope.dist = Math.sin(deg2rad($scope.lat1)) * Math.sin(deg2rad($scope.lat2)) + Math.cos(deg2rad($scope.lat1)) * Math.cos(deg2rad($scope.lat1)) * Math.cos(deg2rad($scope.theta));
	         $scope.dist = Math.acos($scope.dist);
	         $scope.dist = rad2deg($scope.dist);
	         $scope.dist = $scope.dist * 60 * 1.1515;
              $scope.disance='Distance between' +city' and 'destination' is : '+$scope.dist +'miles';
console.log("in google maps");
        console.log(data2.data.location.lat.toString);
         
                       console.log($scope.detailsofone);
         
     })
   
 /*   $http.jsonp('https://maps.googleapis.com/maps/api/geocode/json?address=kansas&key=AIzaSyDZkDgHOuDwh0H8-jQuehMxd1xY2JtVZ_Y&callback=JSON_CALLBACK').then(function(data1) {
                       console.log(data1);
       // $scope.x=data1;
        /*$scope.temp1='Humidity is: '+data1.data.main.humidity;
        $scope.desc1='Pressure is: '+data1.data.main.pressure;
         console.log("hhhhhhhhhffffffffffffffffaadddddddddddddddddafffffffffffffffffffffffffffffffffffffffff");
                    //console.log(x);
                                       //         $scope.main=data.main;
        //console.log(main);
                                                //$scope.temp = data.main.temp;
                                            })*/
    $scope.getdata = function () {
      $location.path('/home');
     $state.go('home');  
    };
    
    
})