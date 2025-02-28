      

let qu = document.querySelectorAll(".lab")


qu.forEach( (event ,index)=> {
console.log(event)

})



function checkAnswer(){
    let qu = document.querySelectorAll(".lab")
let re =document.querySelector(".result")
    let total_que =15
   
    let score =0
qu.forEach( (qusestion ,index)=> {
    
    console.log(qu)
    let selectedOption = document.querySelector(`input[name="q${index+1}"]:checked`); // Get selected radio button

if (selectedOption && selectedOption.value === "right") {
    score+=1;

    console.log(selectedOption)
} 



re.innerHTML=`✅you got ${score} out of ${total_que}  `
})
console.log(score)


}
