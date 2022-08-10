<template>
    <div id="LeftSideMenu">
        <div style="margin-bottom: 55px;">
            <img src="../../assets/Logo.png" alt="Logo Uniformes LA" style="width: 70%;">
        </div>

        <div>
            <ul class="navigation-links">
                <li class="navigation-link" :class="{'navigation-link-active': this.$route.name == 'cliente' || this.$route.name == 'ConsultaCliente'}">
                    <router-link to="/cadastro-de-cliente">
                        <span>Operações de Parceiros</span>
                    </router-link>
                </li> 

                <li class="navigation-link" :class="{'navigation-link-active': this.$route.name == 'produto' || this.$route.name == 'CadastroProduto'}">
                    <router-link to="/cadastro-de-produto">
                        <span>Operações de Produto</span>
                    </router-link>
                </li>      

                <li class="navigation-link" :class="{'navigation-link-active': this.$route.name == 'CadastroPedido' || this.$route.name == 'CadastroPedidoItens' || this.$route.name == 'CadastroPedidoInformacoes'}">
                    <router-link to="/cadastro-de-pedidos">
                        <span>Operações de Pedidos</span>
                    </router-link>
                </li>   

                <li class="navigation-link" :class="{'navigation-link-active': this.$route.name == 'CadastroEstoque' || this.$route.name == 'CadastroEstoque' || this.$route.name == 'CadastroEstoque'}">
                    <router-link to="/cadastro-de-estoque">
                        <span>Operações de Estoque</span>
                    </router-link>
                </li>                                                            
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LeftSideMenu',

    navigationLink: [
        {to: '/cadastro-de-cliente', routeName: 'cliente', description: 'Cadastro de Cliente'},
        {to: '/cadastro-de-produto', routeName: 'produto', description: 'Cadastro de Produto'},
        {to: '/pedido',  routeName: 'CadastroPedido', description: 'Cadastro de Pedido'},
    ]
}
</script>

<style scoped>
    #LeftSideMenu{
        width: 280px;
        height: 100vh;
        color: #fefefe;
        padding: 21px 0px;
        box-sizing: border-box;
        background-color:#232425;
        border-right: 1px solid #000000a3;
        box-shadow: 0px 0px 5px #0000005e;        
    }

    ul.navigation-links{
        width: 100%;
        height: auto;
        list-style: none;
        color: #fefefe;
        overflow: hidden;
    }

    .navigation-link-active{
        background-color: #32343579;
        border-left: 4px solid greenyellow!important;
    }

    ul.navigation-links > li.navigation-link{
        width: 100%;
        cursor: pointer;
        font-size: 13px;   
        padding: 13px 0px;
        text-align: left;
        transition: ease-in-out 250ms;
        border-left: 4px solid #232425;  
        border-bottom: 1px solid #62626220;
    }

    ul.navigation-links > li.navigation-link > a{
        color: #fefefe;
        margin-left: 50px;
        text-decoration: none;
    }

    ul.navigation-links > li.navigation-link:hover{
        background-color: #43464779;
        border-left: 4px solid #676a6d79;
    }
</style>