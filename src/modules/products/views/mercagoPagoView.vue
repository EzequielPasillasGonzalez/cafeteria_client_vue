<template>
    <mercadoPago_ComponentVue/>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        mercadoPago_ComponentVue: defineAsyncComponent(() => import('../components/mercadoPago_Component.vue')),        
        
    },
}
</script>

<style lang='scss' scoped>
                    
</style>