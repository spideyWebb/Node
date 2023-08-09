// const fs = require('fs')

// console.log('start')

// fs.readFile('./file.txt', 'utf8', (err, data)=>{
//     if(err){
//         throw err
//     }
//     console.log(data)
// })

// console.log('end')2

const {readFile, writeFile} = require('fs')

readFile('./file.txt', 'utf8', (err, res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res)
    const x = res

    writeFile('./result.txt', `${x}`, (err, res)=>{
        if(err){
            console.log(err)
        }
    })    
})


