export default {
    name: 'products',    
    component: () => import(/* webpackChunckName: "Products" */ '../../../modules/products/layouts/Products_Layout.vue'),
    children: [
        {
            path: '',
            name: 'no-product',    
            component: () => import(/* webpackChunckName: "product-no-entry" */ '../views/NoProdcutSelectedView.vue'),
        },
        {
            path: ':id',
            name: 'show-product',    
            component: () => import(/* webpackChunckName: "product-entry" */ '../views/Products_View.vue'),
            props: (route) =>{ //? Se manda el id por los props para el Product-view                
                return {
                    id: route.params.id
                    
                }                
            }
        },     
        {
            path: 'pedido/:idPedido',
            name: 'show-pedido',    
            component: () => import(/* webpackChunckName: "pedido-entry" */ '../views/pedidoDesplegado_View.vue'),
            props: (route) =>{ //? Se manda el id por los props para el Product-view                                
                return {
                    
                    idPedido: route.params.idPedido                    
                }                
            }
        },           
    ]
}