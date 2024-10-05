var newsToggleButtonComponent = {
    bindings: {},  
    template: `
        <div class="mb-3">
            <a ng-if="$ctrl.isNewNews()" class="btn btn-secondary" ng-href="#!/archived">Ver Noticias Archivadas</a>
            <a ng-if="$ctrl.isArchivedNews()" class="btn btn-secondary" ng-href="#!/new">Ver Nuevas Noticias</a>
        </div>
    `,
    controller: class {
        constructor($location) {
            this.$location = $location;
        }

        // Verifica si estamos en la vista de nuevas noticias
        isNewNews() {
            return this.$location.path() === '/new';
        }

        // Verifica si estamos en la vista de noticias archivadas
        isArchivedNews() {
            return this.$location.path() === '/archived';
        }
    }
};

// Registra el componente en el módulo
angular.module('newsApp').component('newsToggleButton', newsToggleButtonComponent);
