/**
 * Created by mdmckenzie on 13/08/2014.
 */
// this factory returns a synchronized array of chat messages
angular.module("calendarThing.services", [])

  .factory("firebaseTest", ["$firebase", '$rootScope',
    function($firebase, $rootScope) {

        var firebaseMethods = {

            giveToMePlsActivity: function (entryDate) {

                var firebaseRef = new Firebase("https://calendar-thing.firebaseio.com/entry/" + entryDate);

                return $firebase(firebaseRef).$asObject();


            }

        }

        return firebaseMethods;

    }
  ]);