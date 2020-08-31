function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
  }
// timestamp = Math.round(+new Date() / 1000);

displayHumanResult = 9;
displayComputerResult = 9;
playerScore = 0;
computerScore = 0;

function start(){
    document.getElementById("game-start").removeAttribute("class");
    userName = prompt("Comment t'appelles-tu ?");
    document.getElementById("user-name").innerHTML = userName;
}

// DEROULEMENT DE LA PARTIE LE GESTIONNAIRE
function game(){
    player = playerMove();
    //displayHumanResult = displayResult(player);
    document.getElementById("choice-player").innerHTML = displayHumanResult;
    computer = getRandomInt();
    displayComputerResult = displayResult(computer);
    document.getElementById("choice-computer").innerHTML = displayComputerResult;
    result();
}

function displayResult(e){
    if (e === 0){
        return ("Pierre")
    } else if (e === 1) {
        return ("Feuille")
    } else if (e === 2) {
        return ("Ciseaux")
    } else {
        alert("error")
    }
}

function playerMove(){
    let player = Number(document.querySelector('input[name="choice"]:checked').value);
    return player;
}

function result() {
    let battle = "" + player + computer;
    tie = "personne ! c'est un match nul !";
    switch (battle) {
        case "00":
        case "11":  
        case "22":  
        alert("Match nul");
            winner = tie;
            break;
        case "01":
        case "12": 
        case "20":   
        alert("Victoire PC");
            winner = "Ordinateur"
            computerScore ++;
            break;        
        case "02":
        case "10":
        case "21":
            alert("Victoire HUMAIN");    
            winner = userName;
            playerScore ++;
            break;
            default:
          alert("Je n'ai pas compris !");
      }
    document.getElementById("winner").innerHTML = winner;
    }


document.getElementById("score-human").innerHTML = playerScore;
document.getElementById("score-computer").innerHTML = computerScore;