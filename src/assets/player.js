import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export const storeState = (initialValues) => {
  let currentState = initialValues;
  return (stateChangeFunction = state => state, playerName) => {
    const newState = stateChangeFunction(currentState, playerName);
    currentState = {...newState};
    return newState;
  }
}
export const addPlayerToState = (defaultPlayerValueObj) => {
    return (playerName) => {
      return (state) => ({
        ...state,
        [playerName] : defaultPlayerValueObj
      })
    }
  }

export const changeState = (prop) => {
    return (value) => {
      return (state) => ({
        ...state,
        [prop] : (state[prop] || 0) + value
      })
    }
  }
  
  
const initialValues = { name: "", health: 10, attack: 0, defense: 0, specialAttack: ""}

const player = storeState(initialValues); //creates basic player object

const stateControl = storeState();
const playerStateControl = storeState();

// Actions
// const input = $("")... 

const updateState = storeState();

const initialGameValues = {numberOfPlayersAlive: 0, numberOfPlayersDead: 0};
const newPlayer2 = addPlayerToState(initialGameValues.name)("Waluigi");
console.log(newPlayer2);

const gameMaster = storeState(initialGameValues);
const addPlayerToGame = changeState("numberOfPlayersAlive")(1);
const playerDies = changeState("numberOfPlayersDead")(1);

// const assignName = changeState("name")(playerName);

const getHurtALot = changeState("health")(-9);

// const getHurtALot = updateHealth(-9);
// const newPlayerState = player1StateControl(getHurtALot);

const healYourself = changeState("health")(5);

// const attack = changeState("health")(-5)

// const defend = changeState("defense")(3)
