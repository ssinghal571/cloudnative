import NumberConverter from '../lib/number-converter.js'
import { assert, expect } from 'chai'

describe('Number converter', () => {
  let numberConverter = null

  beforeEach(() => {
    numberConverter = new NumberConverter()
  })

  it('passes an example test', () => {
    // CHOICE: either use assert or expect im your tests
    // https://www.chaijs.com/api/
    assert.instanceOf(numberConverter, NumberConverter)
    expect(numberConverter).to.be.an.instanceof(NumberConverter)
  })

  it('should return 1 when passing i', () => {
   let result =  numberConverter.romanToArabic('i');
   expect(result).equals(1);
  })

  it('should return 5 when passing v', () => {
    let result =  numberConverter.romanToArabic('v');
    expect(result).equals(5);
   })

   it('should return 1000 when passing m', () => {
    let result =  numberConverter.romanToArabic('m');
    expect(result).equals(1000);
   })

   it('should return -1 when passing numerals that are not existing', () => {
    let result =  numberConverter.romanToArabic('a');
    expect(result).equals(-1);
   })

   it('should return -1 when passing empty string', () => {
    let result =  numberConverter.romanToArabic('');
    expect(result).equals(-1);
   })

   it('should return -1 when passing null values', () => {
    let result =  numberConverter.romanToArabic(null);
    expect(result).equals(-1);
   })

   it('should return -1 when passing combinations of numerals that are not allowed', () => {
    let result =  numberConverter.romanToArabic('ac');
    expect(result).equals(-1);
   })

   it('should return 2 when passing ii', () => {
    let result =  numberConverter.romanToArabic('ii');
    expect(result).equals(2);
   })

   it('should return 4 when passing iv', () => {
    let result =  numberConverter.romanToArabic('iv');
    expect(result).equals(4);
   })

   it('should return 14 when passing xiv', () => {
    let result =  numberConverter.romanToArabic('xiv');
    expect(result).equals(14);
   })
   
  // TODO: Add test cases for the production code.
})
