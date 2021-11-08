'use strict';

import NumberConverter from '../src/number-converter.js';
import { expect } from 'chai';

describe('Number converter', function () {
    let converter;

    beforeEach(function () {
        converter = new NumberConverter();
    });

    it('passes an example test', function () {
        expect(40 + 2).to.equal(42);
        // TODO: Add test cases for the production code.
    });
});
