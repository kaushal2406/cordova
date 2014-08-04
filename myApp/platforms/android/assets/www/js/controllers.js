angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope,DatabaseService) {
	$scope.students = [];

	console.log("CordovaService call " + $scope.students);
	DatabaseService.openDB();
	DatabaseService.creatDB();
	DatabaseService.insertStudent('Kaushal','Reading','Sanskar vidhyalay');
	//DatabaseService.insertStudent('Anant','Test','Test');
	console.log("before  DatabaseService.getStudentList(); " );
	  DatabaseService.getStudentList().then(function(res) {
				console.log("student list then "+angular.toJson(res));
			//$scope.students =res;
				var studentsList = res;
				//add rows into students object
				try {
					if(studentsList!=undefined && studentsList != null)
					{
						console.log("if if if if DatabaseService.getStudentList(); " );
						for (var i = 0; i < studentsList.length; i++) {
							console.log(angular.toJson(studentsList.item(i))+ " item " + studentsList.item(i));
							$scope.students.push(studentsList.item(i));
						}
						console.log("student list "+angular.toJson(students));
					}
					else{
						console.log("else else else DatabaseService.getStudentList(); " );
					}
				} catch (e) {
					console.log(" error error  " + e );
				}
	  });
	console.log("after DatabaseService.getStudentList(); " );
	
	
});
