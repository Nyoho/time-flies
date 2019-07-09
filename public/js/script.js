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
        return String(x).padStart(2, "0");
        return ('00000000000000000000000000000000' + x).slice(-prec);
    }

    function loop() {
        requestAnimationFrame(loop);
        calc();
    }

    function calcDecimals() {
        var a = (($scope.ratio * 100) + '').split('.');
        if (a.length < 2) {
            $scope.intRatio = a[0];
            $scope.decRatio = '0000000';
        } else {
            $scope.intRatio = a[0];
            $scope.decRatio = a[1].slice(0,7);
        }

        a = (($scope.remain * 100) + '').split('.');
        if (a.length < 2) {
            $scope.intRemain = a[0];
            $scope.decRemain = '0000000';
        } else {
            $scope.intRemain = a[0];
            $scope.decRemain = a[1].slice(0,7);
        }
    }

    function calc() {
        $scope.now = new Date();
        var now = $scope.now;
        var nextNewYear = new Date(now.getFullYear()+1,0,1);
        var thisNewYear = new Date(now.getFullYear(),0,1);
        
        $scope.ratio = (now - thisNewYear) / (nextNewYear - thisNewYear);
        $scope.remain = 1 - $scope.ratio;

        var r = $scope.ratio;
        $scope.oneDay = new Date(1000*(thisNewYear/1000 + 24*60*60*r))
        calcDecimals();
        
        var d = now.getFullYear() + 200000.0*(r-1.0);
        $scope.humanYear = Math.abs(d);
        if (d >= 0) {
            $scope.human = "西暦 " + parseInt(d) + " 年"
        } else {
            $scope.human = "紀元前 " + parseInt(-d) + " 年"
        }

        $scope.$apply();
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

// export { myCtrl }

const bar = (a) => {
  return a+1
}

module.exports = bar
