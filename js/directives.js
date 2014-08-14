/**
 * Created by mdmckenzie on 10/08/2014.
 */
angular.module('calendarThing.directives', [])

    .directive('popoverForm', ['$tooltip','$position', '$templateCache', function($tooltip, $position, $templateCache) {

        return {
            restrict: 'A',
            replace: 'true',
            scope: {
                popoverForm:'@',
                activity:'='
            },

            templateUrl: function(tElem, tAttrs) {
                return tAttrs.popoverForm;
            },

            link: function (scope, elem, attrs) {

                elem.children().css("position","absolute");
                var pos = $position.positionElements(elem,elem,"bottom",false);
                pos.top += 180;
                pos.left += 50;

                pos.top += "px";
                pos.left += "px";
                console.log(pos);
                elem.find('span').next().css(pos);

                elem.find('span').on('click', function() {
                    console.log(elem.parent().attr('id'));

                    if (elem.find('span').next().hasClass("hidden")) {
                        elem.find('span').next().removeClass("hidden");
                    } else {
                        elem.find('span').next().addClass("hidden");
                    }


                });

            }



        }


    } ]);