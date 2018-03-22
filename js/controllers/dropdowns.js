
angular.module("myapp").controller("dropdownctrl",['$scope','myfactory','myservice',function($scope,myfactory,myservice){
    $scope.message = 'test';
    $scope.getCountriesData=function(){
   myservice.get("http://shamba.shambadigital.com/Shamba/county").then(function(resp){
   if(resp.status=="success"){
   
   $scope.countriesList=angular.copy(resp.result);
   console.log($scope.countriesList);
   }
   else if(resp.status=='fail'){
   swal("Failed... Please Try Again");	
   
   }
})
};
$scope.changedfun=function(){
    $scope.first=$scope.country1;
    $scope.second=$scope.first.constitutions;
    console.log($scope.first);
   
}
  $scope.select1=function(){
    $scope.b=$scope.constitution;
    console.log($scope.b);
  }
 
 
}]);



