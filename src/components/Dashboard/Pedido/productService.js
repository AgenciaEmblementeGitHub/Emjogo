import ProductService from '../../../services/ProductService.js';
import OrderService from '../../../services/OrderService.js';
import { useToast } from "vue-toastification";

let productService = new ProductService();
let OService = new OrderService();
export default (await import('vue')).defineComponent({
name: 'CadastroPedidoItens',
components: {
LoadingComponent
},

setup() {
// Get toast interface
const toast = useToast();

// Make it available inside methods
return { toast };
},

data() {
return {
orderId: null,
searchItem: null,
isLoading: false,

responseItem: {
id: null,
ref: null,
size_1: null,
size_2: null,
size_3: null,
size_4: null,
size_5: null,
size_6: null,
size_7: null,
size_8: null,
size_9: null,
size_10: null,
description: null,
},

orderItem: {
id: null,
ref: null,
description: null,
size_1: 0,
size_2: 0,
size_3: 0,
size_4: 0,
size_5: 0,
size_6: 0,
size_7: 0,
size_8: 0,
size_9: 0,
size_10: 0,
product_price: null
},

order: []
};
},

mounted() {
this.GetOrderId();
},

methods: {
GetOrderId() {
this.orderId = this.$route.params.pedidoId;
},

GetOrderItem() {
let _this = this;
OService.Get_Order_Item(this.orderId)
.then(function (successResponse) { successCallBack(successResponse.data.Data); })
.catch(function (failedResponse) { failedCallBack(failedResponse.data.Data); });

const successCallBack = (response) => {
response.forEach(orderItem => {
_this.order.push({
orderID: orderItem.orderId,
productId: orderItem.ref,
size_0: orderItem.size_1,
size_1: orderItem.size_2,
size_2: orderItem.size_3,
size_3: orderItem.size_4,
size_4: orderItem.size_5,
size_5: orderItem.size_6,
size_6: orderItem.size_7,
size_7: orderItem.size_8,
size_8: orderItem.size_9,
size_9: orderItem.size_10,
product_price: orderItem.product_price,
});
});
};

const failedCallBack = (response) => {
console.error(response);
};
},

FinishOrder() {
let _this = this;
this.isLoading = !this.isLoading;

OService.Insert_New_Order_item(this.order)
.then(function () {
_this.isLoading = !_this.isLoading;
_this.toast.success(`Pedido Realizado com sucesso!`);
setTimeout(() => {
_this.$router.push('/cadastro-de-pedido');
}, 2000);
})
.catch(() => { _this.toast.error(`Problema ao finalizar o pedido`); });
},

RemoveItem(index) {
this.order.splice(index, 1);
this.toast.success(`Item removido com sucesso`);
},

ClearOrder() {
this.order = [];
this.toast.success(`Pedido limpo com sucesso`);
},

CreateOrder() {
this.toast.success(`Item adicionado com sucesso`);
this.order.push({
orderID: this.orderId,
productId: this.orderItem.ref,
size_0: this.orderItem.size_1,
size_1: this.orderItem.size_2,
size_2: this.orderItem.size_3,
size_3: this.orderItem.size_4,
size_4: this.orderItem.size_5,
size_5: this.orderItem.size_6,
size_6: this.orderItem.size_7,
size_7: this.orderItem.size_8,
size_8: this.orderItem.size_9,
size_9: this.orderItem.size_10,
product_price: this.orderItem.product_price,
});
},

FieldIsEmpty(field) {
return field == null || field == "" || Object(field).length <= 0;
},

FindItem() {
let _this = this;

if (String(this.searchItem).length < 4) {
_this.responseItem.id = null;
_this.responseItem.ref = null;
_this.responseItem.size_1 = null;
_this.responseItem.size_2 = null;
_this.responseItem.size_3 = null;
_this.responseItem.size_4 = null;
_this.responseItem.size_5 = null;
_this.responseItem.size_6 = null;
_this.responseItem.size_7 = null;
_this.responseItem.size_8 = null;
_this.responseItem.size_9 = null;
_this.responseItem.size_10 = null;
_this.responseItem.description = null;
}

if (String(this.searchItem).length >= 4) {
_this.isLoading = !_this.isLoading;
productService.GetEspecific_Product(this.searchItem)
.then(function (response) {
_this.responseItem.id = response.data.Data[0].id;
_this.orderItem.ref = response.data.Data[0].ref.toUpperCase();
_this.responseItem.ref = response.data.Data[0].ref.toUpperCase();
_this.responseItem.size_1 = response.data.Data[0].size_0.toUpperCase();
_this.responseItem.size_2 = response.data.Data[0].size_1.toUpperCase();
_this.responseItem.size_3 = response.data.Data[0].size_2.toUpperCase();
_this.responseItem.size_4 = response.data.Data[0].size_3.toUpperCase();
_this.responseItem.size_5 = response.data.Data[0].size_4.toUpperCase();
_this.responseItem.size_6 = response.data.Data[0].size_5.toUpperCase();
_this.responseItem.size_7 = response.data.Data[0].size_6.toUpperCase();
_this.responseItem.size_8 = response.data.Data[0].size_7.toUpperCase();
_this.responseItem.size_9 = response.data.Data[0].size_8.toUpperCase();
_this.responseItem.size_10 = response.data.Data[0].size_9.toUpperCase();
_this.orderItem.description = response.data.Data[0].description.toUpperCase();
_this.responseItem.description = response.data.Data[0].description.toUpperCase();
_this.isLoading = !_this.isLoading;
_this.toast.success(`Referência ${_this.searchItem} Encontrada`);
})
.catch(function () {
_this.toast.error(`Referência ${_this.searchItem} não encontrada`);
_this.isLoading = !_this.isLoading;
_this.responseItem.id = null;
_this.responseItem.ref = null;
_this.responseItem.size_1 = null;
_this.responseItem.size_2 = null;
_this.responseItem.size_3 = null;
_this.responseItem.size_4 = null;
_this.responseItem.size_5 = null;
_this.responseItem.size_6 = null;
_this.responseItem.size_7 = null;
_this.responseItem.size_8 = null;
_this.responseItem.size_9 = null;
_this.responseItem.size_10 = null;
_this.responseItem.description = null;
});
}
}
}
});
