/**
 * Created by mdmckenzie on 10/08/2014.
 */

angular.module('calendarThing.controllers', [])

    .controller('CalendarCtrl', ['$scope', function($scope) {

        $scope.todaysDate = new Date();

        $scope.previousSunday = new Date();
        $scope.previousSunday.setDate($scope.todaysDate.getDate() - $scope.todaysDate.getDay());

        $scope.nextSaturday = new Date();
        $scope.nextSaturday.setDate($scope.previousSunday.getDate() + 6);



        //daynum refers to the number of days
        // after sunday that the day occurs. e.g. Monday would be 1
        $scope.dayOfTheWeekDate = function (daynum) {
            date = new Date();
            date.setDate($scope.previousSunday.getDate() + daynum);
            return date;
        }

        //helper function to create the today's day class.
        $scope.highlightTodayClass = function (daynum) {

            if ($scope.todaysDate.getDate() == $scope.dayOfTheWeekDate(daynum).getDate()) {

                return "today";
            } else {
                return "not-today";
            }

        }

    }]).controller('MainCtrl', ['$scope','firebaseCRUD','$element','$compile', '$http', '$templateCache', function($scope, firebaseCRUD, $element, $compile, $http, $templateCache) {


        $scope.$on("$pageLoaded", function () {
            $scope.mondayActivities = firebaseCRUD.giveToMePlsActivities($element.find('#monday').attr('data-date'));
            $scope.sundayActivities = firebaseCRUD.giveToMePlsActivities($element.find('#sunday').attr('data-date'));

        });

        $scope.dropDate = "";

        $scope.onDragComplete = function (data, event) {

            console.log(data);


        }

        $scope.onDropComplete = function (data, date) {
            $scope.dropDate = date;
            $scope.droppedObjects = firebaseCRUD.giveToMePlsActivities($scope.dropDate);
            $scope.droppedObjects.$add(angular.copy(data));
            data.activityName = "";
            data.details = "";
            data.time = "";
        }

        $scope.removeActivity = function (id, day) {

            if (day == 'monday') {
                var itemToRemove = $scope.mondayActivities.$getRecord(id);
                $scope.mondayActivities.$remove(itemToRemove);
            } else if (day == 'sunday') {
                var itemToRemove = $scope.sundayActivities.$getRecord(id);
                $scope.sundayActivities.$remove(itemToRemove);
            }

        }
    }]);