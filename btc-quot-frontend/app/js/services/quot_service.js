
(function(ng){
  ng.module('app').factory('QuotService', function($http){
    var query = function() {
      return $http.get('/quot');
    };
    return {
      query: query
    };
  });
})(angular);