import { TestScheduler } from "jest";
import { AgeCalculator } from './../src/assets/age-calculator.js';

describe('AgeCalculator', () => {
  
  test('should take user input and store in user object', () => {
    const userInput = "09/06/1990"
    let aCal = new AgeCalculator(userinput)
    expect(aCal.age).toBe("10/10/1010")
  })
})