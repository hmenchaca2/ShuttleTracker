$(document).ready(function() {
	
	


var TIMER1 = new (function() {

    // Timer speed in milliseconds
    var incrementTime = 1000;

    // Current timer position in milliseconds
    var currentTime = 150000;
    
    // Start the timer
    $(function() {
        $watch = $('#watch');
        TIMER1.Timer = $.timer(updateTimer, incrementTime, true);  
    });

    // Output time and increment
    function updateTimer() {
        var timeString = formatTime(currentTime);
        $watch.html(timeString);
        currentTime -= incrementTime;
    }

    // Common functions
	function pad(number, length) {
		var str = '' + number;
		while (str.length < length) {str = '0' + str;}
		return str;
	}

    function formatTime(time) {
	    time = time / 10;
	    var min = parseInt(time / 6000),
	        sec = parseInt(time / 100) - (min * 60);
	    return (min > 0 ? pad(min, 2) : "00") + ":" + pad(sec, 2);
	}


});});