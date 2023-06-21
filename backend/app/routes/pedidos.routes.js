module.exports = app => {
    const pedidoController = require("../controllers/pedido.controller");
    //Rota para criar um novo registro pedido
    app.post("/pedidos", pedidoController.create);
    //Buscar todos os registros de pedidos
    app.get("/pedidos", pedidoController.findAll);
    //Buscar apenas um registro de pedido
    app.get("/pedidos/:pedidoId", pedidoController.findById);
    //Alterar um registro de pedido
    app.put("/pedidos/:pedidoId", pedidoController.update);
    //Excluir um regstro de pedido
    app.delete("/pedidos/:pedidoId", pedidoController.delete);
    //Excluir todos os registros de pedido
    app.delete("/pedidos", pedidoController.deleteAll);
}

