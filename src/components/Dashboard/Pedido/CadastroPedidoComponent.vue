<template>
    <div id="cadastro-de-produto">
        <LoadingComponent :isLoading="isLoading"/>

        <div v-if="ajustePedido" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.262); position: absolute; left:0; top: 0; bottom:0; display: flex; justify-content:center;align-items:center; box-sizing: border-box; padding: 13px;">
            
            <div style="width: 400px; min-height: 250px; height:auto; overflow: hidden; background-color: #fefefe; border-radius: 2px; box-shadow: #00000080 0px 2px 5px; box-sizing: border-box;">
                <div style="width: 100%; height: 35px; border-bottom: 1px solid grey; display: flex; align-items:center; justify-content:space-between;">
                    <h5 style="margin-left: 13px;">Ajuste de Pedido</h5>
                    <button @click="this.ajustePedido = !this.ajustePedido" style="cursor:pointer; border:none; background-color: transparent;" >
                        <unicon name="times-circle" fill="#181818" style="padding-top: 5px; padding-right: 13px;"/>
                    </button>
                </div>

                <div>
                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Pedido:</label>
                                <br/>
                                <input v-model="numeroPedidoAjuste" type="text" name="" placeholder="Número Pedido" id="">
                            </td>             
                        </tr>
                    </table> 
                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Situação Pedido:</label>
                                <br/>
                                <select v-model="situacaopedidoAjuste" style="width: 100%; border:1px solid grey; border-radius: 2px; background-color: transparent; color: grey;">
                                    <option :value="0" >PENDENTE</option>
                                    <option :value="1" >FINALIZADO</option>
                                </select>
                            </td>             
                        </tr>
                    </table> 


                    <div style="width: 100%; display: flex; flex-direction: row; no-wrap;">
                        <div style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.AjustarSituacaoPedido()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">AJUSTAR SITUAÇÃO DO PEDIDO</button> 
                        </div>                     
                    </div>                                                     
                </div>
            </div>
        </div> 

        <div v-if="consumo" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.262); position: absolute; left:0; top: 0; bottom:0; display: flex; justify-content:center;align-items:center; box-sizing: border-box; padding: 13px;">
            
            <div style="width: 400px; min-height: 250px; height:auto; overflow: hidden; background-color: #fefefe; border-radius: 2px; box-shadow: #00000080 0px 2px 5px; box-sizing: border-box;">
                <div style="width: 100%; height: 35px; border-bottom: 1px solid grey; display: flex; align-items:center; justify-content:space-between;">
                    <h5 style="margin-left: 13px;">Filtros</h5>
                    <button @click="this.consumo = !this.consumo" style="cursor:pointer; border:none; background-color: transparent;" >
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
                        <div style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.RelatorioConsumo()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">IMPRIMIR CONSUMO ATUAL</button> 
                        </div>                     
                    </div>                                                     
                </div>
            </div>
        </div>          

        <div v-if="filter" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.262); position: absolute; left:0; top: 0; bottom:0; display: flex; justify-content:center;align-items:center; box-sizing: border-box; padding: 13px;">
            
            <div style="width: 400px; min-height: 250px; height:auto; overflow: hidden; background-color: #fefefe; border-radius: 2px; box-shadow: #00000080 0px 2px 5px; box-sizing: border-box;">
                <div style="width: 100%; height: 35px; border-bottom: 1px solid grey; display: flex; align-items:center; justify-content:space-between;">
                    <h5 style="margin-left: 13px;">Filtros</h5>
                    <button @click="this.filter = !this.filter" style="cursor:pointer; border:none; background-color: transparent;" >
                        <unicon name="times-circle" fill="#181818" style="padding-top: 5px; padding-right: 13px;"/>
                    </button>
                </div>

                <div>
                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding:13px">
                            <td>
                                <label for="datainicial">Data Inicial:</label>
                                <br/>
                                <input type="date" name="datainicial" style="height: 35px;" v-model="date.startDateDirty">
                            </td>

                            <td>
                                <label for="datafinal">Data Final:</label>
                                <br/>
                                <input type="date" name="datafinal" style="height: 35px;" v-model="date.endDateDirty">
                            </td>                            
                        </tr>
                    </table>   

                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Situação do Pedido:</label>
                                <br/>
                                <select v-model="forderSts" style="width: 100%; border:1px solid grey; border-radius: 2px; background-color: transparent; color: grey;">
                                    <option :value="''">ESCOLOHA UMA SITUAÇÃO</option>
                                    <option :value="'TODAS'">TODAS</option>
                                    <option :value="'NEGOCIAÇÃO'">NEGOCIAÇÃO</option>
                                    <option :value="'DESENHOS'">DESENHOS</option>
                                    <option :value="'AG.LOGOS'">AG.LOGOS</option>
                                    <option :value="'AG.PEDIDO'">AG.PEDIDO</option>
                                    <option :value="'GRADUAÇÃO'">GRADUAÇÃO</option>
                                    <option :value="'PLOTAGEM'">PLOTAGEM</option>
                                    <option :value="'SUBLIMAÇÃO'">SUBLIMACAO</option>
                                    <option :value="'COSTURA'">COSTURA</option>
                                    <option :value="'EMBALAGEM'">EMBALAGEM</option>
                                    <option :value="'DESPACHAR'">DESPACHAR</option>
                                    <option :value="'ENTREGUE'">ENTREGUE</option>
                                </select>
                            </td>             
                        </tr>
                    </table> 

                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Situação do Pagamento:</label>
                                <br/>
                                <select v-model="pagtoSts" style="width: 100%; border:1px solid grey; border-radius: 2px; background-color: transparent; color: grey;">
                                    <option :value="''">ESCOLOHA UMA SITUAÇÃO</option>
                                    <option :value="'0'">PENDENTE</option>
                                    <option :value="'1'">PAGO</option>
                                </select>
                            </td>             
                        </tr>
                    </table>  

                    <table style="width: 100%; border-bottom: 1px dashed rgba(0, 0, 0, 0.262);">
                        <tr style="width: 100%; display: flex; justify-content: space-between; box-sizing: border-box; padding: 13px">
                            <td style="width: 100%;">
                                <label for="datainicial">Pedido Finalizado?</label>
                                <br/>
                                <select v-model="pedSts" style="width: 100%; border:1px solid grey; border-radius: 2px; background-color: transparent; color: grey;">
                                    <option :value="''">ESCOLOHA UMA SITUAÇÃO</option>
                                    <option :value="'0'">NÃO</option>
                                    <option :value="'1'">SIM</option>
                                </select>
                            </td>             
                        </tr>
                    </table>                            


                    <div style="width: 100%; display: flex; flex-direction: row; no-wrap;">
                        <div v-if="(this.date.startDateDirty != '01/01/1999' && this.date.endDateDirty != '01/01/1999' && this.forderSts != '' && this.pagtoSts != '')" style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.getReportOrder()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">IMPRIMIR</button> 
                        </div>  

                        <div style="width: 100%; height: 50px; display: flex; align-items: center; justify-content: center;">
                            <button @click="this.clearFilter()" style="cursor: pointer; width: 60%; height: 35px; border: 1px solid rgba(0, 0, 0, 0.262); border-radius: 2px; background-color: rgba(0, 0, 0, 0.262); color: #fefefe; font-weight: 500; text-shadow: 2px #181818">LIMPAR FILTROS</button> 
                        </div>                     
                    </div>                                                     
                </div>
            </div>
        </div>        

        <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
            <div style="display: flex; justify-content: space-between; width: 100%; background-color: #232425; border-radius: 2px 2px 0px 0px;">
                <div style="width: 100%; display: inline-flex;">
                
                    <div style="display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px; cursor: pointer;">
                        <div style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Cadastro de Pedido</div>                    
                        <unicon name="file" fill="#fefefe" v-on:click="this.$router.push('/cadastro-cabecalho-pedido')"/>
                    </div>

                    <div v-on:click="this.ajustePedido = !this.ajustePedido" style="display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px; cursor: pointer;">
                        <div style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Ajuste de Pedido</div>                    
                        <unicon name="file" fill="#fefefe"/>
                    </div>                       

                    <div v-on:click="this.consumo = !this.consumo" style="display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px; cursor: pointer;">
                        <div style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Visualizar Consumo</div>                    
                        <unicon name="eye" fill="#fefefe"/>
                    </div>                       
                    
                <div style="border: 1px solid black; display: flex; align-items:center; box-sizing: border-box; padding: 0px 13px; background-color: white;">
                    <input type="text" v-model="CampoDePesquisa" style="border: none;" placeholder="Nome do Cliente">
                    <unicon style="font-size: 4px!important;" name="search" fill="#181818" />
                </div>                              
                
                </div>              

                <div style="display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px;">
                    <button @click="this.filter = !this.filter" style="border:none; background-color: transparent;">
                        <unicon name="ellipsis-v" fill="#fefefe"/>
                    </button>
                </div>                
            </div>       

            <div style="width: 100%;display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: border-box; margin-top:21px;margin-left:21px; font-size: 13px;">                                                                                                                                                                                                                                                                                                                                       
                <div style="padding: 0px; width: 50px;">Número</div>
                <div style="padding: 0px; width: 100px;">Data Pedido</div>
                <div style="padding: 0px; width: 150px;">Cliente</div>
                <div style="padding: 0px; width: 150px;">Rep/Vendedor</div>
                <div style="padding: 0px; width: 40px;">Peças</div>              
                <div style="padding: 0px; width: 80px;">Total</div>
                <div style="padding: 0px; width: 100px;">Data de Entrega</div>
                <div style="padding: 0px; width: 100px;">Status</div>
                <div style="padding: 0px; width: 100px;">Pagamento</div>
                <div style="padding: 0px; width: 80px;">Finalizado</div>
                <div style="padding: 0px; width: 50px"></div>
                <div style="padding: 0px; width: 50px"></div>          
                <div style="padding: 0px; width: 50px"></div>
                <div style="padding: 0px; width: 50px"></div>
            </div>

            <div style="width: 100%; display: flex; justify-content: space-between; flex-wrap: wrap; box-sizing: border-box; margin-left:21px;">
                <div style="width: 100%; display: flex; justify-content: space-between; align-items:center; box-sizing: border-box; margin-top: 13px;" v-for="io in pesquisaPedidoLista" :key="io.id">
                   
                    <div style="width: 50px; box-sizing: border-box;">
                        <input type="text" name="numeroPedido" id="" style="width: 100%;" :disabled="true" v-bind:value="io.NUMERO_PEDIDO">
                    </div>

                    <div style="width: 100px; box-sizing: border-box;">
                        <input type="text" name="dtCriacaoPedido" id="" style="width: 100%;" :disabled="true" v-bind:value="io.DATA_PEDIDO">
                    </div>   

                    <div style="width: 150px; box-sizing: border-box;">
                        <input type="text" name="nomeCliente" id="" style="width: 100%;" :disabled="true" v-bind:value="io.CLIENTE">
                    </div>  

                    <div style="width: 150px; box-sizing: border-box;">
                        <input type="text" name="nomeCliente" id="" style="width: 100%;" :disabled="true" v-bind:value="io.representante">
                    </div>                                     

                    <div style="width: 40px; box-sizing: border-box;">
                        <input type="text" name="qtdeTotal" id="" style="width: 100%;" :disabled="true" v-bind:value="io.PECAS">
                    </div>        

                    <div style="width: 80px; box-sizing: border-box;">
                        <input v-money="money" type="text" name="valorTotal" id="" style="width: 100%;" :disabled="true" v-bind:value="io.TOTAL">
                    </div>                      

                    <div style="width: 100px; box-sizing: border-box;">
                        <input type="text" name="dtCriacaoPedido" id="" style="width: 100%;" :disabled="true" v-bind:class="{'deadLine': this.verifica(io.DATA_PEDIDO, io.DATA_DE_ENTREGA)}" v-bind:value="io.DATA_DE_ENTREGA">
                    </div>    

                    <div style="width: 100px; box-sizing: border-box;">
                        <select v-model="io.STATUS_PEDIDO" @change="MudaStatusPedido(io.NUMERO_PEDIDO, io.STATUS_PEDIDO)" style="background-color: transparent; border: 1px solid #cecece; border-radius: 4px; height: 20px; color: #353535; width: 100%; font-size: 10px;">
                            <option :value="0">NEGOCIAÇÃO</option>
                            <option :value="1">DESENHOS</option>
                            <option :value="2">AG.LOGOS</option>
                            <option :value="3">AG.PEDIDO</option>
                            <option :value="4">GRADUAÇÃO</option>
                            <option :value="5">PLOTAGEM</option>
                            <option :value="6">SUBLIMACAO</option>
                            <option :value="7">COSTURA</option>
                            <option :value="8">EMBALAGEM</option>
                            <option :value="9">DESPACHAR</option>
                            <option :value="10">ENTREGUE</option>
                        </select>
                    </div>                                 

                    <div style="width: 100px; box-sizing: border-box;">
                        <select @change="MudaStatusPagamento(io.NUMERO_PEDIDO, io.PAGAMENTO)" v-model="io.PAGAMENTO" style="background-color: transparent; border: 1px solid #cecece; border-radius: 4px; height: 20px; color: #353535; width: 100%; font-size: 10px;">
                            <option :value="1">FINALIZADO</option>
                            <option :value="0">PENDENTE</option>
                        </select>
                    </div>

                    <div style="width: 80px; box-sizing: border-box;">
                        <input type="checkbox" name="finished" id="" style="width: 80px;" @change="FinalizaPedido(io.NUMERO_PEDIDO)">
                    </div>  

                    <button class="cursor" style="padding: 0px; width: 50px; border: none; background-color: transparent;" @click="this.$router.push(`/cadastro-de-pedido-informacoes/${io.NUMERO_PEDIDO}`)">
                        <unicon name="clipboard" fill="#181818"></unicon>
                    </button>                      

                    <button class="cursor" style="padding: 0px; width: 50px; border: none; background-color: transparent;" @click="this.$router.push(`/cadastro-de-pedido-itens/${io.NUMERO_PEDIDO}`)">
                        <unicon name="edit" fill="#181818"></unicon>
                    </button>                      

                    <button style="padding: 0px; width: 50px; border: none; background-color: transparent; cursor:pointer;" @click="this.myFunction(io.NUMERO_PEDIDO)">
                        <unicon name="print" fill="#181818"></unicon>
                    </button>  

                    <button class="cursor" style="padding: 0px; width: 50px; border: none; background-color: transparent;" @click="this.DeleteOrder(io.NUMERO_PEDIDO)">
                        <unicon name="trash-alt" fill="#181818"></unicon>
                    </button>                
                </div>                  
            </div>      
        </div>  
    </div>
