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
    let diff = Math.abs(this.age - 80);
    if (this.age > 80) {
      return `Wow, you've lived ${diff} years past your government estimated expiration date! Congratulations!`
    }
    else return `Good news! You've got ${diff} years left to live your dreams!(by my estimation)`;
  }
  planetExpect() {
    let diff = Math.abs(this.age - 80);
    let eAge = Math.floor(diff * this.planet[0]);
    let meAge = Math.floor(diff * this.planet[1]);
    let vAge = Math.floor(diff * this.planet[2]);
    let maAge = Math.floor(diff * this.planet[3]);
    let jAge = Math.floor(diff * this.planet[4]);
    return `Check it out, this is your life expectancy on different planets: You're ${eAge} years old on Earth, ${meAge} years old on Mercury, ${vAge} years old on venus, ${maAge} years old on Mars, and ${jAge} years old on Jupiter!`;
  }
}