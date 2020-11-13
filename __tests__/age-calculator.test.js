import { TestScheduler } from "jest";
import AgeCalculator from './../src/assets/age-calculator.js';

describe('AgeCalculator', () => {
  let user;
  let age = "09/06/1990";
  
  beforeEach(() => {
    user = new AgeCalculator(age);
  })
      test('should take user input and store in user object', () => {
        expect(user.age).toBe("09/06/1990")
  })
})