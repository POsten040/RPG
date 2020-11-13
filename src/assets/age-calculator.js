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
    ])};
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get('Me'));
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet.get('V')));
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet.get('Ma')));
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor((parseInt(this.age) * this.planet.get('J')));
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  expectancy() {
    if (this.age > 80) {
      let expec = Math.floor(Math.abs((this.age - 80)));
      return (`You've lived ${expec} years past your expected expiration date! Congrats!`);
      };
    }
  }
