<template>    
    
    <div class="card p-3 border bg-light ml-5" style="width: 18rem;">
        <img :src="prod.img" class="card-img-top" alt="prod.img">        
        <div class="card-body">            
            <h5 class="card-title">{{ prod.nombre }}</h5>
            <p class="card-text"> {{ category }} </p>
            <p class="card-text"> {{ prod.descripcion }} </p>  
            <p class="card-text"> $ {{ prod.price }} </p>            
            
            <!-- <div class="container">

                <div class="row mx-auto ps-4">
                    <div class="col-8">
                        <a class="btn btn-primary" @click="$emit('selection', {showProduct: true, product: product.id})">Mostrar</a>
                    </div>

                    <div class="col-8">
                        <a class="btn btn-secondary" @click="$emit('order', product.id)">Ordenar</a>
                    </div>
                </div>

            </div> -->
            
            
        </div>
    </div>
        
    
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            prod: '',
            category: ''
        }        
    },
    methods:{
        ...mapActions("orderStore", [
            "getProduct",
        ]
        ),   
        async getProductId(product){
            this.prod = await this.getProduct(product.id)
            this.category = this.prod.category.nombre
        }
    },
    async mounted(){
        await this.getProductId(this.product)
    }
}
</script>

<style scoped>
    .card{
        margin-left: 3%;
    }

</style>