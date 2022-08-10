import axios from 'axios';

export default class ProductService{
    GetAll_Size_Group(){
        let result = axios.get('http://agenciaemblemente.com/api/produto/grupoTamanho/obter',{"Access-Control-Allow-Origin": "*"});
        return result;
    }

    Insert_New_Product(objectData){
        let data = {
            "ref": objectData.Ref,
            "unit_sale": objectData.Unit,
            "size_group": objectData.Size,
            "cust_product":objectData.Cost,
            "product_group": objectData.Group,
            "description": objectData.Description
        }

        let result = fetch('http://agenciaemblemente.com/api/produto/cadastrarProduto',
        {method: 'POST', headers:{"Content-Type":"application/json"}, mode:'no-cors', body:JSON.stringify(data)})

        return result;
    }    

    Insert_New_Size_Group(objectData){
        let data = {
            "size_0":objectData.size_0,
            "size_1":objectData.size_1,
            "size_2":objectData.size_2,
            "size_3":objectData.size_3,
            "size_4":objectData.size_4,
            "size_5":objectData.size_5,
            "size_6":objectData.size_6,
            "size_7":objectData.size_7,
            "size_8":objectData.size_8,
            "size_9":objectData.size_9,
            "description":objectData.description
        }

        let result = fetch('http://agenciaemblemente.com/api/produto/grupoTamanho/cadastraGrupoTamanhoProduto',{method: 'POST', headers:{"Content-Type":"application/json"},mode:'no-cors', body:JSON.stringify(data)})
        return result;
    }

    Insert_New_Product_Group(objectData){
        let data = {
            'code':objectData.code,
            'status': objectData.status,
            'description': objectData.description
        }

        let result = fetch('http://agenciaemblemente.com/api/produto/grupoProduto/cadastraGrupoProduto',
        {method: 'POST', headers:{"Content-Type":"application/json"}, mode:'no-cors', body:JSON.stringify(data)})

        return result;
    }

    Insert_New_Unit(objectData){
        let data = {"code": objectData.code,"description": objectData.description}
        let sett = {method: 'POST', headers:{"Content-Type":"application/json"}, mode:'no-cors', body:JSON.stringify(data)};
        let result = fetch('http://agenciaemblemente.com/api/produto/unidadeVenda/cadastrarUnidadeVenda', sett);
        
        return result;
    }    

    Delete_Size_Group(value){
        let result = fetch(`http://agenciaemblemente.com/api/produto/grupoTamanho/apagaGrupoTamanhoProduto/${value}`,{method: 'post', mode:'no-cors'})
        return result;        
    }

    Delete_Unit(value){
        let result = fetch(`http://agenciaemblemente.com/api/produto/unidadeVenda/apagaUnidade/${value}`,{method: 'post', mode:'no-cors'})
        return result;        
    }    

    Delete_Product(value){
        let result = fetch(`http://agenciaemblemente.com/api/produto/apagarProduto/${value}`,{method: 'post', mode:'no-cors'})
        return result;        
    }      

    Delete_Product_Group(value)
    {
        let result = fetch(`http://agenciaemblemente.com/api/produto/grupoProduto/apagaGrupoProduto/${value}`,{method: 'post', mode:'no-cors'})
        return result;       
    }

    GetAll_Product_Group(){
        let result = axios.get('http://agenciaemblemente.com/api/produto/grupoProduto/obter',{"Access-Control-Allow-Origin": "*"});
        return result;
    }

    GetAll_Product(){
        let result = axios.get('http://agenciaemblemente.com/api/produto/obter',{"Access-Control-Allow-Origin": "*"});
        return result;
    }

    GetEspecific_Product(value){
        let result = axios.get(`http://agenciaemblemente.com/api/produto/obterProduto/${value}`,{"Access-Control-Allow-Origin": "*"});
        return result;
    }

    GetEspecific_NameProduct(value){
        let result = axios.get(`http://agenciaemblemente.com/api/produto/obterProdutoNome/${value}`,{"Access-Control-Allow-Origin": "*"});
        return result;
    }

    GetAll_Unit(){
        let result = axios.get('http://agenciaemblemente.com/api/produto/unidadeVenda/obter',{"Access-Control-Allow-Origin": "*"});
        return result;
    }    
}