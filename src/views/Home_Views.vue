<template>
    <div class="home">

      <NavBar/>

        <!-- <div class="row mt-5">

          <div class="container">
            <h1>Bienvenido a Cefeteria Vue</h1> 
          </div>

          <div class="col-sm-6">
            <div class="container">
              <button @click="gotToProducts" class="btn btn-primary">Conoce nuestro productos</button>            
            </div>
          </div>

          <div class="col-sm-6">
            <div class="container">
              <button @click="gotToSigin" class="btn btn-primary">Inicia Sesión</button>            
            </div>
          </div>

        </div> -->

        
        <LandingPage/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
    name: 'HomeView',
  methods: {
    gotToProducts(){
      this.$router.push({name: 'products'}) //? Igual de como esta en el router que se exporta del modules
    },
    gotToSigin(){
      this.$router.push({name: 'login'}) //? Igual de como esta en el router que se exporta del modules
    }
  },
  components: {
    NavBar: defineAsyncComponent(() => import('@/modules/products/components/NavBar_Component.vue')),
    // Landing: defineAsyncComponent(() => import('@/views/Landing_Views.vue')),
    LandingPage: defineAsyncComponent(() => import('@/views/LandingPage_View.vue')),
  }
}
</script>

<style scoped>

</style>