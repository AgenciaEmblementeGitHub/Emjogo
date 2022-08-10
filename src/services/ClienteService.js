import axios from 'axios';
export default class ClienteService{
    ObterClienteCnpj(Documento){
        let resultado = axios.get(`http://agenciaemblemente.com/api/cliente/cliente/obterClienteCnpj/${Documento}`);
        return resultado;
    }

    ObterClienteCpf(Documento){
        let resultado = axios.get(`http://agenciaemblemente.com/api/cliente/cliente/obterClienteCpf/${Documento}`);
        return resultado;
    }

    ObterDadosCliente(Documento){
        let resultado = axios.get(`http://agenciaemblemente.com/api/cliente/obterDadosCliente/${Documento}`);
        return resultado;
    }    

    CadastrarClienteSistema(Objeto){  
        let requestData = Objeto;
        return fetch('http://agenciaemblemente.com/api/cliente/cadastrarCliente', {
            method: 'POST', 
            mode: 'no-cors', 
            body: `Data=${JSON.stringify(requestData)}`, 
            headers:{'Content-type':'application/x-www-form-urlencoded'}
        });
    }
}