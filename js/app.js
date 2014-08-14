/**
 * Created by mdmckenzie on 10/08/2014.
 */

angular.module('calendar-thing',['ngRoute','ngDraggable','calendarThing.controllers','calendarThing.directives', 'calendarThing.services','ui.bootstrap','firebase'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/calendar.html', controller: 'CalendarCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);;



