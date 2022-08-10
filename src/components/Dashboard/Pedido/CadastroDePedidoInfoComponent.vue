<template>
    <div id="cadastro-de-produto">
        <div id="vcli" class="display-none" style="position:absolute; top: 0px; right: 0px; width:100%; height:100%; background-color: rgba(24, 24, 24, 0.81); display: flex; justify-content: center; align-items:center;">
            <div style="width: 750px; height: 300px; background-color: #fefefe; border-radius: 3px; box-sizing: border-box; padding: 13px; display: table;">

                <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                    <div>
                        <label for="nome">Nome: </label>
                        <span style="margin-bottom: 21px;">
                            <input type="text" name="nome" id="" style="border: 1px solid #cecece;" v-model="custumerDataInfo" @input="this.ObterDadoCliente()">
                        </span>                         
                    </div>                

                    <div>
                        <unicon name="times-circle" fill="#979797" @click="ObterClienteCPClose()"/>
                    </div>
                </div>

                <div style="width: 100%; height: auto; border: 1px solid #cecece; border-radius: 2px; box-sizing: border-box; font-size: 13px;">
                    <table style="width: 100%; height: auto; box-sizing: border-box;">
                        <thead style="width: 100%; border: 1px solid #cecece; background-color: #cecece; box-sizing: border-box;">
                            <tr style="display: flex; justify-content: space-around; width: 100%; height: 35px; align-items: center; color:#23242575; box-sizing: border-box;">
                                <th style="width: 220px;">Nome:</th>
                                <th style="width: 100px;">Nome Fantasia:</th>
                                <th style="width: 100px;">Clube:</th>
                                <th style="width: 100px;">Documento:</th>                                
                            </tr>
                        </thead>

                        <tbody style="width: 100%; height: 200px; border: 1px solid #cecece; box-sizing: border-box; overflow: scroll;">
                            <tr @dblclick="ObterDadoClienteDocumento(cliente)" v-for="cliente in custumerDataLoad" :key="cliente.id" style="display: flex; justify-content: space-around; width: 100%; height: 35px; align-items: center; color:#23242575; box-sizing: border-box;">
                                <td style="width: 220px;">{{cliente.FullName}}</td>
                                <td style="width: 100px;">{{cliente.FantasyName}}</td>
                                <td style="width: 100px;">{{cliente.Clube}}</td>
                                <td style="width: 100px;">{{cliente.Document}}</td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <LoadingComponent :isLoading="isLoading"/>
        <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
            <div style="display: flex; width: 100%; background-color: #232425; border-radius: 2px 2px 0px 0px;">
                <div style="display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px;">
                    <div style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Cadastro de Pedido</div>
                </div>
            </div>       

            <div style="width: 100%;display: flex; justify-content: flex-start; flex-wrap: wrap; box-sizing: border-box; margin-top:21px; margin-left:21px; font-size: 13px;">                                                                                                                                                                                                                                                                                                                                       
                <div style="padding: 0px; width: 286px; margin-right:21px;">Cliente</div>        
                <div style="padding: 0px; width: 100px; margin-right:21px;">Telefone</div>
                <div style="padding: 0px; width: 180px; margin-right:21px;">Forma de Pagamento</div>
            </div>

            <div style="width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: border-box; margin-left:21px;">
                <div style="width: 100%; display: flex; justify-content: flex-start; align-items:center; box-sizing: border-box;">
                    <div style="width: 286px; box-sizing: border-box; display: flex; margin-right: 21px;">
                        <input class="input" type="text" name="numeroPedido" id="" style="width: 47%; margin-right:6px;" v-model="this.custumerId" @keyup="this.ObterCliente()" @dblclick="ObterClienteCP()">
                        <input class="input" type="text" name="numeroPedido" id="" style="width: 65%;" :disabled="true" v-model="this.dataToCreateOrder.custumerNm">
                    </div>       

                    <div style="width: 100px; box-sizing: border-box; display: flex; margin-right: 21px;">
                        <input class="input" type="text" name="numeroPedido" id="" style="width: 100%;" :disabled="true" v-model="this.dataToCreateOrder.custumerPn"> 
                    </div>            

                    <div style="width: 180px; box-sizing: border-box; display: flex; margin-right: 21px;">
                        <select class="input" style="font-size: 11px;" name="custumerPaymentMethod" v-model="this.dataToCreateOrder.custumerPaymentMethod" id="">
                            <option value="">Forma de Pagamento</option>
                            <option :value="paym.id" v-for="paym in this.paymentMethod" v-bind:key="paym.id">{{paym.description}}</option>
                        </select>
                    </div>                           

                    <button style="background-color: transparent;border:none; cursor: pointer;" @click="atualizaPedido()">
                        <unicon name="check-circle" fill="#181818"/>
                    </button>                                                                       
                </div>                  
            </div>      

            <div style="width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: border-box; margin-left:21px;">
                <div style="width: width: 100%; box-sizing: border-box; display: flex; margin-right: 21px;">
                    <textarea class="input" style="width: 100%; height: 50px; margin-top: 21px;" name="" id="details" cols="67" rows="60" v-model="this.dataToCreateOrder.orderDetails" placeholder="Observações"></textarea>
                </div>                    
            </div>
        </div>  
    </div>
