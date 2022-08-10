<template>
  <div>
    <div style="margin: 34px 0px; display: flex; flex-direction: row; justify-content: flex-start; flex-wrap: wrap;">
        <div style="display: flex; align-items: center; border-bottom: 2px solid #00000021; margin-bottom: 21px; height: 30px; width: 100%;">
            <ul style="display: flex; width: 100%; list-style: none; color: #00000080; font-size: 13px">
                <li style="width: 100px; height: 30px" :class="{'active': this.$route.name == 'CadastroProduto'}">
                    <router-link to="/cadastro-de-produto">
                        Produto <span class="contador">{{Produto}}</span>
                    </router-link>
                </li>

                <li style="width: 180px;" :class="{'active': this.$route.name == 'CadastroDeGrupoDeProdutoComponent'}">
                    <router-link to="/cadastro-de-grupo-de-produto">
                        Grupo de Produto <span class="contador">{{GrupoDeProduto}}</span>
                    </router-link>
                </li>

                <li style="width: 180px;" :class="{'active': this.$route.name == 'CadastroDeGrupoDeTamanhoComponent'}">
                    <router-link to="/cadastro-de-grupo-de-tamanho">
                        Grupo de Tamanho <span class="contador">{{GrupoDeTamanho}}</span>
                    </router-link>
                </li>
                
                <li style="width: 180px;" :class="{'active': this.$route.name == 'CadastroDeUnidadeDeVenda'}">
                    <router-link to="/cadastro-unidade-de-venda">
                        Unidade de Venda <span class="contador">{{UnidadeDeVenda}}</span>
                    </router-link>
                </li>                
            </ul>
        </div>
    </div>       
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'NavigationBar',
    data(){
        return {
            Produto: 0,
            GrupoDeProduto: 0,
            GrupoDeTamanho: 0,
            UnidadeDeVenda: 0,
        }
    },

    mounted(){
        let _this = this;

        axios.get("http://agenciaemblemente.com/api/obterContador/produto").then(function (response){
            _this.Produto = response.data;
        });

        axios.get("http://agenciaemblemente.com/api/obterContador/grupoProduto").then(function (response){
            _this.GrupoDeProduto = response.data;
        });      
        
        axios.get("http://agenciaemblemente.com/api/obterContador/grupoProdutoTamanho").then(function (response){
            _this.GrupoDeTamanho = response.data;
        });    
        
        axios.get("http://agenciaemblemente.com/api/obterContador/unidadeVenda").then(function (response){
            _this.UnidadeDeVenda = response.data;
        });          
    }
}
</script>

<style scoped>
    ul > li > a {
        color: #232425;
        text-decoration:none;
    }

    .active{
        border-bottom: 2px solid yellowgreen;
    }

    .contador{
        width: 30px;
        height: 15px;
        padding: 2px;
        border-radius: 2px;
        background-color: #23242537;
    }
</style>