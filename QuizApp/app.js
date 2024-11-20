const questions = [
    {
      question: "What is the capital of France?",
      a:"Berlin",
      b:"Madrid",
      c:"Paris",
      d:"Rome",
      answer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      a:"Earth",
      b:"Mars",
      c:"Jupiter",
      d:"Venus",
      answer: "Mars"
    },
    {
      question: "What is the largest mammal?",
      a:"Elephant",
      b:"Blue Whale",
      c:"Giraffe",
      d:"Shark",
      answer: "Blue Whale"
    },
  ]
/////////////////////////////////////////////////////////////////////
  let index=0;
  const total=questions.length;
  let correct=0;
  let wrong=0;
  const quesBox=document.getElementById("quesBox")
  const options=document.querySelectorAll('.options')

/////////////////////////////////////////////////////////////////////////////
  const loadQuestion=()=>
  {
    if(index==total) return endQuiz();
    reset(); //to reset so that no option is preselected 

    const data=questions[index];
    quesBox.innerText=`${index+1}. ${data.question}`
    options[0].nextElementSibling.innerText=data.a;
    options[1].nextElementSibling.innerText=data.b;
    options[2].nextElementSibling.innerText=data.c;
    options[3].nextElementSibling.innerText=data.d;
  }
 
//////////////////////////////////////////////////////////////////////
  const submitQuiz=()=>
  {
    const data=questions[index]
   const ans=getAnswer()
   if(ans==data.answer)
   {
    correct++;
   }
   else 
   {
    wrong++;
   }
   //to move to the next question
   index++;
   loadQuestion();
   return;

  }

/////////////////////////////////////////////////////////////////////////
  const getAnswer=()=>
  {
    let ans;
options.forEach(
    (input)=>
    {
        if(input.checked)
        {
         ans=input.nextElementSibling.innerText;
        }
    }
)
return ans;
  }

//////////////////////////////////////////////////////////////////////
  const reset=()=>
  {
    options.forEach(
        (input)=>{
            input.checked=false;
        }
    )
  }

/////////////////////////////////////////////////////////////////////
const endQuiz=()=>
{
document.getElementById("box").innerHTML=`
<h3>Thank you !</h3>
<h2>Your Score:${correct}/${total}</h2>
`
}

loadQuestion();  //initial call