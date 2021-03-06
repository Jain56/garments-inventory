(function(){
'use strict';
angular.module('core.routes').config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('home',{
	url:'/',
	templateUrl:'modules/core/views/home.client.view.html',
		controller:'finalController'
	})
	.state('details',{
	url:'/details/:categoryId',
	templateUrl:'modules/core/views/detail.client.view.html',
	controller:'detailController'
	})
	.state('thankyou',{
	url:'/thankyou',
	templateUrl:'modules/core/views/thankyou.client.view.html',
	controller:'thankyouController'
	})
	.state('productfeedback',{
	url:'/productfeedback',
	templateUrl:'modules/core/views/productfeedback.client.view.html'
	})
	.state('feedbackproductwise',{
	url:'/feedbackproductwise/:categoryId',
	templateUrl:'modules/core/views/feedbackproductwise.client.view.html',
	controller:'productfeedbackController'
	})
	.state('final',{
	url:'/submit',
	templateUrl:'modules/core/views/final.client.view.html',
	controller:'finalController'
	});
}]);
})();
