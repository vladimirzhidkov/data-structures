/**
 * Created by vz on 3/17/15.
 */
module.exports = function (){
    var items = [];
    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };
    this.clear = function () {
        items = []
    };
    this.size = function () {
        return items.length;
    };
    this.isEmpty = function () {
        return items.length == 0;
    };
    this.toString = function () {
        return items.toString();
    };
};