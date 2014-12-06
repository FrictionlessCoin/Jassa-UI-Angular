angular.module('ui.jassa.rex')

/**
 * Directive to attach a rex lookup function to the scope
 *
 * Different lookup functions can be used at different HTML regions under a rex-context.
 *
 * If present, rex-subject will use the provided function to perform data lookups
 * on its IRIs and store the content in the scope
 *
 */
.directive('rexBaseGraph', ['$parse', function($parse) {
    return {
        priority: basePriority + 28,
        restrict: 'A',
        scope: true,
        require: 'rexContext',
        controller: function() {},
        //require: ['^?rexSubject', '^?rexObject']
//        controller: ['$scope', function($scope) {
//        }],
        compile: function(ele, attrs) {
            return {
                pre: function(scope, ele, attrs, ctrls) {
                    syncAttr($parse, scope, attrs, 'rexBaseGraph');

                    scope.$watch(function() {
                        return scope.rexBaseGraph;
                    }, function() {
                        scope.rexContext.baseGraph = scope.rexBaseGraph;
                    });
                }
            };
        }
    };
}])

;