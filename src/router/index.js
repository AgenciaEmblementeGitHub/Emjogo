import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ClienteComponent from '../components/Dashboard/Cliente/ClienteComponent.vue'
import EditarClienteComponent from '../components/Dashboard/Cliente/EditarClienteComponent.vue'

import CadastroPedidoComponent       from '../components/Dashboard/Pedido/CadastroPedidoComponent.vue'
import CadastroPedidoItensComponent  from '../components/Dashboard/Pedido/CadastroPedidoItensComponent.vue'
import CadastroDePedidoInfoComponent from '../components/Dashboard/Pedido/CadastroDePedidoInfoComponent.vue'
import CadastroDePedidoCabecalhoComponent from '../components/Dashboard/Pedido/CadastroDePedidoCabecalhoComponent.vue'

import CadastroEstoqueComponent from '../components/Dashboard/Pedido/CadastroEstoqueComponent.vue'

import CadastroProdutoComponent from '../components/Dashboard/Produto/CadastroProdutoComponent.vue'
import CadastroDeGrupoDeTamanhoComponent from '../components/Dashboard/Produto/CadastroDeGrupoDeTamanhoComponent.vue'
import CadastroDeGrupoDeProdutoComponent from '../components/Dashboard/Produto/CadastroDeGrupoDeProdutoComponent.vue'
import CadastroDeUnidadeVenda from '../components/Dashboard/Produto/CadastroDeUnidadeVenda.vue'
import ViewToView from '../components/Dashboard/Produto/ViewToView.vue'
import SearchClienteComponent from '../components/Dashboard/Cliente/SearchClienteComponent.vue'


const routes = [
  {
    path: '/',
    name: 'root',
    component: ClienteComponent
  },

  {
    path: '/cadastro-de-cliente', 
    name: 'cliente', 
    component: ClienteComponent
  },

  {
    path: '/consulta-de-cliente', 
    name: 'ConsultaCliente', 
    component: SearchClienteComponent
  },   

  {
    path: '/editar-cliente/:clienteId', 
    name: 'editarCliente', 
    component: EditarClienteComponent
  },

  {
    path: '/operacao-produto', 
    name: 'OperacaoProduto', 
    component: ViewToView
  },     

  {
    path: '/cadastro-de-pedidos', 
    component: CadastroPedidoComponent
  }, 

  {
    path: '/cadastro-cabecalho-pedido', 
    name: 'CadastroPedido', 
    component: CadastroDePedidoCabecalhoComponent
  },   

  {
    path: '/cadastro-de-pedido-informacoes/:pedidoId', 
    name: 'CadastroPedidoInformacoes', 
    component: CadastroDePedidoInfoComponent
  },  

  {
    path: '/cadastro-de-pedido-itens/:pedidoId', 
    name: 'CadastroPedidoItens', 
    component: CadastroPedidoItensComponent,

  },     

  {
    path: '/cadastro-de-produto', 
    name: 'CadastroProduto', 
    component: CadastroProdutoComponent
  }, 
  {
    path: '/cadastro-de-grupo-de-tamanho', 
    name: 'CadastroDeGrupoDeTamanhoComponent', 
    component: CadastroDeGrupoDeTamanhoComponent
  },      

  {
    path: '/cadastro-de-grupo-de-produto', 
    name: 'CadastroDeGrupoDeProdutoComponent', 
    component: CadastroDeGrupoDeProdutoComponent
  },    

  {
    path: '/cadastro-unidade-de-venda', 
    name: 'CadastroDeUnidadeDeVenda', 
    component: CadastroDeUnidadeVenda
  },   

  {
    path: '/cadastro-unidade-de-venda', 
    name: 'CadastroDeUnidadeDeVenda', 
    component: CadastroDeUnidadeVenda
  },   


  {
    path: '/cadastro-de-estoque', 
    name: 'CadastroEstoque', 
    component: CadastroEstoqueComponent
  }, 

  {
    path: '/login',
    name: 'login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
