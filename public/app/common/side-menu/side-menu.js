
angular.module("pageslide-directive", [])
.directive('slideable', function () {
    return {
        restrict:'C',
        compile: function (element) {
            var contents = element.html();
            element.html('<div class="slideable_content">' + contents + '</div>');

            return function postLink(scope, element) {
                element.addClass('side__menu');
            };
        }
    };
})

.directive('sideMenu', function () {
    return {
        restrict: 'E',
        templateUrl: 'app/common/side-menu/side-menu.html'
    };
})

.directive('slideToggle', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var target, content;

            attrs.expanded = false;

            element.bind('click', function() {
                if (!target)  {
                    target = document.querySelector(attrs.slideToggle);
                }

                if (!content) {
                    content = target.querySelector('.slideable_content');
                }

                if(!attrs.expanded) {
                    target.style.height = 100 + '%';
                    angular.element('body').addClass('body-moving');

                } else {
                    target.style.height = '0px';
                    angular.element('body').removeClass('body-moving');
                }

                attrs.expanded = !attrs.expanded;
            });
        }
    };
});
