
angular.module("myapp").controller("chartsctrl",['$scope','myfactory','myservice',function($scope,myfactory,myservice){
    $scope.message = 'test';
 
      Morris.Line({
            // ID of the element in which to draw the chart.
            element: 'myfirstchart',
            // Chart data records -- each entry in this array corresponds to a point on
            // the chart.
            data: [
              { year: '2008', value: 20 },
              { year: '2009', value: 10 },
              { year: '2010', value: 5 },
              { year: '2011', value: 5 },
              { year: '2012', value: 20 }
            ],
            // The name of the data record attribute that contains x-values.
            xkey: 'year',
            // A list of names of data record attributes that contain y-values.
            ykeys: ['value'],
            // Labels for the ykeys -- will be displayed when you hover over the
            // chart.
            labels: ['Value']
      });
    //   Morris.Bar({
    //     element: 'bar-example',
    //     data: [
    //       { y: '2006', a: 100, b: 90 },
    //       { y: '2007', a: 75,  b: 65 },
    //       { y: '2008', a: 50,  b: 40 },
    //       { y: '2009', a: 75,  b: 65 },
    //       { y: '2010', a: 50,  b: 40 },
    //       { y: '2011', a: 75,  b: 65 },
    //       { y: '2012', a: 100, b: 90 }
    //     ],
    //     xkey: 'y',
    //     ykeys: ['a', 'b'],
    //     labels: ['Series A', 'Series B']
    //   });
    //   Morris.Donut({
    //     element: 'donut-example',
    //     data: [
    //       {label: "Download Sales", value: 12},
    //       {label: "In-Store Sales", value: 30},
    //       {label: "Mail-Order Sales", value: 20}
    //     ]
    //   });
      
   myservice.get("countries.json").then(function(resp){
   if(resp.status=="success"){
   
   $scope.countriesList=angular.copy(resp.result);
   console.log($scope.countriesList);
 $scope.filterData($scope.countriesList);
 $scope.filterData1($scope.countriesList)
   }
   else if(resp.status=='fail'){
   swal("Failed... Please Try Again");	
   
   }
})

$scope.filterData = function(object){

    $scope.finalArray=[]
    for(var i=0;i<object.length;i++){
    var obj={}
    obj.a = angular.copy(object[i].constitutions.length);
    obj.y = angular.copy(object[i].countyName);
    $scope.finalArray.push(obj)
    
    };
    $scope.makeBarChart($scope.finalArray);
    console.log($scope.finalArray)
    };

   

 $scope.makeBarChart = function(object){
    Morris.Bar({
    element: 'bar-example',
    data: object,
    xkey: 'y',
    ykeys: ['a'],
    labels: ['Constitions']
    });
    
    };

    $scope.filterData1= function(object){

        $scope.finalArray=[]
        for(var i=0;i<object.length;i++){
        var obj={}
        obj.value = angular.copy(object[i].constitutions.length);
        obj.label = angular.copy(object[i].countyName);
        $scope.finalArray.push(obj)
        
        };
        $scope.mydonut($scope.finalArray);
        console.log($scope.finalArray)
        };
        
    $scope.mydonut = function(object){
        Morris.Donut({
        element: 'donut-example',
        data: object

        });
        
        };
 
}]);



