function Queue() {
    // 属性  基于数组实现
    this.arr = []
    // 方法
    Queue.prototype.enqueue = function(val){
        return this.arr.push(val)
    }
    Queue.prototype.dequeue = function(){
        return this.arr.shift()  // pop删除尾部元素 shift删除第一个元素
    }
    Queue.prototype.size = function(){
        return this.arr.length
    }
    Queue.prototype.isEmpty = function(){
       return this.arr.length === 0
    }
}