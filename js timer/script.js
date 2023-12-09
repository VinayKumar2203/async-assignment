const endDate="20 December 2023 02:07 pm";
// const endDate=prompt("enter you time");
document.getElementById("endDate").innerText=endDate;

const inputs=document.querySelectorAll("input");
function clock() {
    const end =new Date(endDate);
    const now =new Date();
    const diff=(end - now)/1000;
    if (diff<0) return;
    // console.log(diff)
    inputs[0].value= Math.floor(diff/3600/24); //days
    inputs[1].value= Math.floor(diff/3600)%24;//hr
    inputs[2].value= Math.floor(diff/60)%60;//mint
    inputs[3].value= Math.floor(diff)%60;//sec
   
}
clock();

//  let setIntervalId= setInterval(() => {
//     clock()
// }, 1000);


let IntervalId;
/*
1day=24 hr
1hr=60min
60min=60*60=3600sec
*/
function start() {
    IntervalId= setInterval(() => {
            clock()
        }, 1000);
        // alert("your timer is start now")
        
}
function reset() {
    // alert("all thing are empty ")
    inputs[0].value="0"
    inputs[1].value="0"
    inputs[2].value="0"
    inputs[3].value="0"
}
function pause() {
    clearInterval(IntervalId)
    // alert("your timer is stop ")
}