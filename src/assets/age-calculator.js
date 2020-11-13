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
    let age = Math.floor((parseInt(this.age) * .62));
    return age;
  }
  marsAge() {
    let age = Math.floor((parseInt(this.age) * 1.88));
    return age;
  }
  jupiterAge() {
    let age = Math.floor((parseInt(this.age) * 11.6));
    return age;
  }
}