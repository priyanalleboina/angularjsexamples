angular.module('myapp').service('myservice',function($q,$http,$state){
    this.get=function(url){
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
    this.post=function(url,requestdata){
        var deferred=$q.defer();
        var request={
            method:'POST',
            url:url,
            data:requestdata,
            headers:{
                'Content-Type':'application/json'
            }
        };
        $http(request).success(function(resp){
            if(resp.status=="fail"){
                
            }
            deferred.resolve(resp);

        })
        .error(function(resp){
            deferred.reject(resp);
        });
        return deferred.promise;
    }
    this.uploadimage = function(url,data){

		var deferred = $q.defer();
		
        $http.post(url, data, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(resp){
        	console.log("image uploading failed");
			deferred.resolve(resp);
			console.log("image uploading failed");
        })
        .error(function(resp){
        	console.log("image uploading failed");
			deferred.reject(resp);
			console.log("image uploading failed");
        });
	 	
		return deferred.promise;
	}
});