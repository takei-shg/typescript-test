/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../src/Main.ts" />

describe('Main', () => {

    describe('#echo', () => {
        var str = "ganbaruzoi!!";

        it('returns the passed string', done => {
            chai.assert.deepEqual(Main.echo(str), str);
            done();
        });
    });
});
