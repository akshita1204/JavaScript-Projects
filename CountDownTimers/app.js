const endDate="20 November 2024 10:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input");

function clock()
{
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000; //to convert from millisec as defalut is millisecond

    if(diff<0) return;
    //convert into days
    inputs[0].value=Math.floor(diff/3600/24);
    //convert into hours
    inputs[1].value=Math.floor((diff/3600)%24);
    //convert into minutes
    inputs[2].value=Math.floor((diff/60)%60);
    //convert inot seconds
    inputs[3].value=Math.floor((diff)%60);


}
clock()
/*
1 day=24hrs
1hr=60min
1 min=60sec
60 min=3600sec
 */
setInterval(
()=>{clock()}
)
