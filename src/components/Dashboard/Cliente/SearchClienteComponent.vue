<template>
    <div>
        <div id="cadastro-de-cliente">
            <div id="carregando" v-if="this.isLoading">
                <img src="/src/assets/assets/spinner.gif" alt="Logo Uniformes LA" style="width: 5%;">
            </div>

            <h2 style="margin-bottom: 50px;">Operação de Parceiros</h2>

            <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
                <button class="button back-color-black">
                    <router-link to="/cadastro-de-cliente">
                        <span>Cadastrar Cliente</span>
                    </router-link>                    
                </button>
                <button class="button back-color-black">
                    <router-link to="/consulta-de-cliente">
                        <span>Consultar Cliente</span>
                    </router-link>                      
                </button>

                <div style="border: 1px solid black; display: flex; align-items:center; box-sizing: border-box; padding: 0px 13px;">
                    <input type="text" v-model="Search" style="border: none;" placeholder="Nome do Cliente/Clube">
                    <unicon style="font-size: 4px!important;" name="search" fill="#181818" />
                </div>
            </div>        
            
            <h5>Listagem de Clientes</h5>
            <hr>
            
            <div class="row">
                <table border="0" style="width: 100%">
                    <thead style="width: 100%;">
                        <tr style="width: 100%; display: flex; flex-direction: row; flex-basis: 10; border-bottom: 1px solid rgba(0, 0, 0, 0.075);">
                            <td style="width: 30%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Cod</td>
                            <td style="width: 70%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Nome Completo</td>
                            <td style="width: 70%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Equipe/Empresa</td>
                            <td style="width: 100%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Vendedor</td>
                            <td style="width: 40%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Documento</td>
                            <td style="width: 30%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Cep</td>
                            <td style="width: 100%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">Cidade</td>
                            <td style="width: 30%;">Editar</td>
                            <td style="width: 30%;">Excluir</td>
                        </tr>                        
                    </thead>

                    <tbody style="100%">
                        <tr v-for="cli in ProdutosFiltrados" :key="cli.id" class="clienteLi" style="width: 100%; height: 40px; align-items: center; display: flex; flex-direction: row; flex-basis: 10; border-bottom: 1px solid rgba(0, 0, 0, 0.075);">
                            <td style="width: 30%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.id}}</td>
                            <td style="width: 70%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.Fullname}}</td>
                            <td style="width: 70%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.Clube}}</td>
                            <td style="width: 102%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.FantasyName}}</td>
                            <td style="width: 40%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.Document}}</td>
                            <td style="width: 30%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.postalCode}}</td>
                            <td style="width: 100%; display:flex; flex-grow: 10; box-sizing: border-box; padding: 5px 5px; font-size: 13px; font-weight: 600;">{{cli.Locale}}</td>
                            <td style="width: 30%;"><button @click="this.$router.push(`/editar-cliente/${cli.id}`)" class="button-delete">Editar</button></td>
                            <td style="width: 30%;"><button @click="ApagarCliente(cli.id)" class="button-delete">Excluir</button></td>
                        </tr>                                
                    </tbody>
                </table>                                             
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SearchClienteComponent',
    data(){
        return{
            isLoading: false,
            Search: '',
            fieldForm: {},
            clientList:[]
            }
        },
        
        created(){
            this.BuscaClienteSistema();
        },

        computed:{
            ProdutosFiltrados(){
                let __THIS__ = this;
                return this.clientList.filter(function (valor) {
                    return (valor.Fullname.match(__THIS__.Search))
                })
            }
        },
        
    methods:{
        BuscaCep(){
            if(String(this.fieldForm.addresData.postalCode).length >= 8){
                axios.get(`https://viacep.com.br/ws/${this.fieldForm.addresData.postalCode}/json/`)
                .then((responseSuccess) => {
                    console.log(responseSuccess.data)
                    this.fieldForm.addresData.publicPlace = responseSuccess.data.logradouro;
                    this.fieldForm.addresData.complement  = responseSuccess.data.complemento;
                    this.fieldForm.addresData.district    = responseSuccess.data.bairro;
                    this.fieldForm.addresData.locale      = responseSuccess.data.localidade;
                    this.fieldForm.addresData.state       = responseSuccess.data.uf;
                })
                .catch((responseFailed) => {
                    console.log(responseFailed)
                })
            }
        },

        BuscaClienteSistema(){
            let _vue = this;
            _vue.isLoading = !_vue.isLoading;            
            axios.get('http://agenciaemblemente.com/api/cliente/obterClientes')
            .then((ok)=>{

                this.clientList = ok.data;
                _vue.isLoading = !_vue.isLoading; 
            })
            .catch(()=>{
                _vue.isLoading = !_vue.isLoading; 
            })
        },

        ApagarCliente(value){
            axios.get(`http://agenciaemblemente.com/api/cliente/apagarCliente/${value}`).then((ok)=>{
                console.log(ok.data);
            })     
            
            this.BuscaClienteSistema();
        }
    }    
}
</script>

