/**
 * Created by chj on 17-4-12.
 */
angular.module('myApp')
    .factory('userServer', [function () {
        var userList = [
            {userId: 1001, userName: '李达康', age: 45},
            {userId: 1002, userName: '祁同伟', age: 38},
            {userId: 1003, userName: '侯亮平', age: 32},
            {userId: 1004, userName: '高小琴', age: 33},
            {userId: 1005, userName: '高玉良', age: 48}
        ];
        return {
            getData: function () {
                return userList;
            },
            getUserInfo: function (id) {
                for (var tempUser of userList) {
                    if (tempUser.userId === id) {
                        return tempUser;
                    }
                }
                return null;
            }
        }
    }]);