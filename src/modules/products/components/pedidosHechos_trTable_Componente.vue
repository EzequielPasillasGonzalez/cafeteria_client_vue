<template>
    <br>          
    <template v-for="(product, index) in order" :key="product.id">
            <tr>                
                <p>{{ index +1 }}</p>
                <th scope="row">{{ product.id }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.precio }}</td>
            </tr>            
    </template>  
</template>

<script>
export default {
    props: {
        order: {  
            type: [],           
            required: true
        }
    },
}
</script>

<style scoped>

</style>