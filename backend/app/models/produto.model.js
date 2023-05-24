const sql = require("./db.js");
//Construtor
const ProdutoModel = function(produto){
    this.name = produto.nome;
    this.valor = produto.valor;
}
//Cria novio produto no banco 
ProdutoModel.create = (produto, result) => {
};
//Seleciona produto porID
ProdutoModel.findById = (produtoID, result) => {
};
//Seleciona todos os produtos
ProdutoModel.getAll = result => {
    sql.query("SELECT * FROM produtos", (err, res) => {
        if (err){
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("produto: ", res);
        result(null, res);
    })

};
//Atualizar produto por Id
ProdutoModel.updateById = (produtoID, produto, result) => {};
//Remover produto por id
ProdutoModel.remove = (produtoID, result) => {
};
//Remover todos os produtos
ProdutoModel.removeAll = (result) => {
};
module.exports = ProdutoModel;
