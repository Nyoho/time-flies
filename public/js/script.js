function myCtrl($scope, $timeout) {
    $scope.now;
    loop();

    function loop() {
        requestAnimationFrame(loop);
        calc();
    }

    function calc() {
        $scope.now = new Date();
        var now = $scope.now;
        var nextNewYear = new Date(now.getFullYear()+1,0,1);
        var thisNewYear = new Date(now.getFullYear(),0,1);
        
        $scope.r = (now - thisNewYear) / (nextNewYear - thisNewYear);

        var r = $scope.r;

        var d = new Date(1000*(thisNewYear/1000 + 24*60*60*r))
        // oneDayString = date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) + '.' + zzz_format( d.getMilliseconds() );
        
        // d = 2013 + 200000.0*(r-1.0);
        // if (d >= 0) {
        //     humanString = "西暦 " + parseInt(d) + " 年"
        // } else {
        //     humanString = "紀元前 " + parseInt(-d) + " 年"
        // }
        
        $scope.$apply();
    }

    $scope.tweet = function (){
        $scope.$broadcast('timer-start');
        $scope.timerRunning = true;
    };
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
      
      function loop(){
          calc();
          render();
          requestAnimationFrame(loop);
      }
      // loop();
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
