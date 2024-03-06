<template>
    <NavBar/>
    <mercadoPago/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar_Component.vue')),
        mercadoPago: defineAsyncComponent(() => import('../views/mercagoPagoView.vue')),        
        
    },
}
</script>

<style lang='scss' scoped>
                    
</style>