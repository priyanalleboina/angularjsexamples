var app=angular.module("myapp",['ui.router','oc.lazyLoad']);
app.config(function($stateProvider, $urlRouterProvider,$ocLazyLoadProvider,$provide){
    
    $provide.provider('nameprovider', function () { 
        this.$get = function () { 
        var appname = "OJAS"; 
        return { appName: appname }; 
        } 
        });
        $provide.provider('imageprovider', function () { 
            this.$get = function () { 
            var appname1 = "IMAGES/ojas-logo.png"; 
            return { appName1: appname1 }; 
            } 
            })
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state("/",{
        url:"/",
        templateUrl:"views/login.html",
        controller:"loginctl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name:'service',
                files:[ 'js/controllers/login.js']
              }), 
              $ocLazyLoad.load({
                name:'controller',
                files:[ 'js/services/service.js']
            })
            }
          }
    })
    .state("dashboard",{
        url:"/dashboard",
        templateUrl:"views/dashboard.html",
        controller:"dashboardctrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }),     
                $ocLazyLoad.load({
                      name:'factory',
                      files:[ 'js/services/factory.js']
                  }),
                 $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/dashboardctrl.js']
                })
          }
        }
    })
    .state("signup",{
        url:"/signup",
        templateUrl:"views/firstpage.html",
        controller:"personsignupCtrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
            return $ocLazyLoad.load({
                name:'directive',
                files:[ 'js/directives/mydirective.js']
            }), 
            $ocLazyLoad.load({
                name:'directive',
                files:[ 'js/directives/toggledirective.js']
            }),
             $ocLazyLoad.load({
                name:'service',
                files:[ 'js/services/service.js']
            }),     
            $ocLazyLoad.load({
                name:'factory',
                files:[ 'js/services/factory.js']
            }),
            $ocLazyLoad.load({
                name:'controller',
                files:[ 'js/controllers/firstpage.js']
            })
          }
        }
    })
    .state("imageupload",{
        url:"/imageupload",
        templateUrl:"views/imageupload.html",
        controller:"imageuploadingCtrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }),
                $ocLazyLoad.load({
                    name:'factory',
                    files:[ 'js/services/factory.js']
                }),
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/imageupload.js']
                })
            
          }
        }
    })
    .state("dropdowns",{
        url:"/dropdowns",
        templateUrl:"views/dropdowns.html",
        controller:"dropdownctrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
            return  $ocLazyLoad.load({
                name:'directive',
                files:[ 'js/directives/mydirective.js']
            }),
            $ocLazyLoad.load({
                name:'directive',
                files:[ 'js/directives/toggledirective.js']
            }),
            $ocLazyLoad.load({
                name:'service',
                files:[ 'js/services/service.js']
              }), 
            $ocLazyLoad.load({
                name:'factory',
                files:[ 'js/services/factory.js']
            }),
            $ocLazyLoad.load({
                name:'controller',
                files:[ 'js/controllers/dropdowns.js']
            })
           
          }
        }
    })
    .state("charts",{
        url:"/charts",
        templateUrl:"views/charts.html",
        controller:"chartsctrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }),     
                $ocLazyLoad.load({
                    name:'factory',
                    files:[ 'js/services/factory.js']
                }),
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/charts.js']
                })
               
          }
        }
    })
    .state("datatable",{
        url:"/datatable",
        templateUrl:"views/datatable.html",
        controller:"datatablectrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }),   
                $ocLazyLoad.load({
                    name:'factory',
                    files:[ 'js/services/factory.js']
                }),
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/datatable.js']
                })
          }
        }
    })
    .state("filter",{
        url:"/filter",
        templateUrl:"views/filter.html",
        controller:"filterctrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }), 
                $ocLazyLoad.load({
                    name:'factory',
                    files:[ 'js/services/factory.js']
                }),
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/filter.js']
                }), 
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/filter/firstfilter.js']
                })
          }
        }
    })
    .state("watchers",{
        url:"/watchers",
        templateUrl:"views/watches.html",
        controller:"watchctrl",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/mydirective.js']
                }),
                $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'service',
                    files:[ 'js/services/service.js']
                  }), 
                $ocLazyLoad.load({
                    name:'factory',
                    files:[ 'js/services/factory.js']
                }), 
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/controllers/watchers.js']
                })
               
          }
        }
    })
    .state("logout",{
        url:"/logout",
        templateUrl:"views/logout.html",
        resolve: {
            lazyload:function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name:'directive',
                    files:[ 'js/directives/toggledirective.js']
                }),
                $ocLazyLoad.load({
                    name:'controller',
                    files:[ 'js/services/service.js']
                })
          }
        }
    })
});
app.controller("myctrl",function($scope){

});
