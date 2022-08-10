<template>
    <div id="cadastro-de-produto">
        <navigation-bar />
            <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
                <div style="display: flex; width: 100%; background-color: #232425; border: 1px solid #00000026;">
                    <ul style="list-style:none; display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px">
                        <li style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Cadastrar Unidade de Venda </li>
                    </ul>
                </div>
                <fieldset style="width: 100%; min-height: 50%; height: auto; display: flex; justify-content: flex-start; box-sizing: border-box; padding: 21px;">               
                    <div>
                        <label for="description">Descrição:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Descrição" style="margin-right:19px;" class="input-350" v-model="UnitGroupDataModel.UnitModel.description" :class="{'input-check': UnitGroupDataModel.UnitModel.description != ''}">
                        </div>                            
                    </div>                   
                   
                    <div>
                        <label for="description">Código:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Cód" class="input-40" v-model="UnitGroupDataModel.UnitModel.code" :class="{'input-check': UnitGroupDataModel.UnitModel.code != ''}">
                        </div>                            
                    </div>                                                                                                                                                                                                                                               
                </fieldset>
                <button class="button back-color-blue" @click="Insert_New_Unit()">Cadastrar Unidade de Venda</button>
            </div>        

            <div style="margin: 34px 0px; display: flex; flex-direction: column; justify-content: flex-start;">
                <table style="display: flex; width: 100%;">
                    <thead style="width: 100%;">
                        <tr style="font-size: 14px; color: #9d9d9d; ;idth: 100%; height: 30px; display: flex; justify-content: space-between; box-sizing: border-box;">
                            <th style="width:47px;">Status:</th>
                            <th style="width:350px;">Descrição:</th>
                            <th style="width:47px;">Código</th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>                                                        
                            <th style="width:67px;"></th>                                                       
                        </tr>
                    </thead>
                </table>

                <table style="display: flex; width: 100%;">
                    <tbody style="width: 100%;">
                        <tr v-for="pg in this.UnitGroup" :key="pg.id" style="font-size: 13px; width: 100%; height: 50px; display: flex; justify-content: space-between; box-sizing: border-box; border-bottom: 0.09rem dashed rgb(213, 213, 213); align-items: center; border-radius: 3px;">
                            <th style="width:350px;">{{pg.description}}</th>   
                            <th style="width:47px;">{{pg.code}}</th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>
                            <th style="width:47px;"></th>                                                       
                            <th style="width:114px;">
                                <div style="100%; border: 1px solid #cecece; height: 30px; border-radius: 3px; display: flex; align-items: center;">
                                    <div style="width: 57px; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #fefefe;color: #181818;font-weight: 900;">
                                        <p>|</p>
                                    </div>

                                    <div @click="this.Delete_Unit(pg.id)" style="width: 57px; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #fb0000;color: #fefefe;font-weight: 900;">
                                        <p>X</p>
                                    </div>                                                                      
                                </div>
                            </th>                                                       
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
    name:'CadastroDeUnidadeVenda',
        components:{
        NavigationBar
    },    
    data(){
        return{
            UnitGroupDataModel:{
                UnitModel: {
                    code: '',
                    description:''
                }
            },
            UnitGroup:{}
        }
    },
    mounted(){
        this.GetAll_Unit();
    },
    methods:{
        Insert_New_Unit(){
            Service.Insert_New_Unit(this.UnitGroupDataModel.UnitModel).then(() => 
            {
                this.GetAll_Unit()
            });
        },      

        GetAll_Unit(){
            Service.GetAll_Unit().then((success)=>
            {
                this.UnitGroup = success.data.Data
            });
        },  

        Delete_Unit(value){
            Service.Delete_Unit(value).then(function () {
                this.GetAll_Unit();
            });
        },

        TransformTextRender(value){
            let response = value == "" ? "-" : value.toUpperCase();
            return response;
        }        
    }
}
</script>

<style scoped>
    .status-circle{
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 20px;
        background-color: greenyellow;
        box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.189);     
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
</style>