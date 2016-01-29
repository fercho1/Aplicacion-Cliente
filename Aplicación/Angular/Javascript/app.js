var app = angular.module('AplicacionPruebas', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    //$urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "Rutas/Home.html",
            controller: 'HomeController'
        });

});


