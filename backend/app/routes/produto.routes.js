module.exports = app => {
    const produtoController = require("../controllers/produto.controller");
    //Rota para criar um novo registro Produto
    app.post("/produtos", produtoController.create);
    //Buscar todos os registros de Produtos
    app.get("/produtos", produtoController.findAll);
    //Buscar apenas um registro de Produto
    app.get("/produtos/:produtoId", produtoController.findById);
    //Alterar um registro de Produto
    app.put("/produtos/:produtoId", produtoController.update);
    //Excluir um regstro de Produto
    app.delete("/produtos/:produtoId", produtoController.delete);
    //Excluir todos os registros de Produto
    app.delete("/produtos", produtoController.deleteAll);
}

