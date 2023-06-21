const sql = require("./db.js");
//Construtor
const PedidoModel = function(Pedido){
    this.hora = Pedido.hora;
    this.status= Pedido.status;
}
//Cria novo Pedido no banco
PedidoModel.create = (Pedido, result) => {
    sql.query("insert into Pedidos set ?", Pedido, (err, res) => {
        if (err){
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Pedido criado: ", {idPedidos: res.insertId, ...Pedido});
        result(null, {idPedidos: res.insertId, ...Pedido});
    })
};

//Seleciona Pedido por ID
PedidoModel.findById = (PedidoId, result) => {
    sql.query("Select * from Pedidos where idPedidos = "+PedidoId, (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }
        if (res.length) {
            console.log("Pedido Encontrado", res[0]);
            result(null,res[0]);
        } else {
            result({type: "not_found"}, null);
            console.log("Pedido não encontrado");
        }
    })
};


//Seleciona todos os Pedidos
PedidoModel.getAll = result => {
    sql.query("SELECT * FROM Pedidos", (err, res) => {
        if (err) {
            console.log("erro: ", err);
            result(null, err);
            return;
        }

        console.log("Pedido: ", res);
        result(null, res);
    })
};
//Atualizar Pedido por id
PedidoModel.updateById = (PedidoId, Pedido, result) => {
    sql.query("UPDATE Pedidos SET hora = ?, status = ? WHERE idPedidos = ?",
              [Pedido.hora, Pedido.status, PedidoId], (err, res) => {
                if(err){
                    console.log("erro: ", err);
                    result(null, err);
                } else if (res.affectedRows == 0){
                    result({ typer: "not_found"}, null);
                } else {
                    console.log("Pedido atualizado: ", {idPedidos: PedidoId,...Pedido});
                    result(null, {idPedidos: PedidoId, ...Pedido});
                }
              });
};
//Remover Pedido por id
PedidoModel.remove = (PedidoId, result) => {
    sql.query("DELETE FROM Pedidos WHERE idPedidos = ?", PedidoId, (err, res) => {
        if(err) {
          console.log("erro: ", err);
          result(err, null)
        } else if (res.affectedRows == 0){
            result({ type: "not_found"}, null);
        } else {
            result(null, res);
        }
    });
};
//Remover todos os Pedidos
PedidoModel.removeAll = (result) => {
    sql.query("DELETE FROM Pedidos WHERE idPedidos = ?", PedidoId, (err, res) => {
        if(err) {
          console.log("erro: ", err);
          result(err, null)
        } else if (res.affectedRows == 0){
            result({ type: "not_found"}, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = PedidoModel;