var app =angular.module("app",["ngRoute"]);

/* app.config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects or libraries.
    $sceProvider.enabled(false);
  });
 */
  app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "/public/html/index-main.html"
    })
    .when("/personal", {
        templateUrl : "/public/html/personal-main.html"
    })
    .when("/educacion", {
        templateUrl : "/public/html/educacion-main.html"
    })
    .when("/experiencia", {
        templateUrl : "/public/html/experiencia-main.html"
    })
    .when("/idiomas", {
        templateUrl : "/public/html/idiomas-main.html"
    })
    .when("/herramientas", {
        templateUrl : "/public/html/herramientas-main.html"
    })
    .when("/objetivos", {
        templateUrl : "/public/html/objetivos-main.html"
    })
    .when("/projectos", {
        templateUrl : "/public/html/projectos-main.html"
    });
});

app.controller("controller", function($scope, $http){
    
/*     $http.get("/public/html/index-main.html").then(
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
   } */

})