</template>

<script>
import OrderService from '../../../services/OrderService.js';
import ProductService from '../../../services/ProductService'
import LoadingComponent from '../../Functions/Loading/LoadingComponent.vue'
import { useToast } from "vue-toastification";

let OService = new OrderService();
let PService = new ProductService();

export default {
    name:'CadastroPedidoComponent',
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
        return{
            situacaopedidoAjuste: null,
            numeroPedidoAjuste: null,
            ajustePedido:false,
            CampoDePesquisa:'',
            pedSts: '',
            pagtoSts: '',
            productSelect:'',
            consumoSts: '',
            produtos:[],
            filter: false,
            consumo: false,
            forderSts: '',
            date:{
                startDateDirty: '01/01/1999',
                sendDateDirty: '01/01/1999',
                startDateClean: '01/01/1999',
                endDateClean: '01/01/1999'
            },
            isLoading: false,
            orders:  [],
            orderSts: null,
            money: {
            decimal: ',',
            thousands: '.',
            prefix: 'R$ ',
            suffix: '',
            precision: 2,
            masked: false /* doesn't work with directive */
            }            
        }
    },

    watch: {
        'forderSts':{
            handler(){
                console.log(this.forderSts);
            }
        },
        'date.startDateDirty':{
            handler(){
                let newdate = this.date.startDateDirty.split('-');
                let startdate = `${newdate[2]}-${newdate[1]}-${newdate[0]}`;
                this.date.startDateClean = startdate
                console.log(this.date.startDateClean)
            }
        },
        'date.endDateDirty':{
            handler(){
                let newdate = this.date.endDateDirty.split('-');
                let enddate = `${newdate[2]}-${newdate[1]}-${newdate[0]}`;
                this.date.endDateClean = enddate
                console.log(this.date.endDateClean)
            }
        }        
    },

    mounted(){
        this.GetOders();
    },

    methods:{
        AjustarSituacaoPedido(){
            let t = this;
            OService.mudaPedido(this.numeroPedidoAjuste, this.situacaopedidoAjuste).then( () =>{
                t.toast.success("Pedido alterado com sucesso.");
            })
            this.GetOders();             
        },
        obterProdutos(){
            PService.GetAll_Product().then((res) => {
                this.produtos = res.data;
            })
        },
        clearFilter: function(){
            this.forderSts           = '';
            this.date.endDateDirty   = '01/01/1999';
            this.date.startDateDirty = '01/01/1999';
        },
        getFilterReport: function(){
            let _this = this;
            let Payload = {
                data_inicial: _this.date.startDateClean,
                data_final  : _this.date.endDateClean,
                situacao    : _this.date.forderSts
            }

            OService.getReport(Payload)
        },

        myFunction: function (param) {   

            window.open("http://agenciaemblemente.com/api/pedido/obterDadosRelatorio/"+param, "_blank");    
          },    

        getReportOrder(){
        let durl = this.pedSts == '' ? `http://agenciaemblemente.com/api/pedido/obterRelatorioPedido/${this.date.startDateClean}/${this.date.endDateClean}/${this.forderSts}/${this.pagtoSts}` : `http://agenciaemblemente.com/api/pedido/obterRelatorioPedido/${this.date.startDateClean}/${this.date.endDateClean}/${this.forderSts}/${this.pagtoSts}/${this.pedSts}`; 
        window.open(durl,"_blank");
        },  

        RelatorioConsumo(){
        let dsurl = this.productSelect != '' ? `http://agenciaemblemente.com/api/pedido/obterRelatorioConsumo/${this.productSelect}` : `http://agenciaemblemente.com/api/pedido/obterRelatorioConsumo/`; 
        window.open(dsurl,"_blank");
        },  
        
        
        async FinalizaPedido(value){
            await OService.SetOrderOff(value);
            this.GetOders(); 
        },

        verifica(criacao, entrega){
            let _diaCriacao = String(criacao).substring(0, 2);
            let _mesCriacao = String(criacao).substring(3, 5);
            let _anoCriacao = String(criacao).substring(6, 10);

            let _diaEntrega = String(entrega).substring(0, 2);
            let _mesEntrega = String(entrega).substring(3, 5);
            let _anoEntrega = String(entrega).substring(6, 10);            

            let _criacao = new Date(`${_anoCriacao}/${_mesCriacao}/${_diaCriacao}`);
            let _entrega = new Date(`${_anoEntrega}/${_mesEntrega}/${_diaEntrega}`);

            let diferencaTempo = Math.abs(_entrega.getTime() - _criacao.getTime());
            let diferencaDias  = Math.ceil(diferencaTempo / (1000 * 3600 * 24)); 
            
            if(diferencaDias <= 10){
                return true;
            }

            return false;
        },

        MudaStatusPedido(_numero_pedido, _sts_pedido){
            OService.Change_Status_Order(_numero_pedido, _sts_pedido);
            this.GetOders(); 
        },

        MudaStatusPagamento(_numero_pedido, _sts_pagamento){
            //let _this = this;
            OService.Change_Status_Pay(_numero_pedido, _sts_pagamento);
            this.GetOders(); 
        },

        GetOders(){
            let _this = this;
            this.isLoading = !this.isLoading;

            OService.Get_Orders().then(function (response) {
                _this.orders = response.data.Data;
                _this.isLoading = !_this.isLoading;
            });

            PService.GetAll_Product().then((res) => {
                _this.produtos = res.data.Data;
                res.data.Data.forEach(produto => {
                    _this.produtos.push(produto)
                });
            });
        },

        DeleteOrder(value){
            let _this = this;
            this.isLoading = !this.isLoading;

            OService.Delete_Order(value)
            .then(function () {
                _this.GetOders();
                _this.isLoading = !_this.isLoading;
            })
        },        
    },
    computed:{
        pesquisaPedidoLista(){
                let __THIS__ = this;
                return this.orders.filter(function (valor) {
                    return (valor.CLIENTE.match(__THIS__.CampoDePesquisa))
                })
        },        
    }
}
</script>

<style scoped>

.deadLine{
    border-radius: 2px;
    border: 1px solid rgba(255, 0, 0, 0.498);
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

    .cursor:hover{
        cursor:pointer;
    }
</style>