const {readFile, writeFile} = require('fs').promises

const start = async ()=>{
    try{
        const x = await readFile('./file.txt', 'utf8')
        console.log(x)
        await writeFile('./result.txt',
        `Do you know : ${x}`,
        {flag : 'a'}
        )
    }
    catch(err){
        console.log(err)
    }
}

start()