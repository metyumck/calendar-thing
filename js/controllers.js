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

        $scope.saveActivity = function() {



        }


        //TODO: move all Firebase connection things to their own service modules.
        $scope.oneRecord = firebaseTest.giveToMePlsActivity("13-08-2014");
        console.log($scope.oneRecord);




    }]).controller('MainCtrl', ['$scope','firebaseTest','$element', function($scope, firebaseTest, $element) {

        $scope.createCard = function () {

            console.log($element);

        }

    }]);