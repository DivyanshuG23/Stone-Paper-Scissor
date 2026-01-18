let userScore=0;
let compScore=0;
//math.random() * 10 (jis no. se multiply kr dete hae uske ek no. phale tak ke 
// liye hum random No. print kr skte hae);
//exxample:-2.3452453,9.32471842,float value htaane ke liye ,
// we used=Math.floor(Math.random() * 10);
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=() => {
    const options=["rock","paper","scissors"];
    const rdxIdx=Math.floor(Math.random() * 3);
    return options[rdxIdx];
};
const drawGame=()=> {
    // console.log("game was draw");
    msg.innerText="Game was draw,play again";
    msg.style.backgroundColor="blue";
};
const showWinner=(userWin,UserChoice,compChoice)=> {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
       msg.innerText=`you win! your choice beats ${compChoice}`;
       msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("Computer win");
        msg.innerText=`You lost. ${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor="red";

    }
};
const playGame=(UserChoice) => {
    console.log("user choice= ", UserChoice);
    //Generate computer choice
    const compChoice=genCompChoice();
    console.log("computer choice= ", compChoice);
    if(UserChoice===compChoice){
        //Draw Game
        drawGame();  
    }else{
        let userWin=true;
        if(UserChoice==="rock"){
            //scissors,paper
            userWin=compChoice==="paper" ? false : true;
        }else if(UserChoice==="paper") {
            //rock,scissors
            UserChoice=compChoice==="scissors" ? false : true;
        }
        else{
            //rock paper
            userWin=compChoice==="rock" ? false : true;
        }
        showWinner(userWin,UserChoice,compChoice);
        }
        };    


choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const UserChoice=choice.getAttribute("id");
        console.log("choice was clicked", UserChoice);
        playGame(UserChoice); 
    });
});