var gApp = angular.module('gApp', []);
    gApp.run(function($rootScope){
    	$rootScope.address = "hanyena1134@hanmail.net";
    	$rootScope.dns = "GooDee";
    	$rootScope.title = "Portfolio";
    	$rootScope.name = "한예나";
		$rootScope.MenuList = [
			"안녕하세요 저는 모든일에 최선을 다하는 한예나입니다.",
			"항상 긍적적인 마인드로 문제를 해결해나가겠습니다.",
		    "감사합니다.",
		    "보유기술은 아래와 같습니다.",
			"- JAVA : Spring, JSP.Servlet",
			"- Front end: HTML & CSS & Javascript",
			"- Database : mysql",
			"- OS: Linux, Windows"
			];
		
    });
	gApp.controller('gCtrl', function($scope) {
		$scope.htmlCheck = false;
		$scope.bodyCheck = false;
		$scope.btCheck = false;
		$scope.projectFlag = false;
		$scope.projectUrl = "";
		$scope.btnActive = 1;
		
		$scope.dropEvent = function() {
			$scope.htmlCheck = !$scope.htmlCheck;
			$scope.bodyCheck = !$scope.bodyCheck;
			$scope.btCheck   = !$scope.btCheck;
		};
		
		$scope.projectEvent = function(rows) {
			$scope.row = rows;
			if($scope.projectUrl == rows.url) {
				$scope.projectUrl = "";
				$scope.projectFlag = false;
			} else {
				$scope.projectUrl = rows.url;
				$scope.projectFlag = true;
			}
		}
		
		$scope.iFrameLink = function(){
			if($scope.iframeView){
				location.href = $scope.iframeView;
			}
		}
		
		$scope.btnList = [
			{filter: "*",      name: "All",      active: true },
			{filter: ".bgOn",  name: "Personal", active: false},
			{filter: ".bgOff", name: "Team",     active: false}
		];
		
		$scope.dataSource = [
			{
			 path: "portfolio/",
			 url : "team/team.pdf", 
			 title: "Team",
			 name: "Impression",
			 img: "team/TeamImpression.png",
			 img2: "team/TeamImpression.png",
			 type : true, 
			 contents: "처음으로 개발을 한 게 팀 프로젝트여서 팀원들에게 피해가 가지 않을까 걱정을 했었습니다. 그래서 최대한 프로젝트 기간내에 내가 맡은 역할을 다 하려고 노력을 했습니다. 서로 도와가며 했기 때문에 무사히 프로젝트를 마칠 수 있었습니다. 제 첫 웹 사이트이기 때문에 많은 생각이 들었습니다. 평소에 사용만할 줄 알았던 웹을 직접 제작해본 것이 너무 신기하였고 시작 전에는 마냥 어려울 거 같았지만 하면 할수록 개발에 흥미를 갖게 된 계기가 된 것 같습니다."
			},{
			 path: "portfolio/",
			 url : "personal/personal.pdf", 
			 title: "Personal",
			 name: "Impression",
			 img: "personal/PersonalImpression1.png",
			 img2: "personal/PersonalImpression.png",
			 type : false,
			 contents: "역할분담을 하여 각자의 맡은 역할만 했던 팀 프로젝트와 달리 혼자서 모든 걸 구상해야하는 프로젝트여서 초반엔 많이 힘들었습니다. 하지만 천천히 배워간다는 느낌으로 조급해하지 않고 구현해 내다 보니 기능들이 하나씩 쌓여 점점 사이트가 되어가고 있었습니다. 프로젝트를 마무리를 했고, 그동안 해왔던 것들이 아주 좋은 경험이 되었다고 생각이 들었습니다. 아직 미흡하지만 추후에 초반에 구상했던 기능들을 기능적인면에서 보안을 하고 싶고 저만의 사이트를 하나 더 만들고 싶다는 생각이 들었습니다. "
			},{
			 path: "media/",
			 url : "personal.mp4", 
			 title: "Personal",
			 name: "Media",
			 img: "personal/PersonalMedia.png",
			 img2: "personal/PersonalMedia.png",
			 type : false, 
			 contents: ""
			}
		];
		
		$scope.btnEvnet = function(index){
			$scope.projectUrl = "";
			$scope.projectFlag = false;
			
			for(var i = 0; i < $scope.btnList.length; i++){
				$scope.btnList[i].active = false;
			}
			$scope.btnList[index].active = true;
			$scope.grid.isotope({ filter: $scope.btnList[index].filter });
		}
		
		setTimeout(function(){
			$scope.grid = $('#portfolioGroup').isotope();
		}, 200);
	});
	gApp.directive('resize', function ($window) {
	    return function (scope, element) {
	        var w = angular.element($window);
	        scope.getWindowDimensions = function () {
	            return {
	                'h': w.height(),
	                'w': w.width()
	            };
	        };
	        scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
	            if(newValue.w >= 768){
					scope.htmlCheck = false;
					scope.bodyCheck = false;
					scope.btCheck = false;
				}
	        }, true);

	        w.bind('resize', function () {
	            scope.$apply();
	        });
	    }
	});
