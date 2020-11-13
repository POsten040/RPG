export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.relativeAge;
    this.expect;
    this.planet = [1, 0.24, 0.62, 1.88, 11.6]
  };
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[1]);
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[2]);
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[3]);
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet[4]);
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  expectancy() {
    if (this.age > 80) {
      this.planet.forEach(val, key, => {
        let pMod = this.age * val;
        this.expect = Math.floor(Math.abs((this.age - 80)));
        let yearsOver = this.expect * pMod;
        return (`You've lived ${yearsOver} years on planet ${this.planet.keys()} past your expected expiration date! Congrats!`);
      });
    }
  }
}
