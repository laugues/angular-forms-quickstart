'use strict';

angular.module('BalanceForms').factory('Invoices', ['$resource', function ($resources) {
    return $resources('http://localhost:8080/api/rest/get', {},
        {
            getAll: {method:'GET', params:{}, isArray:true}
        }
    );
}])