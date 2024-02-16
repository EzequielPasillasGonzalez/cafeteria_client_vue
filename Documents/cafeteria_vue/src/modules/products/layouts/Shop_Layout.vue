<template>
    <div>
        <ShoppingList/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    components: {
        ShoppingList: defineAsyncComponent(() => import('../views/shoppingList_View.vue')),        
        
    },
}
</script>

<style scoped>

</style>