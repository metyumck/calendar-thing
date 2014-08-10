/**
 * Created by mdmckenzie on 10/08/2014.
 */

angular.module('calendar-thing',['ngRoute','calendarThing.controllers','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/calendar.html', controller: 'CalendarCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);;



