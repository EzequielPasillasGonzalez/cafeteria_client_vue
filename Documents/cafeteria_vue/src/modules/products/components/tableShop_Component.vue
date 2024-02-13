<template>
    <div class="container">

        {{ order }}
        <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre del produto</th>
                <th scope="col">Precio $</th>                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
             
              </tr>
              <tr>
                <th scope="row">3</th>                
                <td>@twitter</td>
                <td>@twitter</td>
              </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    computed: {        
        ...mapState('orderStore', {
            order: 'order'
        }),
    },
    methods: {
        getOrder(){
            if(this.order.length === 0){
                this.setItemsLocalStorage()
            }
        },

        ...mapActions("orderStore", [
            "setItemsLocalStorage"
        ]
        ),
    },
    created(){
        console.log('j');
        this.getOrder()
    }
}
</script>

<style scoped>

</style>