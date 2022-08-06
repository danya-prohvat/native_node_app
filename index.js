const http = require('http')
const url = require('url');
const mongoose = require('mongoose')
const uuid = require('uuid');
const Emitter = require('events');

const emitter = new Emitter()
const User = mongoose.model('Workers', mongoose.Schema({name: String, id: String, role: String}));
const PORT = 4000

const getUser = async (id) => id ? await User.find({"id": id}) : await User.find()
const creteUser = async ({name, role}) => await User.create({ name:name, id:uuid.v4() ,role:role})
const updateUser = async (id, {name, role}) => await User.findOneAndUpdate({ "id": id }, { name:name, role:role})
const deleteUser = async (id) => await User.deleteOne({"id": id})

const setupHeaders = (res) => res.writeHead(200, {
    'Content-type':'application/json'
})

const takeData = async (req) => {
    let body = '';
    await req.on('data', (chunk) => {
        body += chunk;
    })
    return JSON.parse(body) 
}

const server = http.createServer( async (req, res) => {
    const {pathname, query} = url.parse(req.url, true);
    
    emitter.emit(`[${pathname}]:[${req.method}]`, req, query, res) 
})


emitter.on('[/users]:[GET]', async (req, query, res) => {
    setupHeaders(res)

    if (query.id) res.end(JSON.stringify(await getUser(query.id)))
    else res.end(JSON.stringify(await getUser()))
})
emitter.on('[/users]:[DELETE]', async (req, query, res) => {
    setupHeaders(res)

    await deleteUser(query.id)
    res.end(JSON.stringify(await getUser()))
})
emitter.on('[/users]:[POST]', async (req, query, res) => {
    const data = await takeData(req)
    setupHeaders(res)

    await creteUser({name:data.name, role:data.role})
    res.end(JSON.stringify(await getUser()))
})
emitter.on('[/users]:[PATCH]', async (req, query, res) => {
    const data = await takeData(req)
    setupHeaders(res)
            
    await updateUser(query.id, {name:data.name, role:data.role})
    res.end(JSON.stringify(await getUser()))
})

const start = async () => {
    try {
       await mongoose.connect('mongodb+srv://prokhtvatilov:1234@cluster0.nbahm.mongodb.net/?retryWrites=true&w=majority')
       server.listen(PORT, () => console.log(`PORT: ${PORT}`))
    } catch (e) {
        console.log(e); 
    }
}

start() 