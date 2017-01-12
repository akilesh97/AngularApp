'use strict';
app.factory('validationService', ['$http', '$log', '$q', '$timeout', function ($http, $log, $q, $timeout) {
    var validationMessage = [];
    function requiredV(val) {
        if (typeof val === "undefined"
            || (typeof val === "number" && val.toString().length == 0)
            || val.length == 0)
            return true;
        return false;
    }
    var HasValidationsDoneWithNoErrors = function (form) {
        this.validationMessage = highlightErrorMessage(form, this.validationMessage);
        return (this.validationMessage.length == 0) ? true : false;
    }
    var focus = function (index) {
        var id = '#' + this.validationMessage[index].id;
        $timeout(function () {
            angular.element(id).focus();
        }, 0, false);
        $timeout(function () { scrollTop(document.body.offsetHeight - 100) }, 100);
    };

    var GetElementDetails = function ($event) {
        var Element = document.getElementById($event.target.id);
        if (!requiredV(getElementValue(Element))) {
            removeClass(Element, 'highlightBorder');
            var index = -1;
            for (var i = 0; i < this.validationMessage.length; i++) {
                if (this.validationMessage[i].id == $event.target.id) {
                    index = i;
                    break;
                }
            }
            if (index > -1) {
                this.validationMessage.splice(index, 1);
            }
        }
    };

    return {
        validationMessage: validationMessage,
        HasValidationsDoneWithNoErrors: HasValidationsDoneWithNoErrors,
        focus: focus,
        GetElementDetails: GetElementDetails
    };
}]);