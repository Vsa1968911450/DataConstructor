function flowerNumer(n){ // n为位数 复杂度 10 ** n
    const digits = Array.from({length:10},(_,i) => i ** n)
    function isFlowerNumber(num){ // 判断是不是水仙花数
        let c = [...String(num)].reduce((a,b)=> {
           return  a + digits[b]
        },0)
        return c === num
    }
    console.log(isFlowerNumber(153))
    let res = []
    let start = 10 ** n
    let end = 10 ** (n+1) - 1  // 上下限度
    for(let i = start;i<end;i++){
        if(isFlowerNumber(i)){
            res.push(i)
        }
    }
    console.log(res)
    return res
}
flowerNumer(3)