function main(){
    
    var today = new Date();
    
    var H = today.getHours();
    
    var M = today.getMinutes();
    
    var S = today.getSeconds();
    
    M = CheckTime(M);
    
    S = CheckTime(S);
    
    var curr_time = H + ":" + M + ":" + S;
    
    console.log(curr_time);
    
    document.getElementById('Time').innerHTML = H + ":" + M + ":" + S;
    
}
function StartTime(){
    
    setInterval(main, 500);
    
}

function CheckTime(i){
    
    if (i < 10) {i = "0" + i}  // add zero in front of numbers < 10
    return i;
    
}