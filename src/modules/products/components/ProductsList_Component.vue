<template>
  <div class="px-2 pt-2">
    <input type="text" class="form-control" placeholder="Buscar entrada" v-model="term" />
  </div>

  <div class="container px-4">
    <div class="row g-2">

      <!-- Columna para mostrar la lista de productos -->
      <div  :class="{'col-6': showProductClass}">
        <div class="row">
            <div class="container">
              <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <!-- Iterar sobre los productos y mostrar cada uno en su propia columna -->
                <Product class="col mt-5" v-for="product in getProductByTermFunction" 
                  :key="product.id" 
                  :product="product"
                  @selection="checkProduct" @order="orderProduct"/>
              </div>
            </div>          
        </div>
      </div>

      <!-- Columna para mostrar los detalles del producto -->
      <div :class="{'col-6': showProductClass}">
        <router-view @selection="checkProduct" @order="orderProduct" :style="{ visibility: showProduct ? 'visible' : 'hidden' }"/>
      </div>
    </div>
  </div>

  
  
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'
import Swal from "sweetalert2";

export default {
  components: {
    Product: defineAsyncComponent(() => import('./Product_Component.vue'))
  },
  computed: {
    ...mapGetters('products', [
      'getProductByTerm', 
      'loadProducts'     
    ]),
    ...mapState('orderStore', {
        isLoading: 'isLoading'
    }),    

    getProductByTermFunction() {
      return this.getProductByTerm(this.term)
    },
    showProductClass() {
      return this.showProduct ? 'col-6' : '';
    }
  },
  data() {
    return {
      term: '',
      showProduct: false
    }
  },
  methods:{
    ...mapActions('orderStore', [
      'setItems'
    ]),
    checkProduct(data){      
      const {showProduct, product} = data
      this.showProduct = showProduct; // Se asgina el cambio

      // Mostrar el componente de los detalles del producto      
      this.$router.push({ name: 'show-product', params: { id: product }});
            
      if(!showProduct){
        this.$router.push({ name: 'products' });
      }      
    },
    async orderProduct(data){

      new Swal({
                //? Mostrar alertas
                title: "Espere por favor",
                allowOutsideClick: false,
            });

            Swal.showLoading();

      await this.setItems(data)

      if(!this.isLoading){
        Swal.fire("Producto agregado al carrito", "", "success");
      }
      
    }
  },
  watch: {
    showProduct(newValue) {
      // Este código se ejecutará cuando cambie la propiedad 'showProduct'
      //console.log('showProduct ha cambiado:', newValue);
    },
    mounted() {
      this.loadProducts()
    },
  }
}
</script>

<style scoped>

</style>



