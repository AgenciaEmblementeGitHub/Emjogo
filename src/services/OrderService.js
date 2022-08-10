import axios from 'axios';

export default class OrderService{
    getReport(payload){
        return axios.get(`http://agenciaemblemente.com/api/pedido/obterRelatorioPedido/${payload.data_inicial}/${payload.data_final}/${payload.situacao}`);
    }

    SetOrderOff(orderID){
        let request = {id: orderID};
        return fetch("http://agenciaemblemente.com/api/pedido/finalizarPedido", {method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(request)});
    }

    Get_Id(){
        return axios.get("http://agenciaemblemente.com/api/pedido/obterId");
    }

    Insert_New_Order(objectData){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/cadastraPedido`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }

    Update_Order(objectData){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/atualizaPedido`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;        
    }

    Insert_New_Order_item(objectData){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/cadastraPedidoItem`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }

    Insert_Into_Storage(objectData){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/cadastraProdutoEstoque`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }    

    AdjustStorage(objectData){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/ajustarProdutoEstoque`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }  

    Delete_Order(order){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/apagaPedido/${order}`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors'})
        return result;                
    }

    Delete_Order_Item(orderItem){
        let result = fetch(`http://agenciaemblemente.com/api/pedido/apagaPedidoItem/${orderItem}`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors'})
        return result;                
    }

    Change_Status_Pay(_numero_pedido, _status_pay){
        let objectData = {
            id: _numero_pedido,
            statusPay: _status_pay
        }

        let result = fetch(`http://agenciaemblemente.com/api/pedido/mudaStatusPagamento`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }

    Change_Status_Order(_numero_pedido, _status_order){
        let objectData = {
            id: _numero_pedido,
            statusOrder: _status_order
        }

        let result = fetch(`http://localhost/API.UniformesLA/pedido/mudaStatusPedido`,{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(objectData)})
        return result;
    }

    Get_Orders(){
        return axios.get("http://agenciaemblemente.com/api/pedido/obter");
    }

    Get_OrderBy_id(id)
    {
        return axios.get(`http://agenciaemblemente.com/api/pedido/obterPedidoPorId/${id}`);
    }

    Get_Order_Item(pedido){
        return axios.get(`http://agenciaemblemente.com/api/pedido/obterPedidoItem/${pedido}`);
    }

    Get_Storage_Item(pedido){
        return axios.get(`http://agenciaemblemente.com/api/pedido/obterItemEstoque/${pedido}`);
    }

    mudaPedido(numero, situacao){

        let result = fetch(`http://agenciaemblemente.com/api/pedido/alterarSituacaoPedido/${numero}/${situacao}`,{method: 'GET', headers:{"Content-Type":"application/json"},mode:'no-cors'})
        return result;        
    }
}