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
      expect(mAge).toEqual(7);
  })
  test('should calculate age in Venus years', () => {
    let yearsOld = user.age;
    let mAge = user.venusAge(yearsOld);
    expect(mAge).toEqual(18);
  })
  test('should calculate age in Mars years', () => {
    let yearsOld = user.age;
    let mAge = user.marsAge(yearsOld);
    expect(mAge).toEqual(56);
  })
})