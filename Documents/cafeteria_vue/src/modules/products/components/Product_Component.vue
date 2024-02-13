<template>

    
    <div class="card p-3 border bg-light ml-5" style="width: 18rem;">
        <img :src="product.img" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ product.nombre }}</h5>
            <p class="card-text"> {{ product.category.nombre }} </p>
            <p class="card-text"> $ {{ product.price }} </p>
            
            <div class="container">

                <div class="row g-2">
                    <div class="col-6">
                        <a class="btn btn-primary" @click="$emit('selection', {showProduct: true, product: product.id})">Mostrar</a>
                    </div>

                    <div class="col-6">
                        <a class="btn btn-secondary" @click="$emit('order', product.id)">Ordenar</a>
                    </div>
                </div>

            </div>
            
            
        </div>
    </div>
    
    
    
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        shortText(){ //? Se hace esta propiedad computada, para medir el texto, si es muy largo se corta y se le pone los ... 
            return (this.product.descripcion.length > 130)
                ? this.product.descripcion.substring(0, 130) + '...'
                : this.product.descripcion

        },
    },
}
</script>

<style scoped>
    .card{
        margin-left: 3%;
    }

</style>