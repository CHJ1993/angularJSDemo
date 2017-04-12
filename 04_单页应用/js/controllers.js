/**
 * Created by chj on 17-4-12.
 */
/*所有控制器,不要加 []  否则会报错*/
angular.module('myApp')
    .controller('HomeCtrl', ['$scope','$css','$routeParams','userServer'
        ,function ($scope,$css,$routeParams,userServer) {
        $scope.pageName='首页';
        $css.add('./css/home.css');
        $scope.userList = userServer.getData();
    }])
    .controller('MarketCtrl', ['$scope','$css','$routeParams',function ($scope,$css,$routeParams) {
        $scope.pageName='闪送超市';
        $css.add('./css/home.css');
        $scope.person = {
            name:$routeParams.name,
            age:$routeParams.age
        }
    }])
    .controller('CartCtrl', ['$scope','$css',function ($scope,$css) {
        $scope.pageName='购物车';
        $css.add('./css/home.css');
    }])
    .controller('MineCtrl', ['$scope','$css',function ($scope,$css) {
        $scope.pageName='我的';
        $css.add('./css/home.css');
    }])
    .controller('UserDetailCtrl',['$scope','$css','$routeParams','$location','userServer',
        function ($scope,$css,$routeParams,$location,userServer) {
        $scope.pageName = '详情页面';
        $css.add('./css/userdetail.css');
        $scope.user=userServer.getUserInfo(parseInt($routeParams.userId));
            console.log($scope.user);
        $scope.backFn = function () {
            // window.history.back();
            /*跳转到某个路由*/
            $location.path('/home');
        }
    }]);