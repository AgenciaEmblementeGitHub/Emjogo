<template>
    <div id="cadastro-de-produto">
        <navigation-bar />
            <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
                <div style="display: flex; width: 100%; background-color: #232425; border: 1px solid #00000026;">
                    <ul style="list-style:none; display: flex; height: 40px; align-items: center; box-sizing: border-box; padding: 0px 0px 0px 21px">
                        <li style="margin: 0px 12px 0px 0px; font-size: 14px; padding:0; color: #fefefe; font-weight: 600;">Cadastrar Grupo de Tamanho </li>
                    </ul>
                </div>
                <fieldset style="width: 100%; min-height: 50%; height: auto; display: flex; justify-content: space-between; box-sizing: border-box; padding: 21px;">               
                    <div>
                        <label for="description">Descrição:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Descrição" class="input-350" v-model="ProductGroupDataModel.SizeGroup.description" :class="{'input-check': ProductGroupDataModel.SizeGroup.description != ''}">
                        </div>                            
                    </div>                   
                   
                    <div>
                        <label for="description">Tam 1:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_0" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_0 != ''}">
                        </div>                            
                    </div>

                    <div>
                        <label for="description">Tam 2:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_1" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_1 != ''}">
                        </div>                            
                    </div>  

                    <div>
                        <label for="description">Tam 3:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_2" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_2 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 4:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_3" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_3 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 5:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_4" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_4 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 6:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_5" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_5 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 7:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_6" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_6 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 8:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_7" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_7 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 9:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_8" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_8 != ''}">
                        </div>                            
                    </div>   

                    <div>
                        <label for="description">Tam 10:</label>
                        <div>
                            <input type="text" name="description" id="description" placeholder="Tam" class="input-40" v-model="ProductGroupDataModel.SizeGroup.size_9" :class="{'input-check': ProductGroupDataModel.SizeGroup.size_9 != ''}">
                        </div>                            
                    </div>                                                                                                                                                                                                                                                  
                </fieldset>
                <button class="button back-color-blue" @click="Insert_New_Size_Group()">Cadastrar Grupo de Tamanho</button>
            </div>        

            <hr>

            <div style="margin: 34px 0px; display: flex; flex-direction: column; justify-content: flex-start;">
                <table style="display: flex; width: 100%;">
                    <thead style="width: 100%; border-bottom: 1px solid black; ">
                        <tr style="width: 100%; height: 30px; display: flex; justify-content: space-between; box-sizing: border-box;">
                            <th style="width:350px;">Descrição:</th>
                            <th style="width:47px;">Tam 1</th>
                            <th style="width:47px;">Tam 2</th>
                            <th style="width:47px;">Tam 3</th>
                            <th style="width:47px;">Tam 4</th>
                            <th style="width:47px;">Tam 5</th>
                            <th style="width:47px;">Tam 6</th>
                            <th style="width:47px;">Tam 7</th>
                            <th style="width:47px;">Tam 8</th>                                                        
                            <th style="width:47px;">Tam 9</th>  
                            <th style="width:20px;"></th>                                                       
                        </tr>
                    </thead>
                </table>

                <table style="display: flex; width: 100%;">
                    <tbody style="width: 100%;">
                        <tr v-for="sg in this.SizeGroup" :key="sg.id" style="font-size: 13px; width: 100%; height: 50px; display: flex; justify-content: space-between; box-sizing: border-box; border-bottom: 0.09rem dashed rgb(213, 213, 213); align-items: center; border-radius: 3px;">
                            <th style="width:350px;">{{sg.description}}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_0) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_1) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_2) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_3) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_4) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_5) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_6) }}</th>
                            <th style="width:47px;">{{ TransformTextRender(sg.size_7) }}</th>                                                        
                            <th style="width:47px;">{{ TransformTextRender(sg.size_8) }}</th>  
                            <th style="width:20px;">
                                <button @click="Delete_Size_Group(sg.id)" style="width: 20px; color:#fefefe;height: 20px;background: #db1a1a;border: 1px solid #8c0b0b;border-radius: 3px;">X</button>
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
    name:'CadastroDeGrupoDeTamanhoComponent',
        components:{
        NavigationBar
    },
    data(){
        return{
            ProductGroupDataModel:{
                SizeGroup: {
                    size_0:'',
                    size_1:'',
                    size_2:'',
                    size_3:'',
                    size_4:'',
                    size_5:'',
                    size_6:'',
                    size_7:'',
                    size_8:'',
                    size_9:'',
                    description:''
                }
            },
            SizeGroup:{}
        }
    },
    mounted(){
        this.GetAll_Size_Group();
    },
    methods:{
        Insert_New_Size_Group(){
            Service.Insert_New_Size_Group(this.ProductGroupDataModel.SizeGroup).then(()=>{this.GetAll_Size_Group()});
        },

        GetAll_Size_Group(){
            Service.GetAll_Size_Group().then((success)=>{this.SizeGroup = success.data.Data});
        },

        Delete_Size_Group(value){
            Service.Delete_Size_Group(value).then(()=>{this.GetAll_Size_Group()});
        },

        TransformTextRender(value){
            let response = value == "" ? "-" : value.toUpperCase();
            return response;
        }        
    }
}
</script>

<style scoped>
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