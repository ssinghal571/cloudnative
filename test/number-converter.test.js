import NumberConverter from '../lib/number-converter.js'
import assert from 'assert/strict'

describe('Number converter', () => {
  let converter

  beforeEach(() => {
    converter = new NumberConverter()
  })

  it('passes an example test', () => {
    assert.ok(converter)
    // TODO: Add test cases for the production code.
  })
})
