'use strict';

function toArabic(romanNumeral) {
    const ERROR_VALUE = -1;
    if (isInvalidRoman(romanNumeral)) {
        return ERROR_VALUE;
    }
    return convertRomanToArabic(romanNumeral);
}

function convertRomanToArabic(romanNumeral) {
    return calculateUpToLastSymbol(romanNumeral) + valueOfLastSymbol(romanNumeral);
}

function calculateUpToLastSymbol(romanNumeral) {
    let sum = 0;
    const indexOfPenultimateSymbol = romanNumeral.length - 2;

    for (let i = 0; i <= indexOfPenultimateSymbol; i++) {
        let current = Roman[romanNumeral[i].toUpperCase()];
        let next = Roman[romanNumeral[i + 1].toUpperCase()];

        if (current < next) {
            sum -= current;
        } else {
            sum += current;
        }
    }

    return sum;
}

function valueOfLastSymbol(romanNumeral) {
    const i = romanNumeral.length - 1;
    return Roman[romanNumeral[i].toUpperCase()];
}

function isInvalidRoman(romanNumeral) {
    if (romanNumeral == null) {
        return true;
    }
    return isUnallowedSequence(romanNumeral.toUpperCase());
}

function isUnallowedSequence(romanNumeral) {
    return containsUnallowedNumeral(romanNumeral) || containsUnallowedSubstraction(romanNumeral)
        || containsUnallowedSubstractionRepetition(romanNumeral) || containsUnallowedRepetition(romanNumeral)
        || containsTooManyRepetitions(romanNumeral);
}

function containsUnallowedRepetition(romanNumeral) {
    return romanNumeral.match('(.*)(V{2,}|L{2,}|D{2,})(.*)');
}

function containsUnallowedSubstractionRepetition(romanNumeral) {
    return romanNumeral.match('(.*)(I{2,}V|I{2,}X|X{2,}L|X{2,}C|C{2,}D|C{2,}M|IX{1,}X|IX{1,}IX)(.*)');
}

function containsTooManyRepetitions(romanNumeral) {
    return romanNumeral.match('(.*)(I{4,}|X{4,}|C{4,}|M{4,})(.*)');
}

function containsUnallowedSubstraction(romanNumeral) {
    return romanNumeral.match('(.*)(VX|IL|VL|VC|LC|ID|VD|XD|LD|IM|VM|XM|LM|DM)(.*)');
}

function containsUnallowedNumeral(romanNumeral) {
    return romanNumeral.match('(.*)[A-Z](.*)') && romanNumeral.match('(.*)[^IVXLCDM](.*)');
}

const Roman = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
};

module.exports.romanToArabic = toArabic;
