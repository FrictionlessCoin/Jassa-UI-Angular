angular.module('ui.jassa.rex')

/**
 * TODO: Actually we should just implement this as a convenience directive which replaces itself with
 * rex-termtype rex-value rex-lang and rex-datatype
 * This way we wouldn't have to make the book keeping more complex than it already is
 *
 * rexTerm synchronizes a model which is interpreted as an object in a talis RDF json and
 * thus provides the fields 'type', 'value', 'datatype' and 'lang'.
 *
 * <rdf-term-input ng-model="model" rex-term="model"></rdf-term-input>
 *
 * If rex-term appears on a directive using a model attribute   , it can be shortened as shown below:
 *
 * <rdf-term-input ng-model="model" rex-term></rdf-term-input>
 *
 *
 */
.directive('rexTerm', ['$parse', function($parse) {
    return {
        priority: 11,
        restrict: 'A',
        scope: true,
        require: ['^rexContext', '^rexObject'],
        controller: angular.noop,
        compile: function(ele, attrs) {
            throw new Error('rex-term is not implemented yet');
            //return createCompileComponent('rexValue', 'value', $parse);
        }
    };
}])

;
