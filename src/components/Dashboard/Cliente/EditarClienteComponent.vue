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
            </div>                  
            
            <h5>Dados Pessoais</h5>
            <hr>
            
            <div class="row">
                <div style="margin: 0px 21px 0px 0px">
                    <label for="fullName" style="font-size: 13px;" :class="{'font-green' : fieldForm.personalData.FullName != ''}">* Nome Completo:</label>
                    <div>
                        <input type="text" name="fullName" placeholder="Nome Completo" class="input-350" v-model="fieldForm.personalData.FullName" :class="{'input-check' : fieldForm.personalData.FullName != ''}">
                    </div>                    
                </div>

                <div style="margin: 0px 21px 0px 0px">
                    <label for="nickName" style="font-size: 13px;" :class="{'font-green' : fieldForm.personalData.Clube != ''}">* Equipe/Empresa:</label>
                    <div>
                        <input type="text" name="Equipe/Empresa" placeholder="Equipe/Empresa" class="input-150" v-model="fieldForm.personalData.Clube" :class="{'input-check' : fieldForm.personalData.Clube != ''}">
                    </div>                    
                </div>                

                <div style="margin: 0px 21px 0px 0px">
                    <label for="gender" style="font-size: 13px;" :class="{'font-green' : fieldForm.personalData.GenderPE}">Gênero:</label>
                    <div>
                        <select name="gender" style="height: 40px; background-color: transparent; border: 1px solid rgba(0, 0, 0, 0.275); border-radius: 3px;" v-model="fieldForm.personalData.GenderPE" :class="{'input-check' : fieldForm.personalData.GenderPE != ''}">
                            <option>Masculino</option>
                            <option>Feminino</option>
                            <option>Não Binário</option>
                        </select>
                    </div>
                </div>

                <div style="margin: 0px 21px 0px 0px">
                    <label for="birthDate" style="font-size: 13px;" :class="{'font-green' : fieldForm.personalData.DateBirth != ''}">Data de Nascimento:</label>
                    <div>
                        <input type="date" name="birthDate" class="input-150" :class="{'input-check' : fieldForm.personalData.DateBirth != ''}">                        
                    </div>
                </div>  

                <div>
                    <label for="document" style="font-size: 13px;" :class="{'font-green' : fieldForm.personalData.Document != ''}">* Documento:</label>
                    <div>
                        <input type="document" name="document" placeholder="Número do documento" style="width: 350px; height: 40px; outline:none; box-sizing: border-box; padding: 8px; border: 1px solid rgba(0, 0, 0, 0.275); border-radius: 3px;" v-model="fieldForm.personalData.Document" :class="{'input-check' : fieldForm.personalData.Document != ''}">
                    </div>                    
                </div>                                              
            </div>

            <div style="margin: 34px 0px;">
                <h5>Endereço:</h5>
                <hr>               
            </div>

            <div class="row">
                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.postalCode != ''}">* CEP:</label>
                    <div>
                        <input @keyup="BuscaCep()" type="text" name="cep" placeholder="CEP" class="input-150" v-model="fieldForm.addresData.postalCode" :class="{'input-check': fieldForm.addresData.postalCode != ''}">
                    </div>                    
                </div>  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.publicPlace != ''}">* Logradouro:</label>
                    <div>
                        <input type="text" name="Logradouro" placeholder="Logradouro" class="input-150" v-model="fieldForm.addresData.publicPlace" :class="{'input-check': fieldForm.addresData.publicPlace != ''}">
                    </div>                    
                </div>      

                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.complement != ''}">* Complemento:</label>
                    <div>
                        <input type="text" name="Logradouro" placeholder="Complemento" class="input-150" v-model="fieldForm.addresData.complement" :class="{'input-check': fieldForm.addresData.complement != ''}">
                    </div>                    
                </div>  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.district != ''}">* Bairro:</label>
                    <div>
                        <input type="text" name="Bairro" placeholder="Bairro" class="input-150" v-model="fieldForm.addresData.district" :class="{'input-check': fieldForm.addresData.district != ''}">
                    </div>                    
                </div>    

                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.locale != ''}">* Localidade:</label>
                    <div>
                        <input type="text" name="Localidade" placeholder="Localidade" class="input-150" v-model="fieldForm.addresData.locale" :class="{'input-check': fieldForm.addresData.locale != ''}">
                    </div>                    
                </div>   

                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.addresData.state != ''}">* UF:</label>
                    <div>
                        <input type="text" name="uf" placeholder="UF" style="width: 60px; height: 40px; outline:none; box-sizing: border-box; padding: 8px; border: 1px solid rgba(0, 0, 0, 0.275); border-radius: 3px;" v-model="fieldForm.addresData.state" :class="{'input-check': fieldForm.addresData.state != ''}">
                    </div>                    
                </div>                                                                                                                                                             
            </div>               

            <div style="margin: 34px 0px;">
                <h5>Dados Para Contato</h5>
                <hr>               
            </div>         

            <div class="row">
                <div style="margin: 0px 21px 0px 0px">
                    <label for="email" style="font-size: 13px;" :class="{'font-green': fieldForm.contactData.contactEmail != ''}">* E-mail de Contato:</label>
                    <div>
                        <input type="email" name="email" placeholder="E-mail de Contato" style="width: 350px; height: 40px; outline:none; box-sizing: border-box; padding: 8px; border: 1px solid rgba(0, 0, 0, 0.275); border-radius: 3px;" v-model="fieldForm.contactData.contactEmail" :class="{'input-check': fieldForm.contactData.contactEmail != ''}">
                    </div>                    
                </div>  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="phone" style="font-size: 13px;" :class="{'font-green': fieldForm.contactData.contactPhone != ''}">* Telefone Fixo:</label>
                    <div>
                        <input type="text" name="phone" placeholder="Telefone Fixo" class="input-150" v-model="fieldForm.contactData.contactPhone" :class="{'input-check': fieldForm.contactData.contactPhone != ''}">
                    </div>                    
                </div>    

                <div style="margin: 0px 21px 0px 0px">
                    <label for="cellPhoneNumber" style="font-size: 13px;" :class="{'font-green': fieldForm.contactData.contactMPHone != ''}">* Telefone Móvel:</label>
                    <div>
                        <input type="text" name="cellPhoneNumber" placeholder="Telefone Móvel" class="input-150" v-model="fieldForm.contactData.contactMPHone" :class="{'input-check': fieldForm.contactData.contactMPHone != ''}">
                    </div>                    
                </div>  

                <div style="margin: 0px 21px 0px 0px" :class="{'font-green': fieldForm.contactData.contatComercialPhone != ''}">
                    <label for="comercialNumber" style="font-size: 13px;">* Telefone Comercial:</label>
                    <div>
                        <input type="text" name="comercialNumber" placeholder="Telefone Comercial" class="input-150" v-model="fieldForm.contactData.contatComercialPhone" :class="{'input-check': fieldForm.contactData.contatComercialPhone != ''}">
                    </div>                    
                </div>                  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="whatsapp" style="font-size: 13px;" :class="{'font-green': fieldForm.contactData.contactWhatsapp}">* Whatsapp:</label>
                    <div>
                        <input type="text" name="whatsapp" placeholder="Whatsapp" class="input-150" v-model="fieldForm.contactData.contactWhatsapp" :class="{'input-check': fieldForm.contactData.contactWhatsapp != ''}">
                    </div>                    
                </div>                                                                              
            </div>             

            <div style="margin: 34px 0px;">
                <h5>Dados do Representante/Vendedor:</h5>
                <hr>               
            </div>

            <div class="row">
                <div style="margin: 0px 21px 0px 0px">
                    <label for="businessName" style="font-size: 13px;" :class="{'font-green' : fieldForm.comercialData.FantasyName != ''}">* Representante/Vendedor:</label>
                    <div>
                        <input type="text" name="businessName" placeholder="Nome Fantasia" style="width: 350px; height: 40px; outline:none; box-sizing: border-box; padding: 8px; border: 1px solid rgba(0, 0, 0, 0.275); border-radius: 3px;" v-model="fieldForm.comercialData.FantasyName" :class="{'input-check' : fieldForm.comercialData.FantasyName != ''}">
                    </div>                    
                </div>  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="comercialNumber" style="font-size: 13px;" :class="{'font-green': fieldForm.comercialData.ComercialNumber != ''}">* Telefone Comercial:</label>
                    <div>
                        <input type="text" name="comercialNumber" placeholder="Telefone Comercial" class="input-150" v-model="fieldForm.comercialData.ComercialNumber" :class="{'input-check': fieldForm.comercialData.ComercialNumber != ''}">
                    </div>                    
                </div>                  

                <div style="margin: 0px 21px 0px 0px">
                    <label for="whatsapp" style="font-size: 13px;" :class="{'font-green': fieldForm.comercialData.ComercialWhatsapp != ''}">* Whatsapp:</label>
                    <div>
                        <input type="text" name="whatsapp" placeholder="Whatsapp" class="input-150" v-model="fieldForm.comercialData.ComercialWhatsapp" :class="{'input-check': fieldForm.comercialData.ComercialWhatsapp != ''}">
                    </div>                    
                </div>                                                                              
            </div>                                       

            <div style="margin-top: 34px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
                <button class="button back-color-blue" @click="AtualizarClienteSistema()">Atualizar Cliente</button>
            </div>            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
