export default class PaymentMethodService{

    Get_Payment_Method(){
        return fetch("http://agenciaemblemente.com/api/metodosDePagamento", {method:'GET'});
    }
}