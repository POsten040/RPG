import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/styles.css";
import $ from "jquery";
import AgeCalculator from "./assets/age-calculator.js";

$("#age-input").submit(function(event) {
  event.preventDefault();
  let inputName = $("#user-name").val();
  let inputAge = $("#user-date").val();
  let user = new AgeCalculator(inputName, inputAge)
  $("#results").append(user.expectancy)
});