</template>

<script>
import { useToast } from "vue-toastification";
import LoadingComponent from '../../Functions/Loading/LoadingComponent.vue'
import OrderService from '../../../services/OrderService.js';
import ClienteService from '../../../services/ClienteService.js';
import PaymentMethodService from '../../../services/PaymentMethodService.js';

let OService   = new OrderService();
let CService   = new ClienteService();
let PMService  = new PaymentMethodService();

export default {
    name:'CadastroDePedidoInfoComponent',
    components:{
        LoadingComponent
    },
    setup(){
      // Get toast interface
      const toast = useToast();

      // Make it available inside methods
      return { toast }        
    },    
    data(){
        return {
            pedido: '',
            orders: [],
            custumerId: null,
            isLoading: false,
            dateDelivery: "0000-00-00",
            custumerDataInfo:null,

            paymentMethod: [],
            custumerDataLoad: [],
            nndate:"0000-00-00",

            dataToCreateOrder:{
                id:'',
                custumerID: '',
                custumerNm: '',
                orderDetails: '',
                custumerPaymentMethod: '',
            }
        }
    },

    mounted(){
        this.GetOrderId();
        this.MetodosDePagamentos();
    },

    methods:{
        ObterPedidoPorId(id){
            OService.Get_OrderBy_id(id).then(resp => {
                this.custumerId = resp.data.Data[0].custumerID;
                this.dataToCreateOrder.custumerID = resp.data.Data[0].custumerID;
                this.dataToCreateOrder.id = resp.data.Data[0].id;
                this.dataToCreateOrder.custumerNm = resp.data.Data[0].custumerNm;             
                this.dataToCreateOrder.orderDetails = resp.data.Data[0].orderDetails;
                this.dataToCreateOrder.custumerPaymentMethod = resp.data.Data[0].custumerPaymentMethod;
            })
        },

        GetOrderId(){
            this.pedido = this.$route.params.pedidoId;
            this.ObterPedidoPorId(this.pedido);
        },   

        ObterClienteCPClose(){
            let _elements = this.$el.children.vcli;
            _elements.classList.add("display-none");
        },

        ObterClienteCP(){
            let _elements = this.$el.children.vcli;
            _elements.classList.remove("display-none");
        },

        ObterDadoClienteDocumento(informacoes){
            this.toast.success("Cliente adicionado.");
            this.custumerId = informacoes.Document;
            this.dataToCreateOrder.custumerNm = informacoes.Clube;
            this.dataToCreateOrder.custumerID = informacoes.Document;
        },

        ObterDadoCliente(){
            let _this = this;
            
            if(String(this.custumerDataInfo).length == 0){
                console.log(String(_this.custumerDataInfo).length)
                _this.custumerDataLoad = [];
                return;
            }

            CService.ObterDadosCliente(this.custumerDataInfo).then(function (success){
                _this.custumerDataLoad = success.data;
            });
        },

        async DataAtual(created, delivery){
            let _created  = created;
            let _delivery = delivery;

            const options = { year: 'numeric', month:'numeric', day: 'numeric' };

            _created  = _created.toLocaleDateString("pt-BR", options);
            _delivery = _delivery.toLocaleDateString("pt-BR", options);

            this.dataToCreateOrder.orderDtCre = _created;
            this.dataToCreateOrder.orderDtDel = _delivery;

            await this.CadastrarPedido();
        },

        atualizaPedido (){
            let _this = this;
            OService.Update_Order(this.dataToCreateOrder).then(function () {
                    _this.$router.push(`cadastro-de-pedido`);
                    _this.toast.success("Pedido atualizado.");
                
            });
        },

        CadastrarPedido(){
            let _this = this;

            if(this.dataToCreateOrder.custumerID == "")
            {
                this.toast.error("É necessário informar o cliente.");
                return;
            }     
            
            else if(this.dataToCreateOrder.orderDtDel == "Invalid Date")
            {
                this.toast.error("É necessário informar a data de entrega.");
                return;
            } 
            
            /*
            else if(this.dataToCreateOrder.orderDtDel < this.dataToCreateOrder.orderDtCre)
            {
                this.toast.error("A data de entrega é menor que a data atual.");
                return;
            }       
            */       
            
            else if(this.dataToCreateOrder.custumerPaymentMethod == "")
            {
                this.toast.error("É necessário informar a forma de pagamento.");
                return;
            }            
            
            this.isLoading = !this.isLoading;
            OService.Update_Order(this.dataToCreateOrder).then(function () {
                _this.isLoading = !_this.isLoading;
                if(_this.isLoading == false){
                    _this.$router.push(`cadastro-de-pedido`);
                    _this.toast.success("Pedido cadastrado.");
                }
            });
            
        },

        MetodosDePagamentos(){
            let _this = this;
            PMService.Get_Payment_Method().then(function (response) {
                response.json().then(function (responseJson) {
                    _this.paymentMethod = responseJson.Data;
                })
            });
        },

        ObterCliente(){
            let _this = this;
            this.isLoading = !this.isLoading;

            console.log(this.custumerID);

            if (String(this.custumerId).length < 10){
                _this.isLoading = !_this.isLoading;
                _this.dataToCreateOrder.custumerNm = null;
                _this.dataToCreateOrder.custumerID = null;
                _this.dataToCreateOrder.custumerPn = null;        
            }

            if (String(this.custumerId).length == 11)
                CService.ObterClienteCpf(this.custumerId).then(function (response){
                    _this.isLoading = !_this.isLoading;
                    _this.dataToCreateOrder.custumerNm = response.data[0].FullName;
                    _this.dataToCreateOrder.custumerID = response.data[0].Document;
                    _this.dataToCreateOrder.custumerPn = response.data[0].ContactPhone;
                });

            if (String(this.custumerId).length == 14)
                CService.ObterClienteCnpj(this.custumerId).then(function (response){
                    _this.isLoading = !_this.isLoading;
                    _this.dataToCreateOrder.custumerNm = response.data[0].FullName;
                    _this.dataToCreateOrder.custumerID = response.data[0].Document;
                    _this.dataToCreateOrder.custumerPn = response.data[0].ContactPhone;
                });                
        }
    }
}
</script>

