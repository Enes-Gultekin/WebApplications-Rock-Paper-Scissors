const rock = document.getElementById("rock_button");
const paper = document.getElementById("paper_button");
const scissors = document.getElementById("scissors_button");
const game_buttons = document.querySelectorAll("selector");
const paragraph = document.createElement("p");
const random_number = Math.floor(Math.random() * 2 + 1);
const objects = ["Rock", "Paper", "Scissors"];
const result_sentence = document.getElementById("results");
let player;

game_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    player = game_buttons.textContent;
    init();
  })
);
function init() {
  console.log(objects[random_number]);
  console.log(player);
  if (objects[random_number] == player) {
    paragraph.textContent = `Draw: ${player} ${objects[random_number]}`;
  } else if (
    (player === "Rock" && random_number === "3") ||
    (player === "Paper" && random_number === "1") ||
    (player === "Scissors" && random_number === "2")
  ) {
    paragraph.textContent = `you won ${player} ${objects[random_number]}`;
  } else {
    paragraph.textContent = `You lost: ${player} ${objects[random_number]}`;
  }
  return result_sentence.appendChild(paragraph);
}
