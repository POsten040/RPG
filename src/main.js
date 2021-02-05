import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css';
import { storeState, healYourSelf,  getHurtALot, changeState } from './assets/player.js';

// changeState
// const initialValues = { name: "", health: 10, attack: 0, defense: 0};

// const player = storeState(initialValues); //creates basic player object

// const stateControl = storeState();
// const playerStateControl = storeState();

// Actions
// const player1 = changeState("Remus");
// player1.name="Remus";

// const attack = changeState("health")(-5);
const updateHealth = changeState("health");
// const defend = changeState("defense")(3);
const underpants = { name: "Captain Underpants", health: 10, attack: 3, defense: 4};
const anime = { name: "Cool Anime Hair", health: 10, attack: 9, defense: 2};
const waluigi = { name: "Waluigi", health: 15, attack: 5, defense: 1};
  
const initialValues = { name: "", health: 10, attack: 0, defense: 0, specialAttack: ""};
let player1StateControl;
let player2StateControl;
$(document).ready(function() {
  // $('#attack').click(function() {
  //   const newState = stateControl(attack);
  //   $('health-value').text(`Hit! Health is now ${newState.health}`);
  // });
  
  
  //PLAYER ONE
});

  $("#p1-hurt").click(function(){
    const player2 = player2StateControl(changeState("health")(-9));
      $("#p2-health-value").text(`${player2.health}`);
      console.log(player2);
    // const newState = player1(getHurtALot);
  });
  $("#p1-heal").click(function() {
    const player1 = player1StateControl(changeState("health")(5));
    $("#p1-health-value").text(`${player1.health}`);
    console.log(player1);
  });
  $("#p1-createCharacter").submit(function(event) {
    event.preventDefault();
    const id = $("input[name='p1-class']:checked").val();
    console.log(id);
    
      if( id === "p1-underpants"){
        player1StateControl = storeState(underpants);
        const player1 = player1StateControl();
        $("#p1-name-value").text(`${player1.name}`);
        $("#p1-health-value").text(`${player1.health}`);
        $("#p1-attack-value").text(`${player1.attack}`);
        $("#p1-defense-value").text(`${player1.defense}`);
        
        
      } else if (id === "p1-anime"){
        player1StateControl = storeState(anime);
        const player1 = player1StateControl();
        $("#p1-name-value").text(`${player1.name}`);
        $("#p1-health-value").text(`${player1.health}`);
        $("#p1-attack-value").text(`${player1.attack}`);
        $("#p1-defense-value").text(`${player1.defense}`);
        
        
      } else if (id === "p1-waluigi"){
        player1StateControl = storeState(waluigi);
        const player1 = player1StateControl();
        $("#p1-name-value").text(`${player1.name}`);
        $("#p1-health-value").text(`${player1.health}`);
        $("#p1-attack-value").text(`${player1.attack}`);
        $("#p1-defense-value").text(`${player1.defense}`);
    
  }
  //PLAYER TWO
  
  $("#p2-hurt").click(function(){
    const player1 = player1StateControl(changeState("health")(-9));
      $("#p1-health-value").text(`${player1.health}`);
      console.log(player1);
    // const newState = player1(getHurtALot);
  });
  $("#p2-heal").click(function() {
    const player2 = player2StateControl(changeState("health")(5));
    $("#p2-health-value").text(`${player2.health}`);
    console.log(player2);
  });
  $("#p2-createCharacter").submit(function(event) {
    event.preventDefault();
    const id = $("input[name='p2-class']:checked").val();
    console.log(id);
    
      if( id === "p2-underpants"){
        player2StateControl = storeState(underpants);
        const player2 = player2StateControl();
        $("#p2-name-value").text(`${player2.name}`);
        $("#p2-health-value").text(`${player2.health}`);
        $("#p2-attack-value").text(`${player2.attack}`);
        $("#p2-defense-value").text(`${player2.defense}`);
        
        
      } else if (id === "p2-anime"){
        player2StateControl = storeState(anime);
        const player2 = player2StateControl();
        $("#p2-name-value").text(`${player2.name}`);
        $("#p2-health-value").text(`${player2.health}`);
        $("#p2-attack-value").text(`${player2.attack}`);
        $("#p2-defense-value").text(`${player2.defense}`);
        
        
      } else if (id === "p2-waluigi"){
        player1StateControl = storeState(waluigi);
        const player2 = player2StateControl();
        $("#p2-name-value").text(`${player2.name}`);
        $("#p2-health-value").text(`${player2.health}`);
        $("#p2-attack-value").text(`${player2.attack}`);
        $("#p2-defense-value").text(`${player2.defense}`);
    
      }
    });
  });
