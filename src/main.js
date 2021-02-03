import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { changeState, storeState  } from '../src/js/player.js';


// const initialValues = { name: "", health: 10, attack: 0, defense: 0};

// const player = storeState(initialValues); //creates basic player object

// const stateControl = storeState();
// const playerStateControl = storeState();

// Actions
// const player1 = changeState("Remus");
// player1.name="Remus";

// const attack = changeState("health")(-5);

// const defend = changeState("defense")(3);
const underpants = { name: "Captain Underpants", health: 10, attack: 3, defense: 4};
const anime = { name: "Cool Anime Hair", health: 10, attack: 9, defense: 2};
const waluigi = { name: "Waluigi", health: 15, attack: 5, defense: 1};

$(document).ready(function() {
  // $('#attack').click(function() {
  //   const newState = stateControl(attack);
  //   $('health-value').text(`Hit! Health is now ${newState.health}`);
  // });

  $("#createCharacter").submit(function(event) {
    event.preventDefault();
    console.log($("#class").val())
    let player1 = storeState(initialValues);
   //const playerName=changeState("Remus");//`$("#playerName").val()`);
    //console.log(playerName);
    //const newPlayer1State=player1(playerName);
    //console.log(newPlayer1State);
   player1 = changeState("name")($("#playerName").val());
    // player1.name=`$("#playerName").val()`;
    console.log(player1.name);
    // $('#playerName').text(newPlayer= changeState(`${player1.name}`));
    $('name-value').text(`Player's name is now ${player1.name}`);
  });





});

// const initialValues = {name: "", attack: 0, defense: 0};
// const player1 = storeState(initialValues); //name="",  health=0...


// // We create two functions using our function factory. We could easily create many more.
// const feed = changeState("soil"); //const playerName=changeState("name")
// const blueFood = feed(5); //const player1Name=playerName("Remus")
// const newFernState = fern(blueFood); //newPlayerState=player1(player1Name)
// console.log("add 5 to soil", newFernState);
// // newFernState = {soil: 5, light: 0, water: 0}
