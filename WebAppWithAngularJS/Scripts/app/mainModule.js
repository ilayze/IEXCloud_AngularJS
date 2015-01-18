
/// <reference path="../libs/angular/angular.min.js" />

angular.module('iexcloudApp', ['ui.bootstrap', 'ngRoute','ngResource'])
    .config(['$routeProvider',
  function($routeProvider) {
      $routeProvider.
        when('/lab', {
            templateUrl: 'Views/lab.html',
            controller: 'LabCtrl'
        }).
        when('/reports', {
            templateUrl: 'Views/reports.html',
            controller: 'ReportsCtrl'
        }).
        otherwise({
            redirectTo: '/lab'
        });
  }])
.controller('LabCtrl',['$scope','Groups', function ($scope, Groups, $window) {
    var vm = this;

    Groups.get(function(response)
    {
        vm.dataFromWebApi = response;
    });

    vm.leftMenu = [
        {
            groupName: 'Computers',
            items: [
                {name:"a"},{name:"b"}]
        },
        {
            groupName: 'IexServers',
            items: [
                { name: "iex1" }, { name: "iex2" }]
        }
    ]

    vm.selectedItem = "";

    vm.clickleftmenu = function () {
        alert(vm.selectedItem);
    }
}]);


angular.module('iexcloudApp').factory('Groups', ['$resource',
    function ($resource) {
        var resource = $resource('http://localhost:5147/api/Groups', {}, { get: { Method: 'GET',isArray:true } });
        return resource;
    }
])

