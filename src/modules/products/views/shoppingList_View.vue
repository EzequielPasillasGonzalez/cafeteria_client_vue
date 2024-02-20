<template>
        <NavBar/>

        <TableShop @pay="makeAnOrder"/>
        
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import Swal from "sweetalert2";


export default {
    components: {
        NavBar: defineAsyncComponent(() => import('../components/NavBar_Component.vue')),        
        TableShop: defineAsyncComponent(() => import('../components/tableShop_Component.vue')),        
    },
    methods:{

        ...mapActions ('orderStore', [
            'makeOrder'
        ]),        
        ...mapActions("authStore", [
            'updateOrderUSer',
            'setUserStorage'            
        ]),
        async makeAnOrder(order){            

            new Swal({
                //? Mostrar alertas
                title: "Espere por favor",
                allowOutsideClick: false,
            });

            Swal.showLoading();

            if(this.uID == '' || this.uID == null){
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Es necesario que inicies sesión`,
                });

                return
            }
            
            try {                  
                const resp = await this.makeOrder(order)

                const data = await this.updateOrderUSer(resp)

                Swal.fire("¡Pedido creado con éxito!", "", "success");  
                
                this.$router.push({name: 'products'})
                
            } catch(error) {
            
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${error}`,
                });
            }            


        }
    },
    computed:{
        ...mapState( 'orderStore', {
            uID: 'uID',            
        }),        
    },
    watch: {
        uID(){ 
             //? Actualiza el view cuando el usuario pulsa otro producto
            this.setUserStorage()
        }
    }
}
</script>

<style scoped>

</style>