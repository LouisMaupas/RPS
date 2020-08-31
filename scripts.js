function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
  }
// timestamp = Math.round(+new Date() / 1000);

let displayHumanResult,
    displayComputerResult,
    playerScore = 0,
    computerScore = 0;

function start(){
    document.getElementById("game-start").removeAttribute("class");
    userName = prompt("Comment t'appelles-tu ?");
    document.getElementById("user-name").innerHTML = userName;
}

// DEROULEMENT DE LA PARTIE LE GESTIONNAIRE
function game(e){
    e.preventDefault();
    player = playerMove();
    document.getElementById("choice-player").innerHTML = displayHumanResult;
    computer = getRandomInt();
    displayComputerResult = displayResult(computer);
    document.getElementById("choice-computer").innerHTML = displayComputerResult;
    result();
}

document.getElementById("game-button").addEventListener("click", game)

function displayResult(e){
    if (e === 0){
        return ("Pierre")
    } else if (e === 1) {
        return ("Feuille")
    } else if (e === 2) {
        return ("Ciseaux")
    /*} else if (e === 3) {
        return ("Lézard")
    } else if (e === 4) {
        return ("Spock")*/
    } else {
        alert("error")
    }
}

function playerMove(){
    let player = Number(document.querySelector('input[name="choice"]:checked').value);
    displayHumanResult = displayResult(player);
    return player;
}

function result() {
    let battle = "" + player + computer;
    tie = "personne ! c'est un match nul !";
    switch (battle) {
        case "00":
        case "11":  
        case "22":  
            winner = tie;
            break;
        case "01":
        case "12": 
        case "20":   
            winner = "Ordinateur"
            computerScore ++;
            break;        
        case "02":
        case "10":
        case "21":
            winner = userName;
            playerScore ++;
            break;
            default:
          alert("Je n'ai pas compris !");
      }
    document.getElementById("winner").innerHTML = winner;
    document.getElementById("score-human").innerHTML = playerScore;
    document.getElementById("score-computer").innerHTML = computerScore;
    }
