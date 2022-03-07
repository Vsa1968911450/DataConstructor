//  封装一个字典
function Dic(){
    this.items = {}
    // 字典添加键值对
    Dic.prototype.set = function(key,value){
        this.items[key] = value
    }
    // has是否有某个属性
    Dic.prototype.has = function(key){
        return this.items.hasOwnProperty(key)
    }
    // 移除元素
    Dic.prototype.remove = function(key){
        if(!(this.has(key))) return false
        delete this.items[key]
        return true
    }
    // 根据key获取value
    Dic.prototype.get = function(key){
        return this.has(key)? this.items[key]:undefined
    }
    // 获取所有的key
    Dic.prototype.keys = function(){
        return Object.keys(this.items)
    }
    // 获取所有的value
    Dic.prototype.values = function(){
        return Object.values(this.items)
    }
}