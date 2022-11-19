const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./cont/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./cont/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result

        writeFile('./cont/result-async.txt',`here is the result ${first}${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('doing the current task')
    })
})
})
console.log('starting the next task')
