myApp.service("sendService", function () {

    this.valueBroadcast = function (name, scope) {
        alert(`${name} Broadcasted`);
        scope.$broadcast(name, { val: `${name} event listened` });
    };

    this.valueEmit = function (name, scope) {
        alert(`${name} Emitted`);
        scope.$emit(name, { val: `${name} event listened` });
    };
});


myApp.service("listenService", function()
{
    this.scopeListen = function (scope, name) {
        scope.$on(name, function (e, data) {
            scope.a1 = data.val;
        });
    }

    this.rootListen = function (scope, rootScope, name) {
        rootScope.$on(name, function (e, data) {
            scope.a2 = data.val;
        });
    }
});