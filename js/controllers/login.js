angular.module('myapp').controller("loginctl",function($scope,$location,myservice,$state){
$scope.dashboard=function(){
    $location.path("/dashboard")
// var loginDetails=   {
//         nationalId:$scope.uname,
//         password:$scope.pwd
//     }
   
//     JSON.stringify(loginDetails);
//   myservice.post("http://shamba.shambadigital.com/Shamba/login",loginDetails).then(function success(response){
//         var credential=response;
//         console.log(credential);
//         if(credential.status==="success"){
//             $state.go("dashboard");
//         }
//         else{
//             alert("username or password incorrect");
//         }
//     })
}
})
