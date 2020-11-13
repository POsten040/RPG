export default class AgeCalculator {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  mercuryAge() {
    let age = Math.floor((parseInt(this.age) * .24));
    return age;
  }
}