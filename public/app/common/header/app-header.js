(function () {
    angular.module('shopApp')
        .directive('appHeader', function ($window) {
            return {
                templateUrl: 'app/common/header/app-header.html',
                link: function (scope, element, attrs) {
                    scope.bigHeader = true;

                    angular.element($window).bind('scroll', function () {
                        if(this.pageYOffset >= 100){
                            scope.bigHeader = false;
                        }else{
                            scope.bigHeader = true;
                        }
                        scope.$apply();
                    });
                }
            };
        });
}());
