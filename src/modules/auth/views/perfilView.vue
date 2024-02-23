<template>
    <div>
        {{ usuario }}
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Swal from "sweetalert2";

export default {
    computed:{
        ...mapState( 'authStore', {
            usuario: 'usuario',
            isLoading: 'isLoading'
        }),
    },
}
</script>

<style lang='scss' scoped>
                    
</style>