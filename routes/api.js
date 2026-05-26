//rotas para o cadastro do CRUD de usuários
//importar o express
const express = require('express');

//modularizar as rotas
const router = express.Router();

//conectar ao banco de dados
const db = require('../db');

// criar as rotas
//CREATE: POST (INSERT)
//rota para cadastrar: /api/users/
router.post('/', (req, res)=>{
    const {nome, email} = req.body;

    //executar a instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email] , 
    (err,result) =>{
        if(err) return res.status(500).send(err);
        res.status(201).json({id: result.insertId, nome, email });
    }
    );
    
})
module.exports = router;

//READ: GET (SELECT)
router.get('/', (req, res)=>{
    db.query('SELECT * FROM users',
        (err,results)=>{
            if(err) return res.status(500).send(err);
            res.json(results);
        })
})

//UPDATE: PUT (PACTH): (UPDATE)

//DELETE: