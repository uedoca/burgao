const ProdutoModel = require("../models/produto.model.js");

exports.create = (req, res) => {}
exports.findAll = (req, res) => {
    ProdutoModel.getAll((err, data) => {
        if(err){
            res.status(500).send({
                messahe: err.message || "Ocorreu erro desconhecido!"
            });
        } else{
            res.send(data);
        }
    });
}
exports.findById = (req, res) => {}
exports.update = (req, res) => {}
exports.delete = (req, res) => {} 
exports.deleteAll = (req, res) => {}

