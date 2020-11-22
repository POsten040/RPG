import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import $ from "jquery";
import AgeCalculator from "./assets/age-calculator.js";

$("#user-input").submit(function(event) {
  event.preventDefault();
  let inputName = $("#user-name").val();
  let inputAge = $("#user-date").val();
  let inputPlanet = $("input[type=radio]:checked").val();
  console.log(inputPlanet);
  let user = new AgeCalculator(inputName, inputAge, inputPlanet)
  $("#results").html("<span>" + user.planetAge() + "</span>");
});