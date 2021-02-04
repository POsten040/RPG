import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import { storeState  } from './assets/player.js';

// changeState
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
  
const initialValues = { name: "", health: 10, attack: 0, defense: 0, specialAttack: ""}

$(document).ready(function() {
  // $('#attack').click(function() {
  //   const newState = stateControl(attack);
  //   $('health-value').text(`Hit! Health is now ${newState.health}`);
  // });

  $("#createCharacter").submit(function(event) {
    event.preventDefault();
    const id = $("input[name='class']:checked").val();
    console.log(id);
    if( id === "underpants"){
      $("#name-value").text(`${underpants.name}`)
      $("#health-value").text(`${underpants.health}`)
      $("#attack-value").text(`${underpants.attack}`)
      $("#defense-value").text(`${underpants.defense}`)
    } else if (id === "anime"){
      $("#name-value").text(`${anime.name}`)
      $("#health-value").text(`${anime.health}`)
      $("#attack-value").text(`${anime.attack}`)
      $("#defense-value").text(`${anime.defense}`)
    } else if (id === "waluigi"){
      $("#name-value").text(`${waluigi.name}`)
      $("#health-value").text(`${waluigi.health}`)
      $("#attack-value").text(`${waluigi.attack}`)
      $("#defense-value").text(`${waluigi.defense}`)
    }
    // const player1 = storeState(initialValues);
    // console.log(player1);
    
    // const player1 = changeState("name")($("#playerName").val());
    //const playerName=changeState("Remus");//`$("#playerName").val()`);
    //console.log(playerName);
    //const newPlayer1State=player1(playerName);
    //console.log(newPlayer1State);
    // player1.name=`$("#playerName").val()`;
    // console.log(player1.name);
    // $('#playerName').text(newPlayer= changeState(`${player1.name}`));
    // $('name-value').text(`Player's name is now ${player1.name}`);
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
