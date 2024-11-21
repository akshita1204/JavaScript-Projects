const slide=document.querySelectorAll(".slide");
var counter=0;
const totalSlides = slide.length;
slide.forEach(
    (slide,index)=>
    {
        slide.style.left=`${index*100}%`
    }
)


const goNext=()=>
{
    if (counter < totalSlides - 1) {
        counter++;
        slideImage();
    }
}

const goPrev=()=>
    {
        if (counter > 0) {
            counter--;
            slideImage();
        }
    }
    

const slideImage=()=>
{
    slide.forEach(
        (slide)=>
        {
            slide.style.transform=`translateX(-${counter*100}%)`;
        }
    )
}