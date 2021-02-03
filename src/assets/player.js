import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

export const storeState = (initialValues) => {
  let currentState = initialValues;
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
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
  
  
const initialValues = { name: "", health: 10, attack: 0, defense: 0}

const player = storeState(initialValues); //creates basic player object

const stateControl = storeState();
const playerStateControl = storeState();

// Actions
const player1 = changeState("Remus");

const attack = changeState("health")(-5)

const defend = changeState("defense")(3)

$(document).ready(function() {

  $('#attack').click(function() {
    const newState = stateControl(attack);
    $('health-value').text(`Hit! Health is now ${newState.health}`


}