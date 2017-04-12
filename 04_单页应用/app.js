/**
 * Created by chj on 17-4-12.
 */
/*
 * 这里用到ngRouter ,angularCSS 模块 ，所以需要依赖注入
 * */
angular.module('myApp', ['ngRoute', 'angularCSS'])
    /*在config中处理路由配置
     * 需要依赖 $routeProvider
     * */
    .run(['$window','$rootScope',function ($window,$rootScope) {
        /*这里监听浏览器地址的变化*/
        /*$locationChangeSuccess 当浏览器地址发生变化时触发的的事件*/
        // $rootScope.rootFooterIsShow = true;
        $rootScope.$on('$locationChangeSuccess',function () {
            if(window.location.href.includes('detail')){
                $rootScope.rootFooterHide = true;
            }else {
                $rootScope.rootFooterHide = false;
            }
        })
    }])
    .config(['$routeProvider', function ($routerProvider) {
        $routerProvider
        /*
         * when()
         *    参数一：锚点名称
         *    参数二：处理对象
         * */
            .when('/home', {
                // template:'<h1>首页</h1>',
                templateUrl: './view/home.html',
                //给当前View配置一个控制器(自动会管理,不需要在view上写ng-controller)
                controller: 'HomeCtrl'
            })
            .when('/market/:name/:age', {
                // template:'<h1>闪送超市</h1>'
                templateUrl: './view/market.html',
                controller: 'MarketCtrl'
            })
            .when('/cart', {
                // template:'<h1>Cart</h1>'
                templateUrl: './view/cart.html',
                controller: 'CartCtrl'
            })
            .when('/mine', {
                // template:'<h1>Mine</h1>'
                templateUrl: './view/mine.html',
                controller: 'MineCtrl'
            })
            .when('/detail/:userId',{
                templateUrl: './view/userDetail.html',
                controller: 'UserDetailCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
    }]);