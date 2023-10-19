const game_buttons = document.querySelectorAll("#buttons");
//selects all elements in the id but careful: "#"
const result_game = document.getElementById("results");
let player;
const objects = ["rock", "paper", "scissors"];

const paragraph = document.createElement("p");
game_buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const random_number = Math.floor(Math.random() * 3) + 1;
    player = button.textContent;
    player = player.toLowerCase();
    console.log(`computers number: ${random_number}`);
    console.log(`computers object: ${objects[random_number - 1]}`);
    console.log(`player: ${player}`);
    cond(random_number);
    result_game.appendChild(paragraph);
  })
);

function cond(random_number) {
  if (
    (player === "rock" && random_number === 3) ||
    (player === "paper" && random_number === 1) ||
    (player === "scissors" && random_number === 2)
  ) {
    paragraph.textContent = `You Won: The Player="${player}" and The Computer= "${
      objects[random_number - 1]
    }"`;
  } else if (player === objects[random_number - 1]) {
    paragraph.textContent = `Draw: The Player="${player}" and The Computer= "${
      objects[random_number - 1]
    }"`;
  } else {
    paragraph.textContent = `You lost: The Player="${player}" and The Computer= "${
      objects[random_number - 1]
    }"`;
  }
  return paragraph;
}
function loading_screen() {}
