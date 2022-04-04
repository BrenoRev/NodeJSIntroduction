const axios = require('axios');

    exports.getLivros = async (req, res) => {
        console.log("Requisição feita");
        res.send(axios.get('http://my-json-server.typicode.com/maujor/livros-json/livros')
        .then(response => {
            console.log("Resposta recebida");
            return response;
        })
        .catch(error => {
            console.log("Erro na requisição");
            return error;
        }));
    }

    
