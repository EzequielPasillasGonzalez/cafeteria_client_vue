<template>
    <div  v-if="order && order.length > 0"  class="container">
        <div class="card">
            <div class="card-body">
                <h1>Orden de pedido:</h1>                
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre del produto</th>
                        <th scope="col">Precio $</th>                
                      </tr>
                    </thead>
                    <tbody>              
                        <trTable v-for="product in order" :key="product.id" :order="product"/>              
                    </tbody>
                </table>

                <div class="container" style="margin-left: 40%;">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div class="col">
                            <div class="d-flex flex-row-reverse bd-highlight">
                                <div class="p-2 bd-highlight">                        
                                    <a class="btn btn-secondary" @click="$emit('pay', order)">Pagar</a>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="d-flex flex-row-reverse bd-highlight">
                                <div class="p-2 bd-highlight">                        
                                    <button @click="gotToPaypal(order)" class="btn btn-primary">Paypal</button>
                                </div>
                            </div>    
                        </div>

                        <div class="col">
                            <div v-if="isPaidPaypal" class="d-flex flex-row-reverse bd-highlight">
                                <div class="p-2 bd-highlight">                        
                                    <button @click="getOrderPaypal(order)" class="btn btn-primary">Verificar compra paypal</button>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>

                


                
               
                

            </div>
        </div>        
    </div>

    <div v-if="pedidosHechos != [] " class="container">
        <div class="card">
            <div class="card-body">
                <h1>Pedidos creados:</h1>                
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col"></th>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre del produto</th>
                        <th scope="col">Precio $</th>                
                      </tr>
                    </thead>
                    <tbody>              
                        <pedidosHechos v-for="(product) in pedidosHechos" :key="product.id" :order="product"/>              
                    </tbody>
                </table>

                

            </div>
        </div>        
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { defineAsyncComponent } from 'vue'
import Swal from "sweetalert2";

export default {

    components: {
        trTable : defineAsyncComponent(() => import('../components/trTable_Componente.vue')),        
        pedidosHechos : defineAsyncComponent(() => import('../components/pedidosHechos_trTable_Componente.vue')),        
    },
    data(){
        return{
            pedidosHechos: null,
            idOrderPayPal: null,
            isPaidPaypal: false
        }
    },

    computed: {        
        ...mapState('orderStore', {
            order: 'order',
            uID: 'uID', 
        }),
        ...mapState('authStore', {
            usuario: 'usuario'
        }),
    
    },
    methods: {
        getOrder(){
            if(this.order.length === 0){
                this.setItemsLocalStorage()
            }
        },        
        async gotToPaypal(order){
            const {body} = await this.processPayment(order)               
            const {id} = body
            this.idOrderPayPal = id
            this.isPaidPaypal = true
        },
        async getOrderPaypal(order){
            if(this.idOrderPayPal !== null){
                new Swal({
                    //? Mostrar alertas
                    title: "Espere por favor",
                    allowOutsideClick: false,
                });

                Swal.showLoading();
                const resp = await this.verifyOrderPaypal(this.idOrderPayPal)                   
                if(resp === true){
                    Swal.fire("Pago confirmado", "", "success");
                    this.makeAnOrder(order)
                }else{
                    Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `El pago aun no ha sido aprovado`,
                });
                }

                
            }
            
        },
        async makeAnOrder(order){            

            new Swal({
                //? Mostrar alertas
                title: "Espere por favor",
                allowOutsideClick: false,
            });

            Swal.showLoading();

            if(this.uID == '' || this.uID == null){
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Es necesario que inicies sesión`,
                });

                return
            }
            
            try {                  
                const resp = await this.makeOrder(order)

                const data = await this.updateOrderUSer(resp)

                Swal.fire("¡Pedido creado con éxito!", "", "success");  
                
                this.$router.push({name: 'products'})
                
            } catch(error) {
            
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`,
                });
            }            


        },

        ...mapActions("orderStore", [
            "setItemsLocalStorage",
            "loadOrder",
            "processPayment",
            "verifyOrderPaypal",
            'makeOrder'
        ]
        ),      
        ...mapActions("authStore", [
            'updateOrderUSer',
            'setUserStorage'            
        ]),
        
        async getOrders(){
            
            if(this.usuario.order){
                this.pedidosHechos = await this.loadOrder(this.usuario.order)
            }

            // for (let index = 0; index < this.pedidosHechos.length; index++) {
            //     const element = this.pedidosHechos[index];
            //     console.log(element);
            // }
            //console.log(this.pedidosHechos);
        }
    },
    created(){        
        this.getOrder(),
        this.getOrders()
    },   
    watch: {
        uID(){ 
             //? Actualiza el view cuando el usuario pulsa otro producto
            this.setUserStorage()
        }
    }
}
</script>

<style scoped lang="scss">

.container{
    margin-top: 3%;
}

</style>