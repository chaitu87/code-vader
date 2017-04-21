var app = angular.module("code-vader", ['ui.codemirror'])
    .controller('masterCtrl', function($scope) {
        $scope.firstname = "Chaithanya";
        $scope.lastname = "Padi";
        $scope.editorOptions = {
            lineWrapping: true,
            lineNumbers: true,
            mode: 'javascript',
            scrollbarStyle: null
        };
        $scope.snippets = [{
            title: 'Welcome Code',
            desc: 'this code is a welcome code ... we test highlight here',
            code: 'var wow="hello";\nconsole.log(wow);',
            language: 'javascript'
        }, {
            title: 'Other Test',
            desc: 'Test different languages',
            code: 'puts "hello"',
            language: 'ruby'
        }];
        $scope.activeCode = $scope.snippets[0].code;
        $scope.openSnippet = function(snippet){
        	console.log(snippet);
        	$scope.activeCode = snippet.code;
        };
    });
