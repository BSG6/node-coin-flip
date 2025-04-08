//two players (one person and bot
//first player who clicks button is player one


  //heads button 
  //tails button
document.getElementById('heads').addEventListener('click', whichSide)
document.getElementById('tails').addEventListener('click', whichSide)

function whichSide(click){
    
    fetch(`/api?headsOrTails=${click.target.id}`)
        .then(response => response.json())
        .then((data) => {
            document.getElementById("scoreBot").innerHTML = data.botScore;
            document.getElementById("scorePlayer").innerHTML = data.playerScore;
            document.getElementById("winner").innerHTML = data.outcome;

        console.log(data);
    });

}


// player chooses head 

//     function playerHeads(){ 
//         // console.log('heads')
//         let botCoin = randomFlip();
//         checkWhoWon(botCoin,'Head');
//     }
// //player chooses tails
//     function playerTails(){
//         // console.log('tails')
//         let botCoin = randomFlip();
//         checkWhoWon(botCoin,'Tails');
//     }
//     function randomFlip(){
//         console.log('hi')
//         let randomCoin = Math.random();
//         let botCoin = "Heads";
//         if(randomCoin<.50){
//             console.log(randomCoin)
//             botCoin="Tails";
//         }
//         return botCoin;
//     }
//     function checkWhoWon(botsCoin,playersCoin){
//         if(botsCoin==playersCoin){
//             document.getElementById("winner").innerHTML = "There was tie";
//         }
//         else if(
//             (botsCoin=="Head" && playersCoin=="Tails") ||
//             (botsCoin=="Tails" && playersCoin=="Head") 
//             ){
//             increaseBotScore();
//         }
//         else{
//             increasePlayerScore();
//         }
//     }
//     function increaseBotScore(){
//         botScore+=1;
//         document.getElementById("scoreBot").innerHTML = botScore;
//          document.getElementById("winner").innerHTML ="Sorry, you're a loser";
//     }
//     function increasePlayerScore(){
//         playerScore+=1;
//         document.getElementById("scorePlayer").innerHTML = playerScore;

//         document.getElementById("winner").innerHTML = "Congrats, you're a winner";
//     }
//     // function displayCompleteMessage(msg){
//     //     document.getElementById("status").innerHTML = msg;
//     // }

// //display for score 
// //display for who won

// // functions
// // tells bot what to play
// //   check who won conditional 
// //increase bot score and display score
// //increase player score and display score
// // display win or loss
// //player choice