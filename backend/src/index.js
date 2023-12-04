const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const port = 3001
const app = express()

app.use(express.json())
app.use(cors())

async function conectDatabase () {
    await mongoose.connect(
        'mongodb+srv://TavaresFabiano:FabianoSilva@cluster0.uqad9yi.mongodb.net/?retryWrites=true&w=majority')
}

const Usuario = mongoose.model ('Usuário', {
    nome: String,
    email: String,
    nascimento: String,
    endereco: String,
    password: String,
    confirmacao: String
})



app.post("/", async (req, res) =>{
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        nascimento: req.body.nascimento,
        endereco: req.body.endereco,
        password: req.body.password,
        confirmacao: req.body.confirmacao
    })
    await usuario.save()
    return res.send(usuario)
}
)

app.get('/', async (req, res) => {
    const usuarios = await Usuario.find()
    return res.send(usuarios)
})


app.put("/:id", async(req, res) => {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        email: req.body.email,
        nascimento: req.body.nascimento,
        endereco: req.body.endereco,
        password: req.body.password,
        confirmacao: req.body.confirmacao
    }, {
        new: true
    })
    return res.send(usuario)
})

app.delete("/:id", async(req, res) => {
    const usuario = await Usuario.findByIdAndDelete(req.params.id)
    return res.send(usuario)
})


    
conectDatabase()
    .then(() => {
        app.listen(port, () => console.log('Funcionando'))
    })
    .catch((error) => console.log ("Não foi possível conectar"))