'use strict';

app.directive('ngContacts', function() {
    return {
        restrict: 'A',
        link: function(scope, elm, attrs, ctrl) {
            elm.on('click', function() {
                navigator.contacts.create();
                var options = new ContactFindOptions();
                options.multiple = true;
                var fields = ["displayName"];
                navigator.contacts.find(fields, function(foundcontacts) {
                    scope.$apply(function() {
                        scope.contacts = foundcontacts;
                    });
                }, function(error) {
                    scope.$apply(function() {
                        alert('error: ' + error);
                    });
                }, options);
            });
        }
    };
});