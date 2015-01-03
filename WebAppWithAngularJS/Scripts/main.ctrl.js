/// <reference path="angular.min.js" />

angular.module("ilayApp").controller("ilayMainController", function () {
	var vm = this;
	vm.Title = "My angularJS title (in controller)";
	vm.searchInput = '';
	vm.shows = [
		{
			title: 'Game of Thrones',
			year: '2011',
			favorite: true
		},
		{
			title: 'Ilay movie',
			year: '2015',
			favorite: false
		},
		{
			title: 'Some other movie',
			year: '1990',
			favorite: false
		},
		{
			title: 'My Star',
			year: '1990',
			favorite: true
		}
	];

	vm.orders = [
		{
			id: 1,
			title: 'Year Ascending',
			key: 'year',
			reverse: false
		},
		{
			id: 2,
			title: 'Year Descending',
			key: 'year',
			reverse: true
		},
		{
			id: 3,
			title: 'Title Ascending',
			key: 'title',
			reverse: false
		},
		{
			id: 4,
			title: 'Title Descending',
			key: 'title',
			reverse: true
		},
		{
			id: 5,
			title: 'Stars First',
			key: 'favorite',
			reverse: true
		}
	];
	vm.order = vm.orders[0];

	vm.new = {};
	vm.addShow = function () {
		vm.shows.push(vm.new);
		vm.new = {};
	};
});