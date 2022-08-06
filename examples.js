const fs = require('fs')
const path = require('path')
const dotenv = require('dotenv')
const os = require('os')
const http = require('http')
const Emitter = require('events')
const { resolve } = require('path')
dotenv.config()

const emitter = new Emitter();


// console.log(process.pid)
// console.log(process.env.PORT)
// console.log(process.env.NODE_ENV)

// if (Math.random() > 0.5) {
//     while (true) {

//     }
// } else {
//     console.log('program execution completed')
//     process.exit()
// }

// console.log(path.join('first', 'second', 'third')) 
// console.log(path.join(__dirname, 'first', 'second', 'third'))
// console.log(path.join(__dirname, '..'))
// console.log(path.resolve('first', 'second')) // absolute path 


// const siteUrl = 'http://localhost:8080/users  ?id=51234'
// const url = new URL(siteUrl)
// console.log(url);

// fs.mkdirSync(path.resolve(__dirname, 'dir'))
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive:true})

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log('Folder is created')
// })

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'example.txt'), 'dsa dsadas 43242 adfs 234 dew dew', (err) => {
//     if (err) {
//         console.log(err)
//         throw err 
//     }
//     console.log('data ws written into file')
// })

// fs.appendFile(path.resolve(__dirname, 'example.txt'), 'new data', (err) => {
//     if (err) {
//         console.log(err)
//         throw err  
//     }
//     console.log('data was added into file')
// })

// const writeFileAsync = async (path, data) => new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
//     if (err) reject(err.message)
//     resolve()
// }))

// const appendFileAsync = async (path, data) => new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
//     if (err) reject(err.message)
//     resolve()
// }))

// const readFileAsync = async (path, data) => new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
//     if (err) reject(err.message)
//     resolve(data)
// })) 

// const removeFileAsync = async (path, data) => new Promise((resolve, reject) => fs.rm(path, (err, data) => {
//     if (err) reject(err.message)
//     resolve(data)
// })) 

// writeFileAsync(path.resolve(__dirname, 'example.txt'), 'some content')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'example.txt'), '1'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'example.txt'), '2'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'example.txt'), '3'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'example.txt'), '4'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'example.txt'), '5'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'example.txt')))
//     .then(data => console.log(data))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'example.txt')))
//     .catch(err => console.log(err))


// const text = process.env.TEXT || ''

// writeFileAsync(path.resolve(__dirname, 'txt.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'txt.txt')))
//     .then(data => data.split(' ').length)
//     .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `${count}`))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'txt.txt')))

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus()); 

// const callback = (data, first, second) => {
//     console.log(data);
//     console.log(first);
//     console.log(second);
// }

//  emitter.on('message', (data, first, second) => {
//     console.log(data);
//     console.log(first);
//     console.log(second);
//  })

//  emitter.once('message', callback)

//  emitter.emit('message', 'some data', 1, 2)
//  emitter.emit('message', 'some data', 1)

//  emitter.removeAllListeners()  
//  emitter.removeListener('message', callback)  

// const readableStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

// readableStream.on('data', (chunk) => {
//     console.log(chunk);
// })

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))

// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')  
// }

// writableStream.end()

// const PORT = process.env.PORT || 5000
const PORT =  5000

const server = http.createServer((req, res) => {
    // res.writeHead(200, {
    //     'Content-Type': 'application/json'
    // })

    // if (req.url === '/users') return res.end(JSON.stringify({id:1, name:'some name'}))
    // if (req.url === '/posts') return res.end('list of posts')

    res.end(req.url)
})

server.listen(PORT, () => console.log(`server started on PORT ${PORT}`))

console.log(4+4+4);