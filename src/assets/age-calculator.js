export default class AgeCalculator {
  constructor(name, age, planet) {
    this.name = name;
    this.age = Math.abs(age);
    this.relativeAge;
    this.planet = planet
    this.planetWeight = new Map([
      ['Earth', 1],
      ['Mercury', 0.24],
      ['Venus', 0.62],
      ['Mars', 1.88],
      ['Jupiter', 11.6]
    ])
}
  planetAge() {
    let weight = this.planetWeight.get(this.planet);
    this.relativeAge = Math.floor(parseInt(this.age) * weight)
    console.log(`${this.name} is ${this.relativeAge} years old on ${this.planet}`)
  }
  mercuryAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get['Earth']);
    return (`${this.name} is ${this.relativeAge} years old on Mercury!`);
  }
  venusAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get['Mercury']);
    return (`${this.name} is ${this.relativeAge} years old on Venus!`);
  }
  marsAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get['Venus']);
    return (`${this.name} is ${this.relativeAge} years old on Mars!`);
  }
  jupiterAge() {
    this.relativeAge = Math.floor(parseInt(this.age) * this.planet.get['Mars']);
    return (`${this.name} is ${this.relativeAge} years old on Jupiter!`);
  }
  // expectancy() {
  //   let planets = this.planet;
  //   for (let [key, value] of Object.entries(planets)) {
  //     let this.age * value;
  //   }
  //     return `Here's your life expectancy on different planets: You've lived ${eAge} years past your expected demise on Earth, ${meAge} years past your expected demise on Mercury, ${vAge} years past your expected demise on Venus, ${maAge} years past your expected demise on Mars, and ${jAge} years past your expected demise on Jupiter!`;
  //   }
  //   else {
  //     return `Here's your life expectancy on different planets: You have ${eAge} years left on Earth, ${meAge} years left on Mercury, ${vAge} years left on Venus, ${maAge} years left on Mars, and ${jAge} years left on Jupiter!`;
  //   }
  // }
}