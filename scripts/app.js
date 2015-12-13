'use strict';

/**
 * @ngdoc overview
 * @name bibliotecaMetodicaApp
 * @description
 * # bibliotecaMetodicaApp
 *
 * Main module of the application.
 */
angular
  .module('bibliotecaMetodicaApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      /*
      PROGRAME
      */
      .when('/programe-in-vigoare', {
        templateUrl: 'views/programe/in-vigoare.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/programe-propuse', {
        templateUrl: 'views/programe/propuse.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      /*
      PROIECTARE
      */
      .when('/proiectare-exemple', {
        templateUrl: 'views/proiectare/exemple.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/proiectare-planificari-anuale', {
        templateUrl: 'views/proiectare/planificari-anuale.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/proiectare-planificari-calendaristice', {
        templateUrl: 'views/proiectare/planificari-calendaristice.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/proiectare-planificari-unitati', {
        templateUrl: 'views/proiectare/planificari-unitati.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      /*
      METODICI
      */
      .when('/metodici-preprimar', {
        templateUrl: 'views/metodici/preprimar.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/metodici-primar', {
        templateUrl: 'views/metodici/primar.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/metodici-bibliografie', {
        templateUrl: 'views/metodici/bibliografie.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      /*
      PRACTICA
      */
      .when('/practica-organizare', {
        templateUrl: 'views/practica/organizare.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/practica-coordonator', {
        templateUrl: 'views/practica/coordonator.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/practica-metodist', {
        templateUrl: 'views/practica/metodist.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/practica-elev', {
        templateUrl: 'views/practica/elev.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/practica-exemple', {
        templateUrl: 'views/practica/exemple.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      .when('/practica-activitati', {
        templateUrl: 'views/practica/activitati.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      /*
      CONTACT
      */
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'viewCtrl',
        controllerAs: 'view'
      })
      /*
      DEFAULT
      */
      .otherwise({
        redirectTo: '/'
      });
  });
