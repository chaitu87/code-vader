var app = angular.module("code-vader", ['ui.codemirror', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
            .when("/login", {
                templateUrl: "login.html"
            });
    })
    .controller('masterCtrl', ['$scope',
        function masterCtrl($scope) {
            $scope.firstname = "Chaithanya";
            $scope.lastname = "Padi";
            $scope.modes = ['clojure', 'css', 'erlang', 'go', 'haml', 'javascript', 'markdown', 'nginx', 'python', 'ruby', 'sass', 'shell', 'sql', 'xml', 'yaml'];
            // The ui-codemirror option
            $scope.cmOption = {
                lineNumbers: true,
                indentWithTabs: true
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
            // View code of the snippet
            $scope.openSnippet = function(snippet) {
                $scope.activeSnippet = this.$index;
                $scope.activeCode = snippet.code;
                $scope.cmOption.mode = snippet.language;
            };
            // Add a new snippet
            $scope.addSnippet = function() {
                $scope.snippets.push({
                    title: 'New Snippet',
                    desc: 'enter description here',
                    code: '',
                    language: 'javascript'
                });
                $scope.activeSnippet = $scope.snippets.length - 1;
                $scope.activeCode = $scope.snippets[$scope.activeSnippet].code;
                $scope.cmOption.mode = $scope.snippets[$scope.activeSnippet].language;
            };
        }
    ]);
