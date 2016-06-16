myApp.controller('modalBoxController',
		[ '$scope', '$modal', '$log', '$dialogs' , function($scope, $modal,
				$log, $dialogs) {

			$scope.name = "Modal Box Example";
			$scope.openSimpleModalBox = function() {
				alert('simpleModalBox')
			}
			
			
			$scope.items = [ 'item1', 'item2', 'item3' ];

			$scope.openSimpleModalBox = function(size) {
				var modalInstance = $modal.open({
					templateUrl : 'template/popup/simpleModalBox.html',
					controller : 'popupController',
					size : size,
					scope : $scope,
					resolve : {
						items : function() {
							return $scope.items;
						}
					}
				});

				modalInstance.result.then(
						function(selectedItem) {
							$scope.selected = selectedItem;
						}, function() {
							
							$log.info('Modal dismissed at: '
									+ new Date());
						});
			};
		}]);

myApp.controller("popupController",function($scope,$modalInstance){
$scope.cancel = function() {
		
		if ($modalInstance) {
			$modalInstance.dismiss('cancel');
		}

	};// cancel();
	
})