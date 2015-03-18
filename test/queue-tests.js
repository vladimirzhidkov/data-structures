/**
 * Created by vz on 3/17/15.
 */
var assert = require('assert');
var Queue = require('./../queue');

describe('Queue', function () {
    var queue;
    beforeEach(function () {
        queue = new Queue();
    });

    describe('enqueue', function () {
        it('should contain one element', function () {
            queue.enqueue('1');
            assert.equal('1', queue.toString());
            queue.enqueue('2');
            assert.equal('1,2', queue.toString());
        });
    });
});
