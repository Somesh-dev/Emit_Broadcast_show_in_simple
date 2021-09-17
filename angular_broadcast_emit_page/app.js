let myApp = angular.module("myApp", []);

myApp.controller("Controller1", ["$scope", "$rootScope", "sendService", "listenService", 
function ($scope, $rootScope, sendService, listenService) {

    $scope.a1 = "";
    $scope.a2 = "";

    $scope.myBroadcast = sendService.valueBroadcast;
    $scope.myEmit = sendService.valueEmit;

    
    // emitting clear
    $scope.clear = function () {
        $scope.$emit("clear", { val: "" });
    }


    // Listening to Controller1 
    listenService.scopeListen($scope, "Controller1");
    listenService.rootListen($scope, $rootScope, "Controller1");

    // Listening to childController1 
    listenService.scopeListen($scope, "childController1");
    listenService.rootListen($scope, $rootScope, "childController1");

    // Listening to Controller2 
    listenService.scopeListen($scope, "Controller2");
    listenService.rootListen($scope, $rootScope, "Controller2");

    // For value clear
    $rootScope.$on("clear", function (e, data) {
        $scope.a1 = data.val;
        $scope.a2 = data.val;
    });


}]);




myApp.controller("childController1", ["$scope", "$rootScope", "sendService", "listenService",
function ($scope, $rootScope, sendService, listenService) {

    $scope.a1 = "";
    $scope.a2 = "";

    $scope.myBroadcast = sendService.valueBroadcast;
    $scope.myEmit = sendService.valueEmit;


    // Listening to Controller1 
    listenService.scopeListen($scope, "Controller1");
    listenService.rootListen($scope, $rootScope, "Controller1");

    // Listening to childController1 
    listenService.scopeListen($scope, "childController1");
    listenService.rootListen($scope, $rootScope, "childController1");

    // Listening to Controller2 
    listenService.scopeListen($scope, "Controller2");
    listenService.rootListen($scope, $rootScope, "Controller2");

    // For value clear
    $rootScope.$on("clear", function (e, data) {
        $scope.a1 = data.val;
        $scope.a2 = data.val;
    });


}]);






myApp.controller("Controller2", ["$scope", "$rootScope", "sendService", "listenService",
function ($scope, $rootScope, sendService, listenService) {

    $scope.a1 = "";
    $scope.a2 = "";

    $scope.myBroadcast = sendService.valueBroadcast;
    $scope.myEmit = sendService.valueEmit;


    // Listening to Controller1 
    listenService.scopeListen($scope, "Controller1");
    listenService.rootListen($scope, $rootScope, "Controller1");

    // Listening to childController1 
    listenService.scopeListen($scope, "childController1");
    listenService.rootListen($scope, $rootScope, "childController1");

    // Listening to Controller2 
    listenService.scopeListen($scope, "Controller2");
    listenService.rootListen($scope, $rootScope, "Controller2");

    // For value clear
    $rootScope.$on("clear", function (e, data) {
        $scope.a1 = data.val;
        $scope.a2 = data.val;
    });

}]);