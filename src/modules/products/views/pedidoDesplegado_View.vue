<template >
    <NavBar/>
    <div v-if(pedidosHechos)>
    <div class="container px-4" ref="pdf">
    <div class="row g-2">

        <h2>Pedido {{ idPedido }}</h2>

        <!-- Columna para mostrar la lista de productos -->
        <div  :class="{'col-6': showProductClass}" >
            <div class="row">
                <div class="container">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3" >
                        <!-- Iterar sobre los productos y mostrar cada uno en su propia columna -->
                        <Product class="col mt-5"  v-for="product in pedidosHechos" 
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
        
    </div>

    <div class="col-8">
        <div class="p-2 bd-highlight">                        
            <a :href="newData" @click="exportPDF"  class="btn btn-primary">Exportar a PDF</a>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { mapActions } from 'vuex'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default {
    components: {
    NavBar: defineAsyncComponent(() => import('@/modules/products/components/NavBar_Component.vue')),
    Product: defineAsyncComponent(() => import('@/modules/products/components/Product_Pedido_Component.vue')),
    // Landing: defineAsyncComponent(() => import('@/views/Landing_Views.vue')),
    
    },
    data(){
        return{
            pedidosHechos: null,
            imageData: null,
            newData: null
        }
    },
    props: {
        idPedido: {
            type: String,
            required: true
        }
    },  
    methods:{
        ...mapActions("orderStore", [
            "getOrder",
        ]
        ),
        exportPDF(){                                                    
               // Captura de pantalla de la imagen remota usando html2canvas
                html2canvas(document.body, { useCORS: true }).then(canvas => {
                  // Crea un objeto jsPDF
                  const pdf = new jsPDF();

                const imgData = canvas.toDataURL('image/png');                
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                
                  // Obtiene los datos de la imagen capturada como base64
                
                  // Agrega la imagen al PDF
                  pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, 0); // ajusta las coordenadas y el tamaño según sea necesario
                
                  // Guarda o descarga el PDF
                  pdf.save('documento.pdf');
                });            
        },
    },           
    async mounted(){
        this.pedidosHechos = await this.getOrder(this.idPedido)        
    },       
    // beforeMount(){
    //     this.exportPDF()
    // }
}
</script>

<style lang='scss' scoped>
                    
</style>