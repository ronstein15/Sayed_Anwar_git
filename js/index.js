// IIFE - Immediately Invoked Function Expression
(function () {
    var timeOfLaunch = new Date("March 24, 2020 10:30:00");
    var timer;

    function timeDifference() {
        var nowTime = new Date();
        var days, hrs, min, leftSec;

        var diff = (timeOfLaunch - nowTime) / 1000;
        diff = Math.floor(diff);

        days = Math.floor(diff / (24 * 60 * 60));
        leftSec = diff - days * 24 * 60 * 60;

        hrs = Math.floor(leftSec / (60 * 60));
        leftSec = leftSec - hrs * 60 * 60;

        min = Math.floor(leftSec / (60));
        leftSec = leftSec - min * 60;

        return {
            diff: diff,
            time: [days, hrs, min, leftSec]
        };
    }

    function paintDOM(timeLeft) {
        var counterSections = document.body.children[1].children[1].firstElementChild.firstElementChild.children;
        for (var i = 0; i < counterSections.length; i++) {
            var countDom = counterSections[i].children[0];
            var numstr = timeLeft[i].toString();
            if (timeLeft[i] < 10) {
                numstr = "0" + numstr;
            }
            countDom.innerText = numstr;
        }
    }

    function displayLaunchTime() {
        var launchTimeLeft = timeDifference();
        if (Math.floor(launchTimeLeft.diff) >= 0) {
            paintDOM(launchTimeLeft.time);
        } else {
            timer && clearInterval(timer);
            timer = null;
        }
    }

    displayLaunchTime();
    timer = setInterval(displayLaunchTime, 1000);

})();