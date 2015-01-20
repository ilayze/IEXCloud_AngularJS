
/// <reference path="../libs/angular/angular.min.js" />

angular.module('iexcloudApp', ['ui.bootstrap', 'ngRoute', 'ngResource'])
    .config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/lab', {
            templateUrl: 'Views/lab.html',
            controller: 'LabCtrl'
        }).
        when('/reports', {
            templateUrl: 'Views/reports.html',
            controller: 'ReportsCtrl'
        }).
        when('/notifications', {
            templateUrl: 'Views/notifications.html'
        }).

        otherwise({
            redirectTo: '/lab'
        });
  }])
.controller('LabCtrl', ['$scope', 'Groups', function ($scope, Groups, $window) {
    var vm = this;

    Groups.get(function (response) {
        vm.dataFromWebApi = response;
    });

    vm.selectedCounter = 0;
    vm.selectedItem = "";

    vm.notificationList = [];

    vm.clickleftmenu = function () {
        vm.selectedCounter = vm.selectedCounter + 1;
        vm.notificationList.push(vm.selectedItem);
    }

 
}])

.controller('ReportsCtrl', function () {
});


angular.module('iexcloudApp').factory('Groups', ['$resource',
    function ($resource) {
        var resource = $resource('http://localhost:5147/api/Groups', {}, { get: { Method: 'GET', isArray: true } });
        return resource;
    }
])

