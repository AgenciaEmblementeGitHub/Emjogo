<template>
    <div id="cadastro-de-produto">
        <navigation-bar />
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