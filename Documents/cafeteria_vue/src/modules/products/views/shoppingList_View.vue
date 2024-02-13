<template>
        <NavBar/>
    
        <TableShop/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar_Component.vue')),        
        TableShop: defineAsyncComponent(() => import('../components/tableShop_Component.vue')),        
    },
}
</script>

<style scoped>

</style>