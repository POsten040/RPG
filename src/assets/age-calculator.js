export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.relativeAge;
    this.expect;
    this.planet = new Map(
    [
      [Earth, 1]
      [Mercury, .24]
      [Venus, .62]
      [Mars, 1.88]
      [Jupiter, 11.6]
    ]);
  }
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get(Earth));
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet[2]));
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet[3]));
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet[4]));
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  expectancy() {
    if (this.age > 80) {
      let yearsOver = Math.floor(Math.abs((this.age - 80) * this.planet[4]));
      return (`You've lived ${yearsOver} years past your expected expiration date! Congrats!`);
    }
  }
}