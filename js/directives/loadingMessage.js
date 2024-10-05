angular.module('newsApp').directive('loadingMessage', function() {
    return {
        restrict: 'E',  
        scope: {
            visible: '='  
        },
        template: `
            <div class="text-center" ng-class="{'d-none': !visible}">
                <p>Cargando más noticias...</p>
            </div>
        `,
        link: function(scope, element) {
            scope.$watch('visible', function(isVisible) {
                element.toggleClass('d-none', !isVisible);  // Oculta el elemento si no está visible
            });
        }
    };
});