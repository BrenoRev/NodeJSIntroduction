const HomeModel = require('../models/HomeModel');

    // Create
    HomeModel.create({
    title: 'Harry potter',
    description: 'Filme do harry potter'
    }).then((dados) => {
        console.log('Criado com sucesso : ' + dados);
    }).catch(err => {
        console.log('Erro ao criar: ' + err);
    });

    // Read Where
    HomeModel.find({title: 'Harry potter'}).then((dados) => {
        console.log('Consulta por título com sucesso: ' + dados);
    }).catch(err => {
        console.log('Erro ao consultar: ' + err);
    });
    
    // Read
    HomeModel.find().then((dados) => {
        console.log('Todos os dados consultados com sucesso: ' + dados);
    }).catch(err => {
        console.log('Erro ao consultar: ' + err);
    });

    // Update
    HomeModel.updateOne({title: 'Harry potter'}, {
        title: 'Harry potter e a pedra filosofal',
        description: 'Filme do harry potter'
    }).then((dados) => {
        console.log('Atualizado com sucesso: ' + dados);
    }).catch(err => {
        console.log('Erro ao atualizar: ' + err);
    });

    // Delete
    HomeModel.deleteOne({title: 'Harry potter'}).then((dados) => {
        console.log('Deletado com sucesso: ' + dados);
    }).catch(err => {
        console.log('Erro ao deletar: ' + err);
    });

exports.index = (req, res) => {
    res.render('index');
}