<style scoped>
    label{
        transition: 250ms;
    }

    .clienteLi{
        transition: 250ms ease-in-out;
    }

    .clienteLi:hover{
        background-color: #2d2e2e12;
    }

    .row{
        margin-top: 21px; 
        display: flex; 
        flex-direction: row; 
        justify-content: space-between; 
        flex-wrap: wrap;        
    }

    .input-350{
        width: 350px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;        
    }

    .input-150{
        width: 150px; 
        height: 40px; 
        outline:none; 
        box-sizing: border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px;      
    }

    .button{
        width: 200px;
        height: 40px;
        border: none;
        color:#fefefe;
        font-weight: 600;
        transition: 250ms;
        border-radius: 3px;
        margin-right: 21px;
    }  

    .back-color-black{
        background-color: #232425;
    }

    .back-color-black > a{
        color: #fefefe;
        text-decoration: none;
        background-color: #232425;
    }    

    .back-color-black:hover{
        cursor: pointer;
        background-color:#2d2e2e;
    }    

    .back-color-blue{
        background-color:#2170f4;
    }

    .back-color-blue:hover{
        cursor: pointer;
        background-color:#1a61db;
    }

    .back-color-red{
        background-color:#f42121;
    }    

    .back-color-red:hover{
        cursor: pointer;
        background-color:#db1a1a;
    }    

    .back-color-greenyellow{
        cursor: pointer;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.211);
        background-color: rgb(134, 255, 47);
    }

        .back-color-greenyellow > a{
        text-decoration: none;
        color: #fefefe;
    }

    .back-color-greenyellow:hover{
        cursor: pointer;
        background-color: rgb(138, 209, 31);
    }    

    hr{
        border: 1px solid rgba(0, 0, 0, 0.075);
    }

    #cadastro-de-cliente{
        width: 100%;
        height:100vh;
        text-align: left;
        padding: 50px 40px;
        box-sizing: border-box;
    }

    .input-check{
        background-color:rgba(172, 255, 47, 0.217);
    }

    .font-green{
        color: rgb(127, 200, 18)!important;
    }

    #carregando{
        left: 0;
        top:0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.262);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease-in-out 250ms;
    }

    .button-delete{
        background: #232425;
        border: none;
        color: #fefefe;
        padding: 4px;
        border-radius: 3px;
        font-weight: 700;  
        transition: 250ms ease-in-out;      
    }

    .button-delete:hover{
        background-color: #f42121;
    }

    @media screen and (max-width: 900px) {
        .row{
            margin-top: 21px; 
            display: flex; 
            flex-direction: column; 
            justify-content: space-between; 
        }  

        .input-350{
            width: 100%; 
            height: 40px; 
            outline:none; 
            box-sizing: border-box; 
            padding: 8px; 
            border: 1px solid rgba(0, 0, 0, 0.275); 
            border-radius: 3px; 
            transition: all 250ms; 
            flex-grow: 1;
            flex-shrink: 1;
        }     

        .input-150{
            width: 100%; 
            height: 40px; 
            outline:none; 
            box-sizing: border-box; 
            padding: 8px; 
            border: 1px solid rgba(0, 0, 0, 0.275); 
            border-radius: 3px;      
            flex-grow: 1;
            flex-shrink: 1;            
        }                 
    }
</style>