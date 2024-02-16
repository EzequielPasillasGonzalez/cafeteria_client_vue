<template>
    <tr>
        <th scope="row">{{order.id}}</th>
        <td>{{order.name}}</td>
        <td>{{order.precio}}</td>    
    </tr>
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