const getcolor=()=>{
    //Hex Codes
    const randomNumber=Math.floor(Math.random()*16777215); //ek eisa num jo hexadecimal code bn sake
    console.log(randomNumber);
    const randomcode="#"+randomNumber.toString(16);
    console.log(randomcode);
    document.body.style.backgroundColor=randomcode; //to change the color
    document.getElementById("color-code").innerText=randomcode;

    //to copy the code
    navigator.clipboard.writeText(randomcode);
}
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
getcolor()