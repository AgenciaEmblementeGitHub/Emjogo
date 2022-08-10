<template>
    <div id="cadastro-de-produto">
            <div id="carregando" v-if="this.isLoading">
                <img src="/src/assets/assets/spinner.gif" alt="Logo Uniformes LA" style="width: 5%;">
            </div>        
      <navigation-bar />
            <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
                <div style="display: flex; width: 100%; background-color: #232425; border: 1px solid #00000026;">
                    <ul style="list-style:none; display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px">
                        <li style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Cadastrar Produto </li>
                    </ul>
                </div>
                <fieldset style="width: 100%; min-height: 50%; height: auto; display: flex; justify-content: space-between; box-sizing: border-box; padding: 21px;">
                     <div>
                        <label for="description">Grupo:</label>
                        <div>
                            <select name="type_group" id="size_group_select" v-model="ProductDetails.Group">
                                <option>Selecione um grupo</option>
                                <option v-for="sg in ProductSteps.ProductGroup" :key="sg.id" :value="sg.id">{{sg.description}}</option>
                            </select>
                        </div>                            
                    </div>               

                    <div>
                        <label for="description">Referência:</label>
                        <div>
                            <input style="width: 90px;" type="text" name="description" id="description" placeholder="Referência" class="input-350" v-model="ProductDetails.Ref">
                        </div>                            
                    </div>                        
                    
                    <div>
                        <label for="description">Descrição:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Descrição" class="input-350" v-model="ProductDetails.Description">
                        </div>                            
                    </div>                  

                    <div>
                        <label for="description">Grades de Tamanho:</label>
                        <div>
                            <select name="size_group" id="size_group_select" v-model="ProductDetails.Size">
                                <option>Selecione uma Grade</option>
                                <option v-for="sg in ProductSteps.SizeGroup" :key="sg.id" :value="sg.id">{{sg.description}}</option>
                            </select>                          
                        </div>                            
                    </div>

                     <div>
                        <label for="description">Unidade Venda:</label>
                        <div>
                            <select name="sales_un" id="size_group_select" v-model="ProductDetails.Unit">
                                <option>Selecione uma Unidade</option>
                                <option v-for="sg in ProductSteps.UnitGroup" :key="sg.id" :value="sg.id">{{sg.description}}</option>
                            </select>
                        </div>                            
                    </div>                    

                    <div>
                        <label for="description">Custo:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Custo" class="input-80" v-model="ProductDetails.Cost">
                        </div>                            
                    </div>                                                          
                </fieldset>              
            </div>        
        <button class="button back-color-blue" @click="Insert_Product()">Cadastrar Produto</button>            

                    <div style="margin: 34px 0px; display: flex; flex-direction: column; justify-content: flex-start;">
                <table style="display: flex; width: 100%;">
                    <thead style="width: 100%;">
                        <tr style="font-size: 14px; color: #9d9d9d; width: 100%; height: 30px; display: flex; justify-content: space-between; box-sizing: border-box;">
                            <th style="width:20px;">Ref</th>  
                            <th style="width:350px;">Descrição</th>  
                            <th style="width:20px;">Tam1</th>  
                            <th style="width:20px;">Tam2</th>  
                            <th style="width:20px;">Tam3</th>  
                            <th style="width:20px;">Tam4</th>  
                            <th style="width:20px;">Tam5</th>
                            <th style="width:20px;">Tam6</th>
                            <th style="width:20px;">Tam7</th>
                            <th style="width:20px;">Tam8</th>                                                        
                            <th style="width:20px;">Tam9</th>                                                        
                            <th style="width:20px;">Tam10</th>                                                        
                            <th style="width:47px;">Grupo</th>                                                        
                            <th style="width:47px;">Unidade</th>                                                        
                            <th style="width:47px;">Excluir</th>      
                        </tr>
                    </thead>
                </table>

                <table style="display: flex; width: 100%;">
                    <tbody style="width: 100%; height: 500px; overflow-y: scroll;">
                        <tr v-for="pg in this.Products" :key="pg.ID_PROD" style="font-size: 13px; width: 100%; height: 50px; display: flex; justify-content: space-between; box-sizing: border-box; border-bottom: 0.09rem dashed rgb(213, 213, 213); align-items: center; border-radius: 3px;">
                            <th style="width:20px;">{{pg.REFERENCIA}}</th>  
                            <th style="width:350px;">{{pg.PRODUTO_DESC}}</th>  
                            <th style="width:20px;">{{pg.TAM1}}</th>  
                            <th style="width:20px;">{{pg.TAM2}}</th>  
                            <th style="width:20px;">{{pg.TAM3}}</th>  
                            <th style="width:20px;">{{pg.TAM4}}</th>  
                            <th style="width:20px;">{{pg.TAM5}}</th>
                            <th style="width:20px;">{{pg.TAM6}}</th>
                            <th style="width:20px;">{{pg.TAM7}}</th>
                            <th style="width:20px;">{{pg.TAM8}}</th>                                                        
                            <th style="width:20px;">{{pg.TAM9}}</th>                                                        
                            <th style="width:20px;">{{pg.TAM10}}</th>                                                        
                            <th style="width:47px;">{{pg.GRUPO_PRODUTO}}</th>                                                        
                            <th style="width:47px;">{{pg.UNIDADE_VENDA}}</th>     
                            <div @click="Delete_Product(pg.ID_PROD)" style="width: 47px; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #fb0000;color: #fefefe;font-weight: 900;">
                                <p>X</p>
                            </div>                                                                                                
                        </tr>
                    </tbody>
                </table>                
            </div>
    </div>
