app.factory('NewsService', function($http, ENV) {
    var baseUrl = ENV.apiUrl;

    return {
        getNewsByPage: function(page) {
            return $http.get(baseUrl + '/news?archive=false&page=' + page + '&limit=30');
        },
        getArchivedNewsByPage: function(page) {
            return $http.get(baseUrl + '/news/archived?page=' + page + '&limit=30');
        },
        archiveNews: function(newsId) {
            return $http.put(baseUrl + '/news/' + newsId + '/archive');
        },
        removeNews: function(newsId) {
            return $http.delete(baseUrl + '/news/' + newsId);
        }
    };
});