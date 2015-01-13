angular.module('iexcloudApp', ['ui.bootstrap','ngRoute'])
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
.controller('LabCtrl', function ($scope, $window) {
    var vm = this;
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
    });
