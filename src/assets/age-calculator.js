export default class AgeCalculator {
  constructor(name, age, planet) {
    this.name = name;
    this.age = Math.abs(age);
    this.relativeAge;
    this.expec = 80;
    this.planet = planet;
    this.planetWeight = new Map([
      ['Earth', 1],
      ['Mercury', 0.24],
      ['Venus', 0.62],
      ['Mars', 1.88],
      ['Jupiter', 11.6]
    ]);
  }
  planetAge() {
    let weight = this.planetWeight.get(this.planet);
    this.relativeAge = Math.floor(parseInt(this.age) * weight);
    let expected = (this.expec - this.age) * weight;
    if (Math.sign(expected) === 1) { 
      return(`${this.name} is ${this.relativeAge} years old on ${this.planet}, and they have ${expected} ${this.planet} years left to be groovy.`);
    } else {
      return (`${this.name} is ${this.relativeAge} years old on ${this.planet}, and they have been groovy ${Math.abs(expected)} ${this.planet} years more than we expected.`);
    }
  }
}