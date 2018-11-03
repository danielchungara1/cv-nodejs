var app =angular.module("app",[]);

app.config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects or libraries.
    $sceProvider.enabled(false);
  });

app.controller("controller", function($scope, $http){
    
    $http.get("/public/html/index-main.html").then(
        function(response){
            $scope.mainhtml = response.data;
        }
    );

   $scope.loadhtml=function(path){       
       $http.get(path).then(
        function(response){
            $scope.mainhtml = response.data;
        }
    );
   }
})

