var CordovaService = angular.module('fsCordova', []);
angular.module('fsCordova').service('CordovaService', ['$document', '$q',
  function($document, $q) {
	console.log('CordovaService CordovaService');
    var d = $q.defer(),
        resolved = false;

    var self = this;
    this.ready = d.promise;

    document.addEventListener('deviceready', function() {
      resolved = true;
      d.resolve(window.cordova);
    });

    setTimeout(function() {
      if (!resolved) {
        if (window.cordova) d.resolve(window.cordova);
      }
    }, 3000);
}]);