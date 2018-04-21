var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'User1';
        var text = 'Test Message';
        var message = generateMessage(from, text);

        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Admin';
        var lat = 15;
        var long = 19;
        var url = 'https://www.google.com/maps?q=15,19'
        var res = generateLocationMessage(from, lat, long);

        expect(res).toInclude({from, url})
        expect(res.from).toBe(from);
        expect(res.createdAt).toBeA('number');

    });
});