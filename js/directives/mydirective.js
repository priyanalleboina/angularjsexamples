
angular.module('myapp').directive('mynavbar',function() {
 	return {
  templateUrl:'views/navbar.html',
restrict:'E',
replace: true,
scope:{
},
controller:function($scope,myfactory,nameprovider,imageprovider,$rootScope){
    $scope.name=myfactory.get1();
    $scope.cmpnyname=nameprovider.appName;
    $scope.image=imageprovider.appName1;
  $rootScope.$on("event", function (event, args) {
      document.getElementById('logo').src = args;
     });
}


 };
 
});