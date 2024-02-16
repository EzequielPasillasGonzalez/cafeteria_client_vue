<template>    
    <div class="card p-3 border bg-light ml-5 mt-5" style="width: 18rem;">
        <div class="d-flex justify-content-end">
            <button type="button" class="btn-close" aria-label="Close" 
                    @click="$emit('selection', {showProduct: false, product: null})"></button>
        </div>
        <img :src="product.img" class="card-img-top mt-1" alt="Imagen del producto">
        <div class="card-body">
            <h5 class="card-title">{{ product.nombre }}</h5>
            <p class="card-text"> {{ product.category.nombre }} </p>
            <p class="card-text"> {{ product.descripcion }} </p>            
            <p class="card-text"> $ {{ product.price }} </p>
            <p class="card-text"> Cantidad disponible: {{ product.cantidad }} </p>
            <p class="card-text" :class="{ 'text-success': !product.available, 'text-danger': product.available }">
                {{ !product.available ? 'Disponible' : 'No disponible' }}
            </p>
            <a class="btn btn-primary" @click="$emit('order', product.id)">Ordenar</a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
    
export default {
    props:{
        id:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            product: ''
        }
    },
    computed:{
        ...mapGetters('products', [
            'getProductsById'
        ]),       
    },
    methods:{
        loadEntry(){
            const product = this.getProductsById(this.id)   
            if(!product){
                return this.$router.push({name:'no-product'})
            }

            this.product = product
        },       
    },
    created(){
        //? Conectarse al getter del diario que esta en el store        
        this.loadEntry()      
    },
    watch:{
        id(){ //? Actualiza el view cuando el usuario pulsa otro producto
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
    .card{
        margin-left: 3%;
        width: 100%;
    }
</style>