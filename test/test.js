/**
 * Created by lamberty on 8/28/14.
 */
var assert = require("assert");
var stack = require("../Stack/stack");

describe('stack', function(){
    describe('#isEmpty()', function(){
        it('should return true when stack is empty', function(){
            var stack1 = new stack();
            assert.equal(stack1.isEmpty(), true);
        })
    })
});

describe('stack', function(){
    describe('#isEmpty()', function(){
        it('should return false when stack is not empty', function(){
            var newstack = new stack();
            newstack.push("hello world");
            assert.equal(newstack.isEmpty(), false)
        })
    })
});

describe('stack', function(){
    describe('#push', function(){
        it('should return true if the variable is pushed', function(){
            var newstack = new stack();
            newstack.push("hello world");
            assert.equal(newstack.peek(), "hello world")
        })
    })
});

describe('stack', function(){
    describe('#peek', function(){
        it('should return true if the the function sees the value of the last index of the stack', function(){
            var newstack = new stack();
            newstack.push("first entyr");
            newstack.push("hello world");
            assert.equal(newstack.peek(), "hello world")
        })
    })
});

describe('stack', function(){
    describe('#pop', function(){
        it('should return true if the variable is popped', function(){
            var newstack = new stack();
            newstack.push("hello world");
            assert.equal("hello world", newstack.peek());
            newstack.pop();
            newstack.pop();
            assert.equal(true, newstack.isEmpty());
            newstack.push(0);
            newstack.push(1);
            newstack.pop();
            assert.equal(newstack.peek(), 0);
        })
    })
});