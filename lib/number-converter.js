const Roman = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1
}

export default class NumberConverter {
  romanToArabic(romanNumeral) {
    const ERROR_VALUE = -1
    if (!romanNumeral || this.#isInvalidRoman(romanNumeral)) {
      return ERROR_VALUE
    }
    return this.#convertRomanToArabic(romanNumeral)
  }

  #convertRomanToArabic(romanNumeral) {
    return this.#calculateUpToLastSymbol(romanNumeral) + this.#valueOfLastSymbol(romanNumeral)
  }

  #isInvalidRoman(romanNumeral) {
    return this.#isUnallowedSequence(romanNumeral.toUpperCase())
  }

  #calculateUpToLastSymbol(romanNumeral) {
    let sum = 0
    const indexOfPenultimateSymbol = romanNumeral.length - 2

    for (let i = 0; i <= indexOfPenultimateSymbol; i++) {
      let current = Roman[romanNumeral[i].toUpperCase()]
      let next = Roman[romanNumeral[i + 1].toUpperCase()]

      if (current < next) {
        sum -= current
      } else {
        sum += current
      }
    }

    return sum
  }

  #valueOfLastSymbol(romanNumeral) {
    const i = romanNumeral.length - 1
    return Roman[romanNumeral[i].toUpperCase()]
  }

  #isUnallowedSequence(romanNumeral) {
    return this.#containsUnallowedNumeral(romanNumeral) || this.#containsUnallowedSubstraction(romanNumeral)
      || this.#containsUnallowedSubstractionRepetition(romanNumeral) || this.#containsUnallowedRepetition(romanNumeral)
      || this.#containsTooManyRepetitions(romanNumeral)
  }

  #containsUnallowedRepetition(romanNumeral) {
    return romanNumeral.match('(.*)(V{2,}|L{2,}|D{2,})(.*)')
  }

  #containsUnallowedSubstractionRepetition(romanNumeral) {
    return romanNumeral.match('(.*)(I{2,}V|I{2,}X|X{2,}L|X{2,}C|C{2,}D|C{2,}M|IX{1,}X|IX{1,}IX)(.*)')
  }

  #containsTooManyRepetitions(romanNumeral) {
    return romanNumeral.match('(.*)(I{4,}|X{4,}|C{4,}|M{4,})(.*)')
  }

  #containsUnallowedSubstraction(romanNumeral) {
    return romanNumeral.match('(.*)(VX|IL|VL|VC|LC|ID|VD|XD|LD|IM|VM|XM|LM|DM)(.*)')
  }

  #containsUnallowedNumeral(romanNumeral) {
    return romanNumeral.match('(.*)[A-Z](.*)') && romanNumeral.match('(.*)[^IVXLCDM](.*)')
  }
}
