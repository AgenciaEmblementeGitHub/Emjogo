<template>
    <div id="cadastro-de-produto">
        <div v-if="estoque" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.262); position: absolute; left:0; top: 0; bottom:0; display: flex; justify-content:center;align-items:center; box-sizing: border-box; padding: 13px;">
            
            <div style="width: 400px; min-height: 250px; height:auto; overflow: hidden; background-color: #fefefe; border-radius: 2px; box-shadow: #00000080 0px 2px 5px; box-sizing: border-box;">
                <div style="width: 100%; height: 35px; border-bottom: 1px solid grey; display: flex; align-items:center; justify-content:space-between;">
                    <h5 style="margin-left: 13px;">Filtros</h5>
                    <button @click="this.estoque = !this.estoque" style="cursor:pointer; border:none; background-color: transparent;" >
                        <unicon name="times-circle" fill="#181818" style="padding-top: 5px; padding-right: 13px;"/>
                    </button>
                </div>

                <div>
                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Produto:</label>
                                <br/>
                                <select v-model="productSelect" style="width: 100%; border:1px solid grey; border-radius: 2px; background-color: transparent; color: grey;">
                                    <option :value="pro.REFERENCIA" v-for="pro in this.produtos" :key="pro.ID_PROD">{{pro.REFERENCIA +" - "+pro.PRODUTO_DESC}}</option>
                                </select>
                            </td>             
                        </tr>
                    </table> 

                    <div style="width: 100%; display: flex; flex-direction: row; no-wrap;">
                        <div v-if="(this.startDateDirty != '0000/00/00' && this.endDateDirty != '0000/00/00')" style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.getStorageOrder()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">IMPRIMIR</button> 
                        </div>  

                        <div style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.clearFilter()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">LIMPAR FILTROS</button> 
                        </div>                     
                    </div>                                                     
                </div>
            </div>
        </div>          
        <div id="vcli" class="display-none" style="position:absolute; top: 0px; right: 0px; width:100%; height:100%; background-color: rgba(24, 24, 24, 0.81); display: flex; justify-content: center; align-items:center;">
            <div style="width: 750px; height: 300px; background-color: #fefefe; border-radius: 3px; box-sizing: border-box; padding: 13px; display: table;">

                <div style="width: 100%; display: flex; align-items: center; justify-content: space-between;">
                    <div>
                        <label for="nome">Produto: </label>
                        <span style="margin-bottom: 21px;">
                            <input type="text" name="nome" id="" style="border: 1px solid #cecece;" v-model="productDataInfo" @input="this.ObterDadoProduto()">
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
                                <th style="width: 100px;">Referência:</th>
                                <th style="width: 100px;">Descrição:</th>
                                <th style="width: 100px;">Grade:</th>                              
                            </tr>
                        </thead>

                        <tbody style="width: 100%; height: 200px; border: 1px solid #cecece; box-sizing: border-box; overflow: scroll;">
                            <tr @dblclick="ObterProdutoDado(produto)" v-for="produto in productDataLoad" :key="produto.id" style="display: flex; justify-content: space-around; width: 100%; height: 35px; align-items: center; color:#23242575; box-sizing: border-box;">
                                <td style="width: 100px;">{{produto.ref}}</td>
                                <td style="width: 100px;">{{produto.description}}</td>
                                <td style="width: 100px;">{{produto.size_group_desc}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
            <p style="color: #181818;">Entrada de Estoque</p>      
        </div>  

        <div style="display: flex; justify-content: space-between; margin-bottom: 55px;">
            <div style="width: 30%; height: auto; border: 2px solid #80808021; border-radius: 2px; box-sizing: border-box; padding: 21px;">
                <h4>Pesquisar Produto</h4>

                <hr style="width: 100%; border: 1px solid #80808021; margin-bottom:21px;">

                <div>
                    <label for="orderItem">Produto:</label>
                    <br>
                    <input type="text" name="orderItem" style="border: 1px solid #80808021; height: 23px;" v-model="searchItem" @dblclick="ObterClienteCP()" @input="FindItem()">  
                    <br>
                    <div>
                        <button class="button back-color-black">
                            <span @click="this.estoque = !this.estoque">Relatório de Estoque</span>                  
                        </button>                                         
                    </div>              
                </div>     

                <br />                 
            </div>

            <div style="width: 65%; height: auto; border: 2px solid #80808021; border-radius: 2px; box-sizing: border-box; padding: 21px;">
                <h4>Produto em Estoque</h4>

                <hr style="width: 100%; border: 1px solid #80808021; margin-bottom:21px;">                

                <div style="width: 100%; heght: 40px; display: flex; justify-content: space-between; flex-wrap: wrap; text-align:left; font-size: 13px;">
                    <table style="width: 100%;">
                        <tr style="width: 100%; display: flex; justify-content: space-between;">
                            <td style="width: 50px;">Produto</td>
                            <td style="width: 70px;">Descrição</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                            <td style="width: 50px;">Tam</td>
                        </tr>

                        <br>

                        <tr style="width: 100%; display: flex; justify-content: space-between;">
                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.ref">
                            </td>
                            
                            <td style="width: 70px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.description">
                            </td>

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_1">
                            </td>                 

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_2">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_3">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_4">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_5">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_6">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_7">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_8">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_9">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="responseItem.size_10">
                            </td>                                                                                                                                                                                                                                                 
                        </tr>                    

                        <tr style="width: 100%; display: flex; justify-content: space-between; margin-top: 21px;">
                            <td style="width: 135px; visibility: none;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="true" v-model="orderItem.ref">
                            </td>

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_1)" v-model="orderItem.size_1">
                            </td>                 

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_2)" v-model="orderItem.size_2">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_3)" v-model="orderItem.size_3">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_4)" v-model="orderItem.size_4">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_5)" v-model="orderItem.size_5">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_6)" v-model="orderItem.size_6">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_7)" v-model="orderItem.size_7">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_8)" v-model="orderItem.size_8">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_9)" v-model="orderItem.size_9">
                            </td>    

                            <td style="width: 50px;">
                                <input type="text" name="" id="" style="width: 100%; text-align: center;" :disabled="FieldIsEmpty(responseItem.size_10)" v-model="orderItem.size_10">
                            </td>   
                        </tr>          
                    </table>

                </div>                
                
                <div style="width: 100%; heght: 40px; display: flex; justify-content: flex-start; margin-top: 21px;">  
                    <button class="button back-color-blue"    @click="CreateOrder()" :disabled="FieldIsEmpty(responseItem.id)" :class="{'btn-disabled':FieldIsEmpty(responseItem.id)}">Adicionar</button>                                                         
                    <button class="button back-color-orange"  @click="ClearOrder()"  :disabled="order <= 0" :class="{'btn-disabled':FieldIsEmpty(responseItem.id)}">Limpar</button>                                                         
                    <button class="button back-color-orange"  @click="AjustarEstoque()"  :disabled="order <= 0" :class="{'btn-disabled':FieldIsEmpty(responseItem.id)}">Ajustar Estoque</button> 
                </div>
            </div>            
        </div>

        <hr style="width: 100%; border: 1px solid #80808021; margin-bottom:21px;">  

        <table style="width: 100%; height: 100%; display: table;">
            <tr style="width: 100%; height: 34px; display: flex; justify-content: space-between; font-size: 13px; border-bottom: 1px solid #80808021; margin-bottom:21px;">
                <td style="width: 50px;">Produto</td>
                <td style="width: 50px;">Tam {{responseItem.size_1}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_2}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_3}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_4}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_5}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_6}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_7}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_8}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_9}}</td>
                <td style="width: 50px;">Tam {{responseItem.size_10}}</td>
                <td style="width: 50px;">Total</td>
                <td style="width: 50px;"></td>
            </tr>

            <div style="width:100%;height:400px; overflow: scroll;">
                <tr style="width: 100%; height: 45px; align-items: center; display: flex; justify-content: space-between; font-size: 13px; border-bottom: 1px solid #80808021; margin:21px 0px; padding-bottom:21px" v-for="value in order" :key="value.id">
                    <td style="width: 50px;" :disabled="true">
                        <p>{{value.orderItem.productID}}</p>
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_0">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_1">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_2">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_3">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_4">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_5">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_6">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_7">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_8">
                    </td>                                                                                                                                                                                                              

                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.size_9">
                    </td>                                              
                    
                    <td style="width: 50px;">
                        <input type="text" style="width:100%;" v-model="value.orderItem.total">
                    </td>       

                    <td style="width: 50px;">

                    </td>                                                    
                </tr> 
            </div>           
        </table>
    </div>
