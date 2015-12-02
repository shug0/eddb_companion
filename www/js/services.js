angular.module('app.services', [])
.service('eddb', function($http, $q) {
    return {

        'getSystems': function() {
            var defer = $q.defer();
            $http.get('data/systems.json').success(function(resp){
                defer.resolve(resp);
            }).error( function(err) {
                defer.reject(err);
            });
            return defer.promise;
        }

    }});