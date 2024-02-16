<template>
    <NavBar/>
    
    

    <template v-if="isLoading">
        <div class="row justify-content-md-center">
            <div class="col-3 alert-info text-center mt-5">
                Espere por favor...
                <h3 class="mt-2">
                    <i class="fa fa-spin fa-sync"></i>
                </h3>
            </div>
        </div>                        
    </template>

    <template v-else>                            
    <div class="container">
      <div class="row">
        <div class="col">            
                <ProductList/>            
        </div>                
      </div>
    </div>

    </template>
    
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar_Component.vue')),
        ProductList: defineAsyncComponent(() => import('../components/ProductsList_Component.vue'))
    },
    methods:{
        ...mapActions("products", [
            'loadProducts',
        ])
    },
    computed:{
        ...mapState( 'products', {
            isLoading: 'isLoading'
        })
    },
    created(){
        this.loadProducts()
    }
}
</script>

<style scoped>

</style>