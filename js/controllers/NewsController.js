app.controller('NewsController', function($scope, $window, NewsService, $location) {
    $scope.newNews = [];
    $scope.archivedNews = [];
    $scope.currentPage = 1;
    $scope.totalPages = 1;
    $scope.loading = false;

    // Cargar noticias según la ruta al inicializar
    $scope.loadNews = function() {
        if ($location.path() === '/new') {
            $scope.loadNewNews();
        } else if ($location.path() === '/archived') {
            $scope.loadArchivedNews();
        }
    };

    // Cargar noticias nuevas
    $scope.loadNewNews = function() {
        if ($scope.loading || $scope.currentPage > $scope.totalPages) return;
        $scope.loading = true;

        NewsService.getNewsByPage($scope.currentPage).then(function(response) {
            var data = response.data;
            $scope.newNews = $scope.newNews.concat(data.news);
            $scope.totalPages = data.totalPages;
            $scope.currentPage++;
            $scope.loading = false;
        }).catch(function() {
            $scope.loading = false;
        });
    };

    // Cargar noticias archivadas
    $scope.loadArchivedNews = function() {
        if ($scope.loading || $scope.currentPage > $scope.totalPages) return;
        $scope.loading = true;

        NewsService.getArchivedNewsByPage($scope.currentPage).then(function(response) {
            var data = response.data;
            $scope.archivedNews = $scope.archivedNews.concat(data.news);
            $scope.totalPages = data.totalPages;
            $scope.currentPage++;
            $scope.loading = false;
        }).catch(function() {
            $scope.loading = false;
        });
    };

    // Archivar noticia
    $scope.archiveNews = function(newsId) {
        NewsService.archiveNews(newsId).then(function() {
            // Reinicia valores de paginación y noticias nuevas
            $scope.newNews = [];
            $scope.currentPage = 1;
            $scope.totalPages = 1;
            $scope.loadNewNews();  
        });
    };

    // Eliminar noticia archivada
    $scope.removeArchivedNews = function(newsId) {
        NewsService.removeNews(newsId).then(function() {
            // Reinicia valores de paginación y noticias archivadas
            $scope.archivedNews = [];
            $scope.currentPage = 1;
            $scope.totalPages = 1;
            $scope.loadArchivedNews();  
        });
    };

    // Inicializar cargando noticias según la ruta
    $scope.loadNews(); 
});