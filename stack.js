
module.exports = function Stack() {
	var items = [];
	this.push = function(e) {
		items.push(e);
	}
	this.pop = function() {
		return items.pop();
	}
	this.peek = function() {
		return items[items.length - 1];
	}
	this.isEmpty = function() {
		return items.length == 0;
	}
	this.size = function() {
		return items.length;
	}
	this.clear = function() {
		items = [];
	}
	this.toString = function() {
		return items.toString();
	}
}