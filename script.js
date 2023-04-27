
let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

//decide timer is start or stop
let timer = false;

function start() {
    timer = true;
    stopWatch();
}


function stop() {
    timer = false;
}



function reset() {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    document.getElementById("min").innerHTML = "00"
    document.getElementById("hr").innerHTML = "00"
    document.getElementById("sec").innerHTML = "00"
    document.getElementById("count").innerHTML = "00"
}

function stopWatch() {

    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1;
            count = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0;
        }
        
        let hrstring=hr;
        let secstring=sec;
        let minstring=min;
        let countstring=count;

        //when the hr,min,sec is less then 2 digit the add a string o in the front
        if(hr<10){
            hrstring="0"+hrstring
        }
        if(sec<10){
            secstring="0"+secstring
        }
        if(min<10){
            minstring="0"+minstring
        }
        if(count<10){
            countstring="0"+countstring
        }
        document.getElementById("min").innerHTML = minstring
        document.getElementById("hr").innerHTML = hrstring
        document.getElementById("sec").innerHTML = secstring
        document.getElementById("count").innerHTML = countstring
        setTimeout("stopWatch()", 10)
    }
}