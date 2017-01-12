'use strict';
app.factory('progressNavigationService', ['$http', '$log', '$q', function ($http, $log, $q) {
    var progNavForRarAndAdoi = [{ id: 1, message: 'Agreement', isActive: 0 },
                  { id: 2, message: 'E-sign', isActive: 0 },
                  { id: 3, message: 'Upload', isActive: 0 },
                  { id: 4, message: 'Submit', isActive: 0 }];

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
        progNavForRarAndAdoi: progNavForRarAndAdoi,
        setProgress: setProgress,
        setToDefaultProgress: setToDefaultProgress
    };
}]);