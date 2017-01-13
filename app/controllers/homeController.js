app.controller('homeController', ['$scope', 'appProgressNavigationService', function ($scope, appProgressNavigationService) {
    $scope.navigate = [];
    $scope.progNav = appProgressNavigationService.setToDefaultProgress(appProgressNavigationService.progNav);
    $scope.updateNavBar = function (val, isDeactived) {
        $scope.progNav = progressNavigationService.setProgress(val, progressNavigationService.progNav, isDeactived);
    }
}]);