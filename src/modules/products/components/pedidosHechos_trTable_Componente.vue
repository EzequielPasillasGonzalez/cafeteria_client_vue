<template>
    <br>
    <p>Pedido:</p> 
    <template v-for="product in order" :key="product.id">
            <tr>
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
p{
    margin-right: 80%;
}
</style>