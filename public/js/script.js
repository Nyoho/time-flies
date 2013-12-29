var calc = function() {
    // puts "今年(" + now.year.to_s + "年)もあと "+((1-ratio)*100).round(4).to_s+ " % "

    // puts ""+(ratio*100).round(4).to_s+ " % DONE"

    // puts "1日でたとえると " + ((this_new_year + 24*60*60*ratio).strftime "%H:%M:%S")
    // print "人類20万年の歴史でいうと西暦"
    // print ((now.year - 200000) + 200000*ratio).to_i
    // print "年\n"
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

      var date_format = function(num) {
          return ( num < 10 ) ? '0' + num  : num;
      };
      
      var calc = function() {
          now = new Date();
          var nextNewYear = new Date(now.getFullYear()+1,0,1);
          var thisNewYear = new Date(now.getFullYear(),0,1);

          r = (now - thisNewYear) / (nextNewYear - thisNewYear);
          var d = new Date(1000*(thisNewYear/1000 + 24*60*60*r))
          oneDayString = date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) + '.' + date_format( d.getMilliseconds() );

          d = 2013 + 200000.0*(r-1.0);
          if (d >= 0) {
              humanString = "西暦 " + parseInt(d) + " 年"
          } else {
              humanString = "紀元前 " + parseInt(-d) + " 年"
          }

      }

      function render(){
          var d = now;
          var s = "" + d.getFullYear() + '年' + date_format( d.getMonth() + 1 ) + '月' + date_format( d.getDate() )+ '日 ' + date_format( d.getHours() ) + ':' + date_format( d.getMinutes() ) + ':' + date_format( d.getSeconds() ) + '.' + date_format( d.getMilliseconds() );;
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
      loop();
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
