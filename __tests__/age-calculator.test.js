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
      expect(user.dob).toBe("09/06/1990");
  })
    test('should calculate age in Mercury years', () => {
      let yearsOld = user.age;
      let mAge = mercuryAge(yearsOld);
      expect(mAge).toEqaul(7);
    })
})