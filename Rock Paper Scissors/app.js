var user_score = 0;
var cpu_score = 0;
const user_score_span = document.getElementById("user-score");
const cpu_score_span = document.getElementById("cpu-score");
const scoreboard_div = document.querySelector(".scoreboard")
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function on_user_win(user_choice, cpu_choice) {
  user_score++;
  user_score_span.innerHTML = user_score;
  result_div.innerHTML = `${capitalizeFirstLetter(user_choice)} beats ${cpu_choice}. You win!`;
  document.getElementById(user_choice).classList.add("win-glow");

  setTimeout(() => document.getElementById(user_choice).classList.remove("win-glow"), 1000)
}

function on_user_loss(user_choice, cpu_choice) {
  cpu_score++;
  cpu_score_span.innerHTML = cpu_score;
  result_div.innerHTML = `${capitalizeFirstLetter(cpu_choice)} beats ${user_choice}. CPU wins!`;
  document.getElementById(user_choice).classList.add("lose-glow");

  setTimeout(() => document.getElementById(user_choice).classList.remove("lose-glow"), 1000)
}

function on_user_tie(user_choice, cpu_choice) {
  result_div.innerHTML = "It's a tie!";
  document.getElementById(user_choice).classList.add("tie-glow");

  setTimeout(() => document.getElementById(user_choice).classList.remove("tie-glow"), 1000)
}

function game_loop(user_choice) {
  const cpu_choices = ["rock", "paper", "scissors"]
  const cpu_choice = cpu_choices[Math.floor(Math.random() * cpu_choices.length)]

  const win_lose_table = {
    rock: ["scissors", "paper"],
    paper: ["rock", "scissors"],
    scissors: ["paper", "rock"]
  }

  if (user_choice == cpu_choice) {
    console.log(user_choice);
    console.log(cpu_choice);
    console.log("tie");
    on_user_tie(user_choice, cpu_choice)
  }
  else {
    if (win_lose_table[user_choice].indexOf(cpu_choice) == 0) {
      console.log(user_choice);
      console.log(cpu_choice);
      console.log("user wins");
      on_user_win(user_choice, cpu_choice)
    }

    else {
      console.log(user_choice);
      console.log(cpu_choice);
      console.log("cpu wins");
      on_user_loss(user_choice, cpu_choice);
    }
  }
}

function main() {
  rock_div.addEventListener('click', () => game_loop("rock"))
  paper_div.addEventListener('click', () => game_loop("paper"))
  scissors_div.addEventListener('click', () => game_loop("scissors"))
}

main();