const express = require("express");
const app = express();
app.use(express.json());

const port = 3000;

const usuarioFernando = {
    id = 1,
    nome: 'Fernando',
    idade: 35
}

const usuarios = [usuarioFernando];

app.get('/usuario', (req, res)
=> {
    res.json(usuarios);
});

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
    
})