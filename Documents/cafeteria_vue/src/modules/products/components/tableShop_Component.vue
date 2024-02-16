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

                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight">                        
                        <a class="btn btn-secondary" @click="$emit('pay', order)">Pagar</a>
                    </div>
                </div>
                

            </div>
        </div>        
    </div>

    {{ usuario.order }}

    <div v-if="usuario && usuario.order " class="container">
        <div class="card">
            <div class="card-body">
                <h1>Pedidos creados:</h1>                
                <table class="table table-hover">
                    <thead>
                      <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Nombre del produto</th>
                        <th scope="col">Precio $</th>                
                      </tr>
                    </thead>
                    <tbody>              
                        <trTable v-for="product in usuario.order" :key="product.id" :order="product"/>              
                    </tbody>
                </table>

                <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight">
                        <a class="btn btn-secondary" @click="$emit('pay', order)">Pagar</a>
                    </div>
                </div>
                

            </div>
        </div>        
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { defineAsyncComponent } from 'vue'

export default {

    components: {
        trTable : defineAsyncComponent(() => import('../components/trTable_Componente.vue')),        
    },

    computed: {        
        ...mapState('orderStore', {
            order: 'order'
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

        ...mapActions("orderStore", [
            "setItemsLocalStorage"
        ]
        ),
    },
    created(){        
        this.getOrder()
    }
}
</script>

<style scoped lang="scss">

.container{
    margin-top: 3%;
}

</style>