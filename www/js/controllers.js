angular.module('app.controllers', [])

.controller('AppCtrl', function($scope) {

})
.controller('SystemsCtrl', ['$scope', '$rootScope', 'eddb', function($scope, $rootScope, eddb) {

    $scope.systems = {};

    $scope.loadSystem = function () {

        eddb.getSystems().then(function (response) {

            if (response) {

                console.log(response.length);

                $scope.systems = response;

            }
            else {
                console.log('Error');
            }

        });

    }

}]);


 