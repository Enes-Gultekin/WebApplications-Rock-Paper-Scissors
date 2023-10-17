const rock_var = document.getElementById("rock_button");
const paper_var = document.getElementById("paper_button");
const scis_var = document.getElementById("scissors_button");
const paragraph = document.createElement("p");
const random_number = Math.floor(Math.random() * 2 + 1);
const objects = ["rock", "paper", "scissors"];

console.log(random_number);
