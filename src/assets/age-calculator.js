export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.relativeAge;
    this.expectancy;
  }
  mercuryAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * .24));
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * .62));
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * 1.88));
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * 11.6));
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  expectancy() {
    if (this.age > 80) {
      let yearsOver = Math.abs(this.age - 80);
      return (`You've lived ${yearsOver} years past your expected expiration date! Congrats!`);
    }
  }
}