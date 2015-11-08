angular
	.module('list')
	.controller('listCtrl', listCtrl);

	function listCtrl($scope){
	 
		$scope.todos = [
			{'title':'Build a todo app', 'done':false}
		];

		$scope.addTodo = function() {
			$scope.todos.push({'title': $scope.newTodo,'done':false})
			$scope.newTodo = ''
		}
		$scope.clear = function(){
			$scope.todos = $scope.todos.filter(function(item){
				return !item.done;
			})
		}
	}	