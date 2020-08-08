
var userPoints = 0;
var computerPoints= 0;
const optionsGameArray = ['Rock', 'Paper', 'Scissors'];
const rockBtn = document.getElementById('Rock');
const paperBtn = document.getElementById('Paper');
const scissorsBtn = document.getElementById('Scissors');
const userResult = document.getElementById('user-points');
const computerResult = document.getElementById('computer-points');
const modalElement = document.getElementById('exampleModalLong');
const userSelectContent = document.getElementById('user-selection');
const computerSelectContent = document.getElementById('computer-selection');

function animationSelect(){
    userSelectContent.parentElement.classList.add('animation-selection');
    setTimeout(function(){ userSelectContent.parentElement.classList.remove('animation-selection'); }, 2000);
}

function computerPlay(){
    let randomOptionGame = Math.floor(Math.random() * optionsGameArray.length);
    let computerChoice = optionsGameArray[randomOptionGame];
    computerSelectContent.textContent = computerChoice;
    computerSelectContent.parentElement.classList.add('animation-selection');
    setTimeout(function(){ computerSelectContent.parentElement.classList.remove('animation-selection'); }, 2000);
    return computerChoice;
}

function btnHandler(){
    if(userPoints < 5 || computerPoints < 5){
        rockBtn.addEventListener("click", () => {
            game('Rock');
            animationSelect();
            userSelectContent.textContent = 'Rock';
        });
        
        paperBtn.addEventListener("click", () => {
            game('Paper');
            animationSelect();
            userSelectContent.textContent = 'Paper';
        });
        
        scissorsBtn.addEventListener("click", () => {
            game('Scissors');
            animationSelect();
            userSelectContent.textContent = 'Scissors';
        });

    } 
}

function userWins(){
    userPoints++,
    userResult.textContent = userPoints;
    if(userPoints == 5){
        computerResult.textContent = '0';
        userResult.textContent = '0';
        restartGame();
        $('#userWinsModal').modal('show');
    }
}

function computerWins(){
    computerPoints++,
    computerResult.textContent = computerPoints;
    if(computerPoints == 5){
        computerResult.textContent = '0';
        userResult.textContent = '0';
        restartGame();
        $('#computerWinsModal').modal('show');
    }
}

function singleRound(playerChoice, computerChoice){
    //rock options
    if(playerChoice === 'Rock' && computerChoice === 'Rock'){
        console.log('It´s a tie')
    } else if(playerChoice === 'Rock' && computerChoice === 'Paper'){
        console.log('You select Rock and IA selects Paper' + '\nYou WIN!');
        userWins();

    } else if(playerChoice === 'Rock' && computerChoice === 'Scissors'){
        console.log('You select Rock and IA selects Scissors' + '\nAI WIN!');
        computerWins();
    }

    // paper options
    if(playerChoice === 'Paper' && computerChoice === 'Paper'){
        console.log('It´s a tie')
    } else if(playerChoice === 'Paper' && computerChoice === 'Rock'){
        console.log('You select Paper and IA selects Rock' + '\nYou WIN!');
        userWins();
    } else if(playerChoice === 'Paper' && computerChoice === 'Scissors'){
        console.log('You select Paper and IA selects Scissors' + '\nAI WIN!');
        computerWins();
    }

    // scissors options
    if(playerChoice === 'Scissors' && computerChoice === 'Scissors'){
        console.log('It´s a tie')
    } else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        console.log('You select Scissors and IA selects Paper' + '\nYou WIN!');
        userWins();
    } else if(playerChoice === 'Scissors' && computerChoice === 'Rock'){
        console.log('You select Scissors and IA selects Rock' + '\nAI WIN!');
        computerWins();
    }

}

function game(playerChoice){
    singleRound(playerChoice, computerPlay());
    if(userPoints == 5){
        console.log('golaso');
        
    } else if(computerPoints == 5){
        console.log('perdistes');
       
    }
}

function restartGame(){
    userPoints = 0;
    computerPoints = 0;
}


btnHandler();