let expect;
before(async () => {
  const chai = await import('chai');
  expect = chai.expect;
});
const sinon = require('sinon');
const { output } = require('codeceptjs');
const ExpectHelper = require('./index');

describe('ExpectHelper', () => {
  let expectHelper;

  beforeEach(() => {
    expectHelper = new ExpectHelper();
    sinon.stub(output, 'step');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should assert equality', () => {
    expectHelper.expectEqual(1, 1);
  });

  it('should fail to assert equality', () => {
    expect(() => expectHelper.expectEqual(1, 2)).to.throw();
  });

  it('should assert inequality', () => {
    expectHelper.expectNotEqual(1, 2);
  });

  it('should fail to assert inequality', () => {
    expect(() => expectHelper.expectNotEqual(1, 1)).to.throw();
  });

  it('should assert deep equality', () => {
    expectHelper.expectDeepEqual({ a: 1 }, { a: 1 });
  });

  it('should fail to assert deep equality', () => {
    expect(() => expectHelper.expectDeepEqual({ a: 1 }, { a: 2 })).to.throw();
  });

  it('should assert deep inequality', () => {
    expectHelper.expectNotDeepEqual({ a: 1 }, { a: 2 });
  });

  it('should fail to assert deep inequality', () => {
    expect(() => expectHelper.expectNotDeepEqual({ a: 1 }, { a: 1 })).to.throw();
  });

  it('should assert containment', () => {
    expectHelper.expectContain([1, 2, 3], 2);
  });

  it('should fail to assert containment', () => {
    expect(() => expectHelper.expectContain([1, 2, 3], 4)).to.throw();
  });

  it('should assert non-containment', () => {
    expectHelper.expectNotContain([1, 2, 3], 4);
  });

  it('should fail to assert non-containment', () => {
    expect(() => expectHelper.expectNotContain([1, 2, 3], 2)).to.throw();
  });

  it('should assert starts with', () => {
    expectHelper.expectStartsWith('hello world', 'hello');
  });

  it('should fail to assert starts with', () => {
    expect(() => expectHelper.expectStartsWith('hello world', 'world')).to.throw();
  });

  it('should assert does not start with', () => {
    expectHelper.expectNotStartsWith('hello world', 'world');
  });

  it('should fail to assert does not start with', () => {
    expect(() => expectHelper.expectNotStartsWith('hello world', 'hello')).to.throw();
  });

  it('should assert ends with', () => {
    expectHelper.expectEndsWith('hello world', 'world');
  });

  it('should fail to assert ends with', () => {
    expect(() => expectHelper.expectEndsWith('hello world', 'hello')).to.throw();
  });

  it('should assert does not end with', () => {
    expectHelper.expectNotEndsWith('hello world', 'hello');
  });

  it('should fail to assert does not end with', () => {
    expect(() => expectHelper.expectNotEndsWith('hello world', 'world')).to.throw();
  });

  it('should assert JSON schema', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expectHelper.expectJsonSchema({ a: 1 }, schema);
  });

  it('should fail to assert JSON schema', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expect(() => expectHelper.expectJsonSchema({ a: '1' }, schema)).to.throw();
  });

  it('should assert JSON schema using AJV', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expectHelper.expectJsonSchemaUsingAJV({ a: 1 }, schema);
  });

  it('should fail to assert JSON schema using AJV', () => {
    const schema = { type: 'object', properties: { a: { type: 'number' } } };
    expect(() => expectHelper.expectJsonSchemaUsingAJV({ a: '1' }, schema)).to.throw();
  });

  it('should assert has property', () => {
    expectHelper.expectHasProperty({ a: 1 }, 'a');
  });

  it('should fail to assert has property', () => {
    expect(() => expectHelper.expectHasProperty({ a: 1 }, 'b')).to.throw();
  });

  it('should assert has a property', () => {
    expectHelper.expectHasAProperty({ a: 1 }, 'a');
  });

  it('should fail to assert has a property', () => {
    expect(() => expectHelper.expectHasAProperty({ a: 1 }, 'b')).to.throw();
  });

  it('should assert type', () => {
    expectHelper.expectToBeA('hello', 'string');
  });

  it('should fail to assert type', () => {
    expect(() => expectHelper.expectToBeA('hello', 'number')).to.throw();
  });

  it('should assert type (an)', () => {
    expectHelper.expectToBeAn([], 'array');
  });

  it('should fail to assert type (an)', () => {
    expect(() => expectHelper.expectToBeAn({}, 'array')).to.throw();
  });

  it('should assert matches regex', () => {
    expectHelper.expectMatchRegex('hello', /^h/);
  });

  it('should fail to assert matches regex', () => {
    expect(() => expectHelper.expectMatchRegex('hello', /^b/)).to.throw();
  });

  it('should assert length', () => {
    expectHelper.expectLengthOf([1, 2, 3], 3);
  });

  it('should fail to assert length', () => {
    expect(() => expectHelper.expectLengthOf([1, 2, 3], 2)).to.throw();
  });

  it('should assert empty', () => {
    expectHelper.expectEmpty([]);
  });

  it('should fail to assert empty', () => {
    expect(() => expectHelper.expectEmpty([1])).to.throw();
  });

  it('should assert true', () => {
    expectHelper.expectTrue(true);
  });

  it('should fail to assert true', () => {
    expect(() => expectHelper.expectTrue(false)).to.throw();
  });

  it('should assert false', () => {
    expectHelper.expectFalse(false);
  });

  it('should fail to assert false', () => {
    expect(() => expectHelper.expectFalse(true)).to.throw();
  });

  it('should assert above', () => {
    expectHelper.expectAbove(10, 5);
  });

  it('should fail to assert above', () => {
    expect(() => expectHelper.expectAbove(5, 10)).to.throw();
  });

  it('should assert below', () => {
    expectHelper.expectBelow(5, 10);
  });

  it('should fail to assert below', () => {
    expect(() => expectHelper.expectBelow(10, 5)).to.throw();
  });

  it('should assert length above', () => {
    expectHelper.expectLengthAboveThan([1, 2, 3, 4], 3);
  });

  it('should fail to assert length above', () => {
    expect(() => expectHelper.expectLengthAboveThan([1, 2], 3)).to.throw();
  });

  it('should assert length below', () => {
    expectHelper.expectLengthBelowThan([1, 2], 3);
  });

  it('should fail to assert length below', () => {
    expect(() => expectHelper.expectLengthBelowThan([1, 2, 3, 4], 3)).to.throw();
  });

  it('should assert equal ignoring case', () => {
    expectHelper.expectEqualIgnoreCase('hello', 'HELLO');
  });

  it('should fail to assert equal ignoring case', () => {
    expect(() => expectHelper.expectEqualIgnoreCase('hello', 'WORLD')).to.throw();
  });

  it('should assert deep members', () => {
    expectHelper.expectDeepMembers([{ a: 1 }], [{ a: 1 }]);
  });

  it('should fail to assert deep members', () => {
    expect(() => expectHelper.expectDeepMembers([{ a: 1 }], [{ a: 2 }])).to.throw();
  });

  it('should assert deep include members', () => {
    expectHelper.expectDeepIncludeMembers([{ a: 1 }, { b: 2 }], [{ a: 1 }]);
  });

  it('should fail to assert deep include members', () => {
    expect(() => expectHelper.expectDeepIncludeMembers([{ a: 1 }], [{ b: 2 }])).to.throw();
  });

  it('should assert deep equal excluding fields', () => {
    expectHelper.expectDeepEqualExcluding({ a: 1, b: 2 }, { a: 1, b: 3 }, ['b']);
  });

  it('should fail to assert deep equal excluding fields', () => {
    expect(() => expectHelper.expectDeepEqualExcluding({ a: 1, b: 2 }, { a: 2, b: 3 }, ['b'])).to.throw();
  });

  it('should assert matches pattern', () => {
    expectHelper.expectMatchesPattern({ a: 1, b: 2 }, { a: 1, b: 2 });
  });

  it('should fail to assert matches pattern', () => {
    expect(() => expectHelper.expectMatchesPattern({ a: 1, b: 2 }, { a: 2, b: 3 })).to.throw();
  });
});
