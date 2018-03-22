
angular.module('myapp').directive('toggledir',function() {
 	return {
  templateUrl:'views/toggledirective.html',
restrict:'E',
replace: true,
scope:{
},
controller:function($scope,myfactory,nameprovider,imageprovider,$rootScope){
  
  
  $(document).ready(function(){
    $("#sidebarCollapse").click(function(){
        $("#sidebar").toggleClass('active');
    });
});

    
}


 };
 
});