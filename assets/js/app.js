var app = angular.module("code-vader", ['ui.codemirror'])
    .controller('masterCtrl', function($scope) {
        $scope.firstname = "Chaithanya";
        $scope.lastname = "Padi";
        $scope.modes = ['Scheme', 'XML', 'Javascript'];
        $scope.mode = $scope.modes[0];
        // The ui-codemirror option
        $scope.cmOption = {
            lineNumbers: true,
            indentWithTabs: true,
            mode: $scope.mode
        };
        $scope.snippets = [{
            title: 'Welcome Code',
            desc: 'this code is a welcome code ... we test highlight here',
            code: '// Javascript code in here.\n' +
            'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}',
            language: 'javascript'
        }, {
            title: 'Other Test',
            desc: 'Test different languages',
            code: 'something = "nothing";\nputs something;\nrequire "rubygems"',
            language: 'ruby'
        }];
        $scope.activeCode = $scope.snippets[0].code;
        $scope.cmOption.mode = $scope.snippets[0].language;
        $scope.activeSnippet = 0;
        $scope.openSnippet = function(snippet) {
            $scope.activeSnippet = this.$index;
            $scope.activeCode = snippet.code;
            $scope.cmOption.mode = snippet.language;
        };
    });
