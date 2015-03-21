/**
 * Created by vz on 3/17/15.
 */
var assert = require('assert');
var Queue = require('./../queue');

describe('Queue', function () {
    var queue;
    beforeEach(function () {
        console.log('beforeEach1');
        queue = new Queue();
    });

    describe('enqueue', function () {
        it('should contain 1', function () {
            queue.enqueue('1');
            assert.equal('1', queue.toString());
        });
        it('should contain 1,2', function () {
            queue.enqueue('1');
            queue.enqueue('2');
            assert.equal('1,2', queue.toString());
        });
    });

    describe('dequeue', function () {

        //queue.enqueue('1');
        //queue.enqueue('2');

        it('should return 1', function () {
            assert.equal('1', queue.dequeue());
        });

        it('should return 2', function () {
            assert.equal('2', queue.dequeue());
        });
    });
});