<style scoped>
.display-none{
    display: none !important;
}

.display-active{
    display:flex;
}

.add{
        width: 110px;
        height: 35px;
        display: flex;
        cursor: pointer;
        overflow: hidden;
        border-radius: 2px;
        align-items: center;
        background: #2170f4;
        box-sizing: border-box;
        border: 1px solid #0003;
        transition: 250ms ease-in-out;
        justify-content: space-between;
    }

    .add:hover{
        background: #1a61db;
    }

    .add-pipe{
        width: 100px;
        height: 34px;
        padding: 1px;
        display: flex;
        color: #fefefe;
        font-size: 11.5px;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #1763e8;
    }   

    .add-ico{
        width: 50px;
        font-size: 13px;
        font-weight: 600;
        color: #fefefe;
        text-align: center;
    }         

    .del{
        width: 110px;
        height: 25px;
        display: flex;
        cursor: pointer;
        overflow: hidden;
        border-radius: 2px;
        align-items: center;
        background: #e63939;
        box-sizing: border-box;
        border: 1px solid #0003;
        transition: 250ms ease-in-out;
        justify-content: space-between;
    }

    .del:hover{
        background: #f93e3e;
    }

    .del-pipe{
        width: 100px;
        height: 34px;
        padding: 1px;
        display: flex;
        color: #fefefe;
        font-size: 11.5px;
        align-items: center;
        justify-content: center;
        border-right: 1px solid #c72c2c;
    }
    
    .del-ico{
        width: 50px;
        font-size: 13px;
        color: #fefefe;
        text-align: center;
    }

    .status-circle{
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 20px;
        background-color: greenyellow;
        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.189);     
    }

    input[type="date"]{
        width: auto;
        height: 30px;
        outline: none;
        box-sizing: border-box;
        padding: 8px;
        border: 1px solid rgba(0, 0, 0, 0.275);
        border-radius: 3px;
        transition: all 250ms;
        text-transform: uppercase;
        text-align: center;
        color: #00000082;
    }

    input[type="checkbox"]#on-off-toggle
    {
        position: relative;
        width: 36px;
        height: 19px;
        -webkit-appearance: none;
        background: #c6c6c6;
        outline: none;
        border-radius: 20px;
        margin-top: 7px;
        box-shadow: inset 0 0 5px rgba(0,0,0, .2);
    }
    input:checked[type="checkbox"]#on-off-toggle
    {
        background-color: greenyellow;
    }

    input[type="checkbox"]#on-off-toggle::before
    {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        top: 0;
        left: 0;
        background: #fefefe;
        box-shadow: 0 0 5px rgba(0,0,0, .2);
        transition: .5s;        
    }

    input:checked[type="checkbox"]#on-off-toggle::before
    {
        left: 20px;       
    }

    label{
        font-size: 13px;
        font-weight: 500;
    }

    .back-color-blue{
        background-color:#2170f4;
    }

    .back-color-blue:hover{
        cursor: pointer;
        background-color:#1a61db;
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
        margin-top: 20px;
    }      

    .input-check{
        background-color:rgba(172, 255, 47, 0.217);
    }    

    .input-150{
        text-transform: uppercase;
        width: 150px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;        
    }    

    .input{
        text-transform: uppercase;
        height: 30px; 
        outline:none; 
        box-sizing: border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;      
        background: transparent;  
    }        

    .input-250{
        text-transform: uppercase;
        width: 250px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;        
    }      

    .input-350{
        text-transform: uppercase;
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

    .input-40{
        width: 47px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;  
        text-transform: uppercase;
        text-align: center;      
    }    

    .input-94{
        width: 94px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;  
        text-transform: uppercase;
        text-align: center;      
    }        

    #cadastro-de-produto{
        width: 100%;
        height:100vh;
        text-align: left;
        padding: 50px 40px;
        box-sizing: border-box;
    }

    #size_group_select{
        height: 40px;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.275);
        border-radius: 3px;
        width: 205px;
        box-sizing: border-box;
        padding: 5px;
        color: #00000075;
    }

    .tInput{
        outline: none;
        box-sizing: border-box;
        padding: 8px;
        border: 1px solid rgba(0, 0, 0, 0.275);
        border-radius: 3px;        
    }
</style>