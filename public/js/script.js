// var this.myapp = angular.module("myapp", ["ngRoute", "ngAnimate"]);
function myCtrl($scope, $timeout) {
    $scope.Math = window.Math;
    loop();
    $scope.sw = 0;

    function continuousFraction(x) {
        var a = x;
        var b = a % 1;
        var a0 = Math.round(a - b);
        if (b == 0)
            return a0;
        a = 1/b;
        b = a % 1;
        var a1 = Math.round(a - b);
        if (b == 0)
            return new Fraction(a0*a1+1, a1);
        a = 1/b;
        b = a % 1;
        var a2 = Math.round(a - b);
        return new Fraction(a0*(a1*a2+1)+a2, a1*a2+1);
    }

    $scope.infrequentUpdate = function(){
        $timeout(function(){
                     var r = continuousFraction($scope.ratio);
                     $scope.fracDenominator = r.denominator;
                     $scope.fracNumerator = r.numerator;
                     changeRatioText($scope.sw);
                     $scope.infrequentUpdate();
                 },15);
    }
    $scope.infrequentUpdate();

    function zerofill(x, prec) {
        return ('00000000000000000000000000000000' + x).slice(-prec);
    }

    function loop() {
        requestAnimationFrame(loop);
        calc();
    }

    function calc() {

        var now = new Date();

        // 計算   
        var hoge = getHoge(now)
    
        // 表示用の構造体に計算結果を代入
        $scope.now = now
        $scope.ratio = hoge.ratio
        $scope.remain = 1 - hoge.ratio
        $scope.oneDay = hoge.oneDay
        $scope.human = hoge.human

        var ratio = getFormattedDecimals($scope.ratio, 7);        // 終了[%] 表示用文字列生成
        $scope.intRatio = ratio.IntPart;
        $scope.decRatio = ratio.DecPart;        

        var remain = getFormattedDecimals($scope.remain, 7);      // 残り[%] 表示用文字列生成
        $scope.intRemain = remain.IntPart;
        $scope.decRemain = remain.DecPart;        

        // 表示    
        $scope.$apply();
    }


    function getHoge(now) {
    
        // 戻り値
        var ret = {};
    
        // 始点と終点
        var nextNewYear = new Date(now.getFullYear() + 1, 0, 1);
        var thisNewYear = new Date(now.getFullYear(),     0, 1);
    
        // 終了[%] の算出
        var ratio = (now - thisNewYear.valueOf()) / (nextNewYear.valueOf() - thisNewYear.valueOf());
        ret.ratio = ratio;
    
        // 終了[%] を一日に換算
        var oneDaySecond = 24 * 60 * 60 * ratio;     // 一年=一日の時の経過秒数
        var timespanBase = new Date(1970, 1, 1);     // timespan型がないので、1970/1/1 0:0:0 を起点にする
        ret.oneDay = new Date(timespanBase.valueOf() + oneDaySecond * 1000);
    
        // 終了[%] を人類の歴史に換算
        var d = (nextNewYear.getFullYear() + 200000.0) * ratio - 200000.0; // 20万年前～現在の経過年数
        var y = Math.floor(d);
        if (y >= 1) {
            ret.human = "西暦 " + y + " 年";
        } else {
            ret.human = "紀元前 " + (Math.abs(y) + 1) + " 年";
        }
        
        return ret;
    }

    function getFormattedDecimals(value, scale) {
        
        // 戻り値
        var ret = {};

        // 整数部
        ret.IntPart = Math.floor(value).toString();

        // 小数部                
        var s = Math.pow(10, scale)
        var d = Math.floor((value % 1) * s)
        ret.DecPart = (s + d).toString().substr(-scale)
    
        return ret;
    }


    $scope.tweet = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };

    $scope.$watch(
        'sw',
        function (sw, oldsw) {
          changeRatioText(sw);
        });

    function changeRatioText (sw) {
        if (sw == 0) {
            $scope.ratioText = $scope.intRatio + '.' + ($scope.decRatio).slice(0,2) + ' %25';
        } else {
            $scope.ratioText = ' ' +  $scope.fracNumerator + '/' + $scope.fracDenominator + ' ';
        }
    }
}

window.requestAnimationFrame = (function(){
                                    return  window.requestAnimationFrame   ||
                                        window.webkitRequestAnimationFrame ||
                                        window.mozRequestAnimationFrame    ||
                                        window.oRequestAnimationFrame      ||
                                        window.msRequestAnimationFrame     ||
                                        function(/* function */ callback, /* DOMElement */ element){
                                            window.setTimeout(callback, 1000 / 60);
                                        };
                                })();
