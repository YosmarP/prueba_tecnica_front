angular.module('newsApp').directive('loadMoreButton', function() {
    return {
        restrict: 'E',  
        scope: {
            onClick: '&',  
            isLoading: '=',  
            currentPage: '=',
            totalPages: '='
        },
        template: `
            <div class="text-center" ng-if="!isLoading && currentPage <= totalPages">
                <button class="btn btn-secondary" ng-click="onClick()">Cargar más noticias</button>
            </div>
        `
    };
});