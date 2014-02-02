// var this.myapp = angular.module("myapp", ["ngRoute", "ngAnimate"]);
function myCtrl($scope, $timeout) {
    $scope.Math = window.Math;
    loop();

    function zerofill(x, prec) {
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
        
        var d = 2013 + 200000.0*(r-1.0);
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

    $scope.flip = function() {
    }
}

$(function(){
      var current = $('#current-time');
      var ratio = $('#ratio');
      var remain = $('#remain');
      var oneDay = $('#one-day');
      var human = $('#human');
      var r = 0.0;
      var now = new Date();
      var oneDayString = "";
      var humanString = "";

      var zzz_format = function(num) {
          return ( num < 10 ) ? '00' + num : ( ( num < 100 ) ? '0' + num : num );
      };

      var date_format = function(num) {
          return ( num < 10 ) ? '0' + num : num;
      };
      
      var calc = function() {
          now = new Date();
          var nextNewYear = new Date(now.getFullYear()+1,0,1);
          var thisNewYear = new Date(now.getFullYear(),0,1);

          r = (now - thisNewYear) / (nextNewYear - thisNewYear);
          var d = new Date(1000*(thisNewYear/1000 + 24*60*60*r))
          oneDayString = date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) + '.' + zzz_format( d.getMilliseconds() );

          d = 2013 + 200000.0*(r-1.0);
          if (d >= 0) {
              humanString = "西暦 " + parseInt(d) + " 年"
          } else {
              humanString = "紀元前 " + parseInt(-d) + " 年"
          }

      }

      function render(){
          var d = now;
          var s = "" + d.getFullYear() + '年' + date_format( d.getMonth() + 1 ) + '月' + date_format( d.getDate() )+ '日 ' + date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) + '.' + zzz_format( d.getMilliseconds() );;
          current.text(s);
          ratio.text((r * 100.0).toFixed(7));
          remain.text(((1-r) * 100.0).toFixed(7));
          oneDay.text(oneDayString);
          human.text(humanString);
      }
      
  });

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
