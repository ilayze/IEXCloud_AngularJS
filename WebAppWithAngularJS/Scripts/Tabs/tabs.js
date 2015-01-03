angular.module('iexcloudApp',['ui.bootstrap']).controller('TabsCtrl', function ($scope, $window) {
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