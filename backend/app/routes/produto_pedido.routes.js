module.exports = app => {

    const produtos_pedidosController = require("../controllers/produto_pedido.controller");
    //Rota para criar um novo registro Produto
    app.post("/produtos_pedidos", produtos_pedidosController.create);
    //Buscar todos os registros de Produtos
    app.get("/produtos_pedidos", produtos_pedidosController.findAll);
    //Buscar apenas um registro de Produto
    app.get("/produtos_pedidos/:produtos_pedidosId", produtos_pedidosController.findById);
    //Alterar um registro de Produto
    app.put("/produtos_pedidos/:produtos_pedidosId", produtos_pedidosController.update);
    //Excluir um registro de Produto
    app.delete("/produtos_pedidos/:produtos_pedidosId", produtos_pedidosController.delete);
    //Excluir todos os registros de Produto
    app.delete("/produtos_pedidos", produtos_pedidosController.deleteAll);

}