angular.module('myapp').factory('myfactory',function($q,$http,$state){
    
    var f={};
    f.get=function(url){
        var deferred=$q.defer();
        var request={
            method:'GET',
            url:url
        };
        $http(request).success(function(resp){
            if(resp.status=="fail"){
                alert("Session expired")
                $state.go("login");
            }
            deferred.resolve(resp);

        })
        .error(function(resp){
            deferred.reject(resp);
        });
        return deferred.promise;
    }
   
    f.get1=function(){
    var username="priyanka";
    return username;
    }
    // return username;
    return f;
});



