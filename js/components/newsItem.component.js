var newsItemComponent = {
    bindings: {
        newsItem: '=',   
        onAction: '&',   
        actionLabel: '@',  
        actionClass: '@'   
    },
    template: `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">{{ $ctrl.newsItem.title }}</h5>
                <p class="card-text">{{ $ctrl.newsItem.description }}</p>
                <p class="card-text">
                    <small class="text-muted">Autor: {{ $ctrl.newsItem.author }}</small>
                </p>
                <p class="card-text">
                    <small class="text-muted">Fecha: {{ $ctrl.newsItem.date | date:'medium' }}</small>
                </p>
                <button class="btn" ng-class="$ctrl.actionClass" ng-click="$ctrl.handleAction()">
                    {{ $ctrl.actionLabel }}
                </button>
            </div>
        </div>
    `,
    controller: class {
        // Método para manejar la acción sobre la noticia
        handleAction() {
            this.onAction({ newsId: this.newsItem._id });
        }
    }
};

// Registra el componente en el módulo
angular.module('newsApp').component('newsItem', newsItemComponent);
