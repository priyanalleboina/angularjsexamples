'use strict';
app.directive('countUp',function($interval){
return{
scope:{
valueToCount:'=',
speed:'@'
},
restrict:'AEC',
replace:'true',
template:'<div><p class="text-center">{{startPoint}}</p></div>',
link:function(scope){
scope.startPoint = 0;

           var timer = $interval(function () {
               if (scope.valueToCount!==0) {
                   scope.startPoint++;
               } else {
                   $interval.cancel(timer);
               }
           }, scope.speed);

           scope.$watch('startPoint', function (newValue, oldValue) {
               if (newValue === scope.valueToCount) {
                   $interval.cancel(timer);
               }
           });
}
};

});