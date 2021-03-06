/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.input = []
    this.output = []
    this.size = 0
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x)
    this.size += 1
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if (this.output.length === 0) {
        for (var i = 0; i < this.size; i++) {
            this.output.push(this.input.pop())
        }
        this.size = 0
        this.input = []
    }
    return this.output.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if (this.output.length === 0) {
        for (let i = 0; i < this.size; i++) {
            this.output.push(this.input.pop())
        }
        this.size = 0
        this.input = []
    }
    return this.output[this.output.length - 1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.output.length === 0 && this.size === 0)
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */