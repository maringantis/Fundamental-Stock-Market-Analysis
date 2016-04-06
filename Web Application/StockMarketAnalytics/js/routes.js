var app = angular.module('stock', ['ngRoute']);

app.config(['$routeProvider',
            function($routeProvider,$locationProvider) {
				$routeProvider.
				when('/', {
					templateUrl: 'dashboard.html',
					controller: 'dashboardController'
     
				}).when('/cross', {
					templateUrl: 'cross.html',
					controller: 'crossController'
				})
				.when('/analysis', {
					templateUrl: 'analysis.html',
				    controller: 'analysisController'
				}).
				when('/corporate', {
					templateUrl: 'corporate.html',
					controller: 'corporateController'
     
				}).
                otherwise({
                  redirectTo: '/',
                });
              //$locationProvider.html5Mode(true);
          }

          ]);



app.controller('dashboardController',function($scope,$http){
		var placeholderDiv = document.getElementById("tableauViz");
		var url = "https://10ay.online.tableau.com/#/site/dhvani/views/Book1/Dashboard1?:iid=1";
		var options = {
			width: placeholderDiv.offsetWidth,
			height: placeholderDiv.offsetHeight,
			hideTabs: true,
			hideToolbar: true,
			onFirstInteractive: function () {
				workbook = viz.getWorkbook();
				activeSheet = workbook.getActiveSheet();
			}
		};
		viz = new tableau.Viz(placeholderDiv, url, options);
		$("#tableauViz").children().height("800px").width("980px");
});
app.controller('crossController',function($scope,$http){
		var placeholderDiv = document.getElementById("crosstableauViz");
			var url = "https://10ay.online.tableau.com/#/site/dhvani/views/Book1/CrossSectorAnalysis?:iid=3";
			var options = {
				width: placeholderDiv.offsetWidth,
				height: placeholderDiv.offsetHeight,
				hideTabs: true,
				hideToolbar: true,
				onFirstInteractive: function () {
					workbook = viz.getWorkbook();
					activeSheet = workbook.getActiveSheet();
				}
		};
		viz = new tableau.Viz(placeholderDiv, url, options);
		$("#crosstableauViz").children().height("800px").width("980px");
});

app.controller('analysisController',function($scope,$http){
		var placeholderDiv = document.getElementById("analysistableauViz");
			var url = "https://10ay.online.tableau.com/#/site/dhvani/views/Book1/2013HealthCareAnalysis?:iid=1";
			var options = {
				width: placeholderDiv.offsetWidth,
				height: placeholderDiv.offsetHeight,
				hideTabs: true,
				hideToolbar: true,
				onFirstInteractive: function () {
					workbook = viz.getWorkbook();
					activeSheet = workbook.getActiveSheet();
				}
		};
		viz = new tableau.Viz(placeholderDiv, url, options);
		$("#analysistableauViz").children().height("800px").width("980px");
});

app.controller('corporateController',function($scope,$http){	
		var placeholderDiv = document.getElementById("corporatetableauViz");
			var url = "https://10ay.online.tableau.com/#/site/dhvani/views/Book1/RiteAidCorporationAnalysis?:iid=1";
			var options = {
				width: placeholderDiv.offsetWidth,
				height: placeholderDiv.offsetHeight,
				hideTabs: true,
				hideToolbar: true,
				onFirstInteractive: function () {
					workbook = viz.getWorkbook();
					activeSheet = workbook.getActiveSheet();
				}
		};
		viz = new tableau.Viz(placeholderDiv, url, options);
		$("#corporatetableauViz").children().height("800px").width("980px");
	
});

    