</template>

<script>
import ProductService from '../../../services/ProductService.js';
import OrderService from '../../../services/OrderService.js';
import { useToast } from "vue-toastification";

let productService  = new ProductService();
let OService = new OrderService();

export default {
    name:'CadastroPedidoItens',

    setup(){
      // Get toast interface
      const toast = useToast();

      // Make it available inside methods
      return { toast }        
    },

    mounted(){
            productService.GetAll_Product().then((res) => {
                this.produtos = res.data.Data;
                res.data.Data.forEach(produto => {
                    this.produtos.push(produto)
                });
            });        
    },

    data(){
        return{
            produtos:[],
            estoque: false,
            productSelect: '',
            endDateDirty:'00/00/0000',
            startDateDirty:'00/00/0000',
            orderId: null,
            searchItem: null,
            isLoading: false,
            productDataInfo: null,

            responseItem:{
                id: null,
                ref: null,
                size_1:  null,
                size_2:  null,
                size_3:  null,
                size_4:  null,
                size_5:  null,
                size_6:  null,
                size_7:  null,
                size_8:  null,
                size_9:  null,
                size_10: null,
                description: null,
            },

            orderItem:{
                id: null,
                ref: null,
                description: null,
                size_1:  0,
                size_2:  0,
                size_3:  0,
                size_4:  0,
                size_5:  0,
                size_6:  0,
                size_7:  0,
                size_8:  0,
                size_9:  0,
                size_10: 0,    
                product_price: null           
            },

            order: [],
            productDataLoad: []
        }
    },

    methods:{
        getStorageOrder(){
            let durl = this.productSelect == '' ? `http://agenciaemblemente.com/api/pedido/obterRelatorioEstoque/` : `http://agenciaemblemente.com/api/pedido/obterRelatorioEstoque/${this.productSelect}`; 
            window.open(durl,"_blank");
        },
        clearFilter: function(){
            this.productSelect           = '';
            this.endDateDirty   = '0000/00/00';
            this.startDateDirty = '0000/00/00';
        },        
        AjustarEstoque(){
            let _this = this;

            let bodyToSend = {
                productId:this.orderItem.ref,
                size_0:this.orderItem.size_1,
                size_1:this.orderItem.size_2,
                size_2:this.orderItem.size_3,
                size_3:this.orderItem.size_4,
                size_4:this.orderItem.size_5,
                size_5:this.orderItem.size_6,
                size_6:this.orderItem.size_7,
                size_7:this.orderItem.size_8,
                size_8:this.orderItem.size_9,
                size_9:this.orderItem.size_10,
            };

            OService.AdjustStorage(bodyToSend)
            .then(function () {
                _this.toast.success(`Estoque ajustado com sucesso!`);
                _this.GetStorageItem();
            });
   
        },

        fixedSring(){
            this.orderItem.product_price = this.orderItem.product_price.replace(',','.');
        },

        ObterClienteCPClose(){
            let _elements = this.$el.children.vcli;
            _elements.classList.add("display-none");
        },

        ObterClienteCP(){
            let _elements = this.$el.children.vcli;
            _elements.classList.remove("display-none");
        },       

        ObterProdutoDado(referencia){
            this.searchItem = referencia.ref;
            this.FindItem();
            
            this.toast.success("Produto selecionado.");
            this.ObterClienteCPClose();
        },

        ObterDadoProduto(){
            let _this = this;
            productService.GetEspecific_NameProduct(this.productDataInfo)
            .then(function(response) {
                successCallBack(response);
            })

            const successCallBack = function (response){
                _this.productDataLoad = response.data.Data;
            }

            this.GetStorageItem();
        },

        GetOrderId(){
            this.orderId = this.$route.params.pedidoId;
        },

        GetStorageItem(){
            let _this = this;
            this.order = [];

            OService.Get_Storage_Item(this.orderItem.ref)
            .then(function(successResponse){
                successCallBack(successResponse.data.Data)
                })

            const successCallBack = (response) =>{
                response.forEach(orderItem =>{
                    _this.order.push({orderItem});
                })
            }
        },

        FinishOrder(){
            let _this = this;
            this.isLoading = !this.isLoading;

            OService.Insert_New_Order_item(this.order)
            .then(function () {
                _this.toast.success(`Pedido salvo com sucesso!`);
            })
        },

        RemoveItem(index){
            let _this = this;
            OService.Delete_Order_Item(index)
            .then(function () {
                _this.toast.success(`Item removido com sucesso!`);
            })
            .catch(()=>{_this.toast.error(`Problema ao remover o item do pedido`);})            
            this.toast.success(`Item removido com sucesso`);
        },

        ClearOrder(){
            this.searchItem = null;
            this.responseItem = {},
            this.responseItem = {
                id: null,
                ref: null,
                size_1:  null,
                size_2:  null,
                size_3:  null,
                size_4:  null,
                size_5:  null,
                size_6:  null,
                size_7:  null,
                size_8:  null,
                size_9:  null,
                size_10: null,
                description: null,
            }

            this.orderItem = {};
            this.orderItem = {
                id: null,
                ref: null,
                description: null,
                size_1:  0,
                size_2:  0,
                size_3:  0,
                size_4:  0,
                size_5:  0,
                size_6:  0,
                size_7:  0,
                size_8:  0,
                size_9:  0,
                size_10: 0,    
                product_price: null           
            };
            this.toast.success(`Campos limpo com sucesso`);
        },

        CreateOrder(){
            let _this = this;

            let bodyToSend = {
                productId:this.orderItem.ref,
                size_0:this.orderItem.size_1,
                size_1:this.orderItem.size_2,
                size_2:this.orderItem.size_3,
                size_3:this.orderItem.size_4,
                size_4:this.orderItem.size_5,
                size_5:this.orderItem.size_6,
                size_6:this.orderItem.size_7,
                size_7:this.orderItem.size_8,
                size_8:this.orderItem.size_9,
                size_9:this.orderItem.size_10,
            };

            this.toast.success(`Item adicionado com sucesso`);
            OService.Insert_Into_Storage(bodyToSend)
            .then(function () {
                _this.toast.success(`Estoque salvo com sucesso!`);
            });

            setTimeout(() => {
                this.GetStorageItem();
            }, 100);
        },

        FieldIsEmpty(field){
            return field == null || field == "" || Object(field).length <= 0;
        },

        FindItem(){
            let _this = this;

            if(String(this.searchItem).length < 4){
                _this.responseItem.id          = null;
                _this.responseItem.ref         = null;
                _this.responseItem.size_1      = null;
                _this.responseItem.size_2      = null;
                _this.responseItem.size_3      = null;
                _this.responseItem.size_4      = null;
                _this.responseItem.size_5      = null;
                _this.responseItem.size_6      = null;
                _this.responseItem.size_7      = null;
                _this.responseItem.size_8      = null;
                _this.responseItem.size_9      = null;
                _this.responseItem.size_10     = null;
                _this.responseItem.description = null; 
            }

            if(String(this.searchItem).length >= 4){
                _this.isLoading = !_this.isLoading;
                productService.GetEspecific_Product(this.searchItem)
                .then(function (response) {
                    _this.responseItem.id          = response.data.Data[0].id;
                    _this.orderItem.ref            = response.data.Data[0].ref.toUpperCase();
                    _this.responseItem.ref         = response.data.Data[0].ref.toUpperCase();
                    _this.responseItem.size_1      = response.data.Data[0].size_0.toUpperCase();
                    _this.responseItem.size_2      = response.data.Data[0].size_1.toUpperCase();
                    _this.responseItem.size_3      = response.data.Data[0].size_2.toUpperCase();
                    _this.responseItem.size_4      = response.data.Data[0].size_3.toUpperCase();
                    _this.responseItem.size_5      = response.data.Data[0].size_4.toUpperCase();
                    _this.responseItem.size_6      = response.data.Data[0].size_5.toUpperCase();
                    _this.responseItem.size_7      = response.data.Data[0].size_6.toUpperCase();
                    _this.responseItem.size_8      = response.data.Data[0].size_7.toUpperCase();
                    _this.responseItem.size_9      = response.data.Data[0].size_8.toUpperCase();
                    _this.responseItem.size_10     = response.data.Data[0].size_9.toUpperCase();
                    _this.orderItem.description    = response.data.Data[0].description.toUpperCase();
                    _this.responseItem.description = response.data.Data[0].description.toUpperCase();
                    _this.isLoading                = !_this.isLoading;
                    _this.toast.success(`Referência ${_this.searchItem} Encontrada`);
                    _this.GetStorageItem();
                })
                .catch(function() {
                    _this.toast.error(`Referência ${_this.searchItem} não encontrada`);
                    _this.isLoading                = !_this.isLoading;
                    _this.responseItem.id          = null;
                    _this.responseItem.ref         = null;
                    _this.responseItem.size_1      = null;
                    _this.responseItem.size_2      = null;
                    _this.responseItem.size_3      = null;
                    _this.responseItem.size_4      = null;
                    _this.responseItem.size_5      = null;
                    _this.responseItem.size_6      = null;
                    _this.responseItem.size_7      = null;
                    _this.responseItem.size_8      = null;
                    _this.responseItem.size_9      = null;
                    _this.responseItem.size_10     = null;
                    _this.responseItem.description = null;                    
                });     
            }
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

.number-element{
    width: 50px;
    height: 25px;
    display: flex;
    border-radius: 4px;
    align-items:center;
    color: rgb(104, 171, 2);
    justify-content: center;
    background-color: rgba(172, 255, 47, 0.299);
    border: 1px solid rgba(172, 255, 47, 0.834);
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
        height: 40px;
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

    .back-color-orange{
        background-color:#f49c21;
    }

    .back-color-orange:hover{
        cursor: pointer;
        background-color:#e08c17;
    }    

    .back-color-green{
        background-color:#67f421;
    }

    .back-color-green:hover{
        cursor: pointer;
        background-color:#7fe017;
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

    .btn-disabled{
        background: grey;
        transition: 250ms ease-in-out;
    }

    .btn-disabled:hover{
        background: rgb(146, 146, 146);
    }    

    .del-btn{
        width: 100%;
        border-radius: 2px;
        background: #ff0000b5;
        height: 26px;
        border: 1px solid #ff0000e6;
        color: #880000e6;
        font-weight: bold;
        transition: 250ms ease-in-out;
        }    

    .del-btn:hover{
        cursor: pointer;
        color: #880000e6;
        background: #fe2929b5;
        border: 1px solid #ff0000e6;
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
</style>