var mainapp = angular.module('mainapp',[
  'ngRoute',
  'appCtrl'
]);

mainapp.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  /*
  PROGRAME - IN - VIGOARE
  */

  when('/programe-in-vigoare', {
    templateUrl: 'views/programe/in-vigoare.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-romana', {
    templateUrl: 'views/programe/vigoare/romana.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-matematica', {
    templateUrl: 'views/programe/vigoare/matematica.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-stiinte', {
    templateUrl: 'views/programe/vigoare/stiinte.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-abilitati', {
    templateUrl: 'views/programe/vigoare/abilitati.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-muzica', {
    templateUrl: 'views/programe/vigoare/muzica.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-civica', {
    templateUrl: 'views/programe/vigoare/civica.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-desen', {
    templateUrl: 'views/programe/vigoare/desen.html',
    controller: 'navCtrl'
  }).
  when('/programe-in-vigoare-sport', {
    templateUrl: 'views/programe/vigoare/sport.html',
    controller: 'navCtrl'
  }).

  /*
  PROGRAME - PROPUNERI
  */
  when('/programe-propuneri', {
    templateUrl: 'views/programe/propuneri.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-romana', {
    templateUrl: 'views/programe/propuneri/romana.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-matematica', {
    templateUrl: 'views/programe/propuneri/matematica.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-stiinte', {
    templateUrl: 'views/programe/propuneri/stiinte.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-abilitati', {
    templateUrl: 'views/programe/propuneri/abilitati.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-muzica', {
    templateUrl: 'views/programe/propuneri/muzica.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-civica', {
    templateUrl: 'views/programe/propuneri/civica.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-desen', {
    templateUrl: 'views/programe/propuneri/desen.html',
    controller: 'navCtrl'
  }).
  when('/programe-propuneri-sport', {
    templateUrl: 'views/programe/propuneri/sport.html',
    controller: 'navCtrl'
  }).

  /*
  PROIECTARE - EXEMPLE
  */
  when('/proiectare-exemple', {
    templateUrl: 'views/proiectare/exemple.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-romana', {
    templateUrl: 'views/proiectare/exemple/romana.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-matematica', {
    templateUrl: 'views/proiectare/exemple/matematica.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-stiinte', {
    templateUrl: 'views/proiectare/exemple/stiinte.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-abilitati', {
    templateUrl: 'views/proiectare/exemple/abilitati.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-muzica', {
    templateUrl: 'views/proiectare/exemple/muzica.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-civica', {
    templateUrl: 'views/proiectare/exemple/civica.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-desen', {
    templateUrl: 'views/proiectare/exemple/desen.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-sport', {
    templateUrl: 'views/proiectare/exemple/sport.html',
    controller: 'navCtrl'
  }).

  /*
  PROIECTARE - PLANIFICARI
  */

  when('/proiectare-anuale', {
    templateUrl: 'views/proiectare/anuale.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-calendaristice', {
    templateUrl: 'views/proiectare/calendaristice.html',
    controller: 'navCtrl'
  }).
  when('/proiectare-unitati', {
    templateUrl: 'views/proiectare/unitati.html',
    controller: 'navCtrl'
  }).

  /*
  METODICI - PREPRIMAR
  */

  when('/metodici-preprimar', {
    templateUrl: 'views/metodici/preprimar.html',
    controller: 'navCtrl'
  }).

  /*
  METODICI - PRIMAR
  */

  when('/metodici-primar', {
    templateUrl: 'views/metodici/primar.html',
    controller: 'navCtrl'
  }).

  /*
  METODICI - BIBLIOGRAFIE
  */

  when('/metodici-bibliografie', {
    templateUrl: 'views/metodici/bibliografie.html',
    controller: 'navCtrl'
  }).

  /*
  PRACTICA PEDAGOGICA
  */

  when('/practica-activitati', {
    templateUrl: 'views/practica/activitati.html',
    controller: 'navCtrl'
  }).
  when('/practica-coordonator', {
    templateUrl: 'views/practica/coordonator.html',
    controller: 'navCtrl'
  }).
  when('/practica-elev', {
    templateUrl: 'views/practica/elev.html',
    controller: 'navCtrl'
  }).
  when('/practica-exemple', {
    templateUrl: 'views/practica/exemple.html',
    controller: 'navCtrl'
  }).
  when('/practica-metodist', {
    templateUrl: 'views/practica/metodist.html',
    controller: 'navCtrl'
  }).
  when('/practica-organizare', {
    templateUrl: 'views/practica/organizare.html',
    controller: 'navCtrl'
  }).

  /*
  CONTACT
  */

  when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'viewCtrl'
  }).

  /*
  DEFAULT
  */
  otherwise('/')

}
]);
