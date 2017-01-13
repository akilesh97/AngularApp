'use strict';
app.factory('appProgressNavigationService', ['$http', '$log', '$q', function ($http, $log, $q) {
    var progNav = [{ id: 1, message: 'Hotel Type', isActive: 0 },
                  { id: 2, message: 'Room Type', isActive: 0 },
                  { id: 3, message: 'Payment', isActive: 0 },
                  { id: 4, message: 'Receipt', isActive: 0 }];

    var setProgress = function (message, temp, isDeactived) {
        var hasCompleted = true;
        for (var i = 0; i < temp.length; i++) {
            if (hasCompleted) {
                temp[i].isActive = 1;
                hasCompleted = (temp[i].message == message) ? !hasCompleted : hasCompleted;
                temp[i].isActive = (!hasCompleted && isDeactived) ? 0 : 1;
            }
            else {
                temp[i].isActive = 0;
            }
        }
        return temp;
    };

    var setToDefaultProgress = function (arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].isActive = 0;
        };
        return arr;
    }

    return {
        progNav: progNav,
        setProgress: setProgress,
        setToDefaultProgress: setToDefaultProgress
    };
}]);