</template>

<script>
import NavigationBar from './NavigationBar.vue'
import ProductService from '../../../services/ProductService.js';

let Service = new ProductService();

export default {
    name:'CadastroProduto',
        components:{
        NavigationBar
    },    
    data(){
        return{
            isLoading: false,

            Products:{},

            ProductDetails:{
                Group: '',
                Ref: '',
                Description: '',
                Size: '',
                Unit: '',
                Cost: ''
            },

            ProductSteps:{
                UnitGroup:{},
                SizeGroup: {},
                ProductGroup: {}
            }
        }
    },
    mounted(){
        this.GetAll_Product();
        this.GetAll_Unit_Group();
        this.GetAll_Size_Group();
        this.GetAll_Product_Group();
    },
    methods:{
        Insert_Product(){
            this.isLoading = true;
            Service.Insert_New_Product(this.ProductDetails).then(()=>{
                this.GetAll_Product();
                this.isLoading = false;
            });
        },

        GetAll_Product(){
            this.isLoading = true;
            Service.GetAll_Product().then((success => {
                    this.Products = success.data.Data;
                    this.isLoading = false;
                }))
        },
        
        GetAll_Unit_Group(){
            this.isLoading = true;
            Service.GetAll_Unit().then((success)=>{this.ProductSteps.UnitGroup = success.data.Data});
        },        

        GetAll_Size_Group(){
            this.isLoading = true;
            Service.GetAll_Size_Group().then((success)=>{this.ProductSteps.SizeGroup = success.data.Data});
            this.isLoading = false;
        },

        GetAll_Product_Group(){
            this.isLoading = true;
            Service.GetAll_Product_Group().then((success)=>{this.ProductSteps.ProductGroup = success.data.Data});
            this.isLoading = false;
        },  
        
        Delete_Product(value){
            this.isLoading = true;
            console.log(value);
            Service.Delete_Product(value).then(()=>{
                this.GetAll_Product();
            });
            this.GetAll_Product();
            this.isLoading = false;
        },           
    }
}
</script>

<style>
    label{
        font-size: 13px;
        font-weight: 500;
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

    .input-80{
        width: 80px; 
        height: 40px; 
        outline:none; 
        box-sizing: 
        border-box; 
        padding: 8px; 
        border: 1px solid rgba(0, 0, 0, 0.275); 
        border-radius: 3px; 
        transition: all 250ms;        
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
</style>