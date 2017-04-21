var app = angular.module("code-vader", [])
    .controller('masterCtrl', function($scope) {
        $scope.firstname = "Chaithanya";
        $scope.lastname = "Padi";
        $scope.snippets = [{
            title: 'Welcome Code',
            desc: 'this code is a welcome code ... we test highlight here',
            code: 'var wow="hello";console.log(wow);',
            language: 'javascript'
        }, {
            title: 'Other Test',
            desc: 'Test different languages',
            code: 'puts "hello"',
            language: 'ruby'
        }];
    });
