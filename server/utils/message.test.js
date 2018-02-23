var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', (done) => {
    var from = 'yun';
    var text = 'hey';
    var res = generateMessage(from, text);

    expect(typeof res.createdAt).toBe('number');
    expect(res).toMatchObject({from, text});
    done();
  });
});
