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

    describe('enqueue()', function () {
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

    describe('dequeue()', function () {

        beforeEach(function () {
            queue.enqueue('1');
            queue.enqueue('2');
        });

        it('should return 1', function () {
            assert.equal('1', queue.dequeue());
        });

        it('should return 2', function () {
            queue.dequeue();
            assert.equal('2', queue.dequeue());
        });

        it('should return undefined', function () {
            queue.dequeue();
            queue.dequeue();
            assert.equal(undefined, queue.dequeue());
        });
    });

    describe('clear()', function () {

        it('queue should be empty', function () {
            queue.enqueue('1');
            queue.enqueue('2');
            queue.clear();
            assert.equal(undefined, queue.dequeue());
            assert.equal(0, queue.size());
            assert.equal(true, queue.isEmpty());
        });
    });

    describe('size()', function () {

        it('should return 0', function () {
            assert.equal(0, queue.size());
        });

        it('should return 2', function () {
            queue.enqueue('1');
            queue.enqueue('2');
            assert.equal(2, queue.size());
        });
    });

    describe('isEmpty()', function () {

        it('should return true', function () {
            assert.equal(true, queue.isEmpty());
        });

        it('should return false', function () {
            queue.enqueue('1');
            queue.enqueue('2');
            assert.equal(false, queue.isEmpty());
        });
    });
});