/*
 * Author: Vova Zaytsev <zaytsev@usc.edu>
 */

"use strict";

app.factory("ApiFactory", ["$http", "$location",
    function($http, $location) {

        return {

            List: function(size, skip) {
                return $http({
                    url:    "/api/v1/list",
                    method: "GET",
                    params: {
                        "size": size,
                        "skip": skip
                    }
                });
            },

            Profile: function(userId) {
                return $http({
                    url:    "/api/v1/profile",
                    method: "GET",
                    params: {
                        "userId": userId
                    }
                });
            }

        };


}]);
