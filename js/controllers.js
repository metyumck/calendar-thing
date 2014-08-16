/**
 * Created by mdmckenzie on 10/08/2014.
 */

angular.module('calendarThing.controllers', [])

    .controller('CalendarCtrl', ['$scope', 'firebaseTest', function($scope, firebaseTest) {

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

    }]).controller('MainCtrl', ['$scope','firebaseTest','$element','$compile', '$http', '$templateCache', function($scope, firebaseTest, $element, $compile, $http, $templateCache) {

        $scope.dropDate = "";
        $scope.mondayDate = ;
        $scope.mondayActivities = ;

        $http.get("partials/addEventTemplate.html").success(function (data) {

            $scope.compiledSection = $compile(data)($scope);


        });


        $scope.createCard = function () {

            $http.get("partials/addEventTemplate.html").success(function (data) {
                $scope.compiledSection = $compile(data)($scope);
            });

            $element.children('div').append($scope.compiledSection);

        }

        $scope.onDragComplete = function (data, event) {

            console.log(data);


        }

        $scope.onDropComplete = function (data, date) {
            $scope.dropDate = date;
            $scope.droppedObjects = firebaseTest.giveToMePlsActivities($scope.dropDate);
            $scope.droppedObjects.$add(angular.copy(data));

            console.log("Signal 1" + data.activity);
            console.log("Signal 2" + event)


        }

        $scope.removeActivity = function (id) {

            var itemToRemove = $scope.droppedObjects.$getRecord(id);
            $scope.droppedObjects.$remove(itemToRemove);
        }

    }]);