const validateBrackets = require('../validateBrackets');

describe('Function validateBrackets', ()=>{
  it('returns true if brackets are balanced and false if unbalanced', ()=>{
    let stringArr = ['{}', '{}(){}', '()[[Extra Characters]]', '(){}[[]]', '{}{Code}[Fellows](())', '[({}]', '(](', '{(})'];

    let expectedResults = [true, true, true, true, true, false, false, false];
    let results = stringArr.map(s => validateBrackets(s));

    expect(results).toEqual(expectedResults);
  });
});