//import ClienteService from '../../../services/ClienteService';
//let Service = new ClienteService();
import { useToast } from "vue-toastification";

export default {
    name: 'EditarClienteComponent',
    setup(){
      // Get toast interface
      const toast = useToast();

      // Make it available inside methods
      return { toast }        
    },    
    data(){
        return{
            clienteId: null,
            isLoading: false,
            fieldForm: {
                comercialData: {
                    FantasyName:'',
                    ComercialNumber: '',
                    ComercialWhatsapp: ''
                },
                personalData: {
                    FullName: '',
                    Clube: '',
                    GenderPe: '',
                    DateBirth: '',
                    Document: ''
                },
                contactData: {
                    contactEmail: '',
                    contactPhone: '',
                    contactMPHone: '',
                    contatComercialPhone: '',
                    contactWhatsapp: ''
                },
                addresData:{
                    postalCode: '',
                    publicPlace: '',
                    complement: '',
                    district: '',
                    locale: '',
                    state: '',
                }
            }
        }
    },

    mounted(){
        this.BuscaCliente();
    },

    methods:{
        BuscaCliente(){
            let _this = this;
            axios.get(`http://agenciaemblemente.com/api/cliente/obterClienteId/${this.$route.params.clienteId}`)
            .then(function (res){
                _this.fieldForm.personalData.Clube               = res.data[0].Clube;
                _this.fieldForm.personalData.GenderPe            = res.data[0].GenderPe;
                _this.fieldForm.personalData.DateBirth           = res.data[0].DateBirth;
                _this.fieldForm.personalData.Document            = res.data[0].Document;
                _this.fieldForm.comercialData.FantasyName        = res.data[0].FantasyName;
                _this.fieldForm.comercialData.ComercialNumber    = res.data[0].ComercialNumber;
                _this.fieldForm.comercialData.ComercialWhatsapp  = res.data[0].ComercialWhatsapp;
                _this.fieldForm.contactData.contactEmail         = res.data[0].ContactEmail;
                _this.fieldForm.contactData.contactPhone         = res.data[0].ContactPhone;
                _this.fieldForm.contactData.contatComercialPhone = res.data[0].ContactComercialPhone;
                _this.fieldForm.contactData.contactWhatsapp      = res.data[0].ContactWhatsapp;
                _this.fieldForm.addresData.postalCode            = res.data[0].postalCode;
                _this.fieldForm.addresData.locale                = res.data[0].Locale;
                _this.fieldForm.addresData.district              = res.data[0].District;
                _this.fieldForm.addresData.complement            = res.data[0].Complement;
                _this.fieldForm.addresData.publicPlace           = res.data[0].PublicPlace;
                _this.fieldForm.personalData.FullName            = res.data[0].Fullname;
            })
        },

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

        AtualizarClienteSistema()
        {
            let _vue = this;
            _vue.isLoading = !_vue.isLoading;

                fetch(`http://agenciaemblemente.com/api/cliente/atualizaCliente/${_vue.$route.params.clienteId}`,{
                    method: 'POST',
                    headers: {
                        'Content-type':'application/x-www-form-urlencoded'
                    },
                    body:
                        `FullName=${this.fieldForm.personalData.FullName}&`+
                        `Clube=${this.fieldForm.personalData.Clube}&`+
                        `Gender=${this.fieldForm.personalData.GenderPe}&`+
                        `DateBirth=${this.fieldForm.personalData.DateBirth}&`+
                        `Document=${this.fieldForm.personalData.Document}&`+
                        `FantasyName=${this.fieldForm.comercialData.FantasyName}&`+
                        `ComercialNumber=${this.fieldForm.comercialData.ComercialNumber}&`+
                        `ComercialWhatsapp=${this.fieldForm.comercialData.ComercialWhatsapp}&`+
                        `ContactEmail=${this.fieldForm.contactData.contactEmail}&`+
                        `ContactPhone=${this.fieldForm.contactData.contactPhone}&`+
                        `ContactComercialPhone=${this.fieldForm.contactData.contatComercialPhone}&`+
                        `ContactWhatsapp=${this.fieldForm.contactData.contactWhatsapp}&`+
                        `PostalCode=${this.fieldForm.addresData.postalCode}&`+
                        `District=${this.fieldForm.addresData.district}&` +
                        `Complement=${this.fieldForm.addresData.complement}&` +
                        `PublicPlace=${this.fieldForm.addresData.publicPlace}&` +
                        `Locale=${this.fieldForm.addresData.locale}&` +
                        `state=${this.fieldForm.addresData.state}`})
                .then(function(){
                    _vue.isLoading = !_vue.isLoading;
                    _vue.toast.success(`Cliente Atualizado com sucesso!`);
                    _vue.$router.push(`/consulta-de-cliente`);
                })        
                
                .catch(function(){
                    _vue.isLoading = !_vue.isLoading;
                    _vue.toast.error(`Problema ao cadastrar o cliente ${_vue.fieldForm.personalData.FullName}`)
                })                

                //this.LimparCampos();
        },

        LimparCampos()
        {
            for (let ComercialDataFieldPosition in this.fieldForm.comercialData){
                this.fieldForm.comercialData[ComercialDataFieldPosition] =    "";
            }

            for (let personalDataFieldPosition in this.fieldForm.personalData){
                this.fieldForm.personalData[personalDataFieldPosition]   =    "";
            }          
            
            for (let contactDataFieldPosition in this.fieldForm.contactData){
                this.fieldForm.contactData[contactDataFieldPosition]     =    "";
            }     

            for (let addresDataFieldPosition in this.fieldForm.addresData){
                this.fieldForm.addresData[addresDataFieldPosition]       =    "";
            }           
        }
    }
}
</script>

<style scoped>
    a{
        text-decoration: none;
    }

    label{
        transition: 250ms;
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