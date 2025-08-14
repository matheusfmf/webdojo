const express = require('express')
const app = express()
const port = 3333

app.use(express.json())

const cors = require('cors')
// Habilita CORS para todas as origens
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Ninja do cypress!' })
})


app.post('/api/users/register', (req, res) => {

    const { name, email, password } = req.body

    if (!name) {
        return res.status(400).json({ error: 'Name is required' })
    }   
    if (!email) {
        return res.status(400).json({ error: 'Email is required' })
    }  
    if (!password) {
        return res.status(400).json({ error: 'Password is required' })
    }  
    console.log(req.body)
    return res.status(201).json({
        message: 'Usuário cadastrado com sucesso'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
