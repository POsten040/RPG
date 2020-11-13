export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.relativeAge;
    this.expect;
    this.planet = new Map([
      ['E', 0],
      ['Me', 0.24],
      ['V', 0.62],
      ['Ma', 1.88],
      ['J', 11.6]
    ]);
  }
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get('Me'));
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
      this.planet.forEach(planet => {
        let yearsOver = Math.floor(Math.abs((this.age - 80) * planet[i]));
        return (`You've lived ${yearsOver} years past your expected expiration date! Congrats!`);
      }
    }
  }
}