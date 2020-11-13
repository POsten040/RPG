import { TestScheduler } from "jest";
import AgeCalculator from './../src/assets/age-calculator.js';

describe('AgeCalculator', () => {
  let user;
  let age = 30;
  let name = "Patrick"
  
  beforeEach(() => {
    user = new AgeCalculator(name, age);
  })
    test('should take user input and store in user object', () => {
      expect(user.age).toBe(30);
  })
    test('should calculate age in Mercury years', () => {
      let yearsOld = user.age;
      let mAge = user.mercuryAge(yearsOld);
      expect(mAge).toEqual("Patrick is 7 years old on Mercury!");
  })
  test('should calculate age in Venus years', () => {
    let yearsOld = user.age;
    let vAge = user.venusAge(yearsOld);
    expect(vAge).toEqual("Patrick is 18 years old on Venus!");
  })
  test('should calculate age in Mars years', () => {
    let yearsOld = user.age;
    let mAge = user.marsAge(yearsOld);
    expect(mAge).toEqual("Patrick is 56 years old on Mars!");
  })
  test('should calculate age in Jupiter years', () => {
    let yearsOld = user.age;
    let jAge = user.jupiterAge(yearsOld);
    expect(jAge).toEqual("Patrick is 348 years old on Jupiter!");
  })
  test('should tell user how many years over average life expectancy they have lived', () => {
    user.age = 99;
    let diff = user.expectancy();
    expect(diff).toEqual("Wow, you've lived 20 years past your government estimated expiration date! Congratulations!");
  })
})