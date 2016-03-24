// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.router','ngCordova'])

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
      controller:'assignment9'
  })
})

 .controller('assignment9', function ($scope, $ionicModal, $location, $state, $http, $cordovaCamera, $ionicHistory) {
    
    $scope.text='Hello world!';

    placename = document.getElementById('Name').value;
        $scope.city1='Name Of The City Entered '+placename;
    var weather = { };
    
    $http.jsonp('http://api.openweathermap.org/data/2.5/weather?q='+placename+'&appid=68d31f0454905cbf6357da222b09baff&callback=JSON_CALLBACK').then(function(data) {
                       console.log(data);
        $scope.x=data;
        $scope.temp='Humididty is: '+data.data.main.humidity;
        $scope.desc='Pressure: '+data.data.main.pressure;
             
                                            })
    
    $http.get('http://maps.googleapis.com/maps/api/geocode/json?address='+placename).then(function(data2) {
                       console.log(data2);
        
        $scope.country='City With Country: '+data2.data.results[0].formatted_address;
       })
    $scope.details = function () {
      $location.path('/home');
     $state.go('home');  
    };
    
    $scope.photo=function(){
        var properties = {
      quality: 60,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 400,
      targetHeight: 400,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };
    
       $cordovaCamera.getPicture(properties).then(function(picturetaken) {
            $scope.picture= "data:image/jpeg;base64," + picturetaken;
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + picturetaken;
           ;
    }, function(err) {
      // error
    });
        //$scope.z3=z1;
    }
    
    
})