<template>    
        <form id="form-checkout">
            <div id="form-checkout__cardNumber" class="container"></div>
            <div id="form-checkout__expirationDate" class="container"></div>
            <div id="form-checkout__securityCode" class="container"></div>
            <input type="text" id="form-checkout__cardholderName" />
            <select id="form-checkout__issuer"></select>
            <select id="form-checkout__installments"></select>
            <input type="email" id="form-checkout__cardholderEmail" />

            <button type="submit" id="form-checkout__submit">Pagar</button>
            <progress value="0" class="progress-bar">Cargando...</progress>
        </form>    

        <div class="d-flex flex-row-reverse bd-highlight">
                    <div class="p-2 bd-highlight">                        
                        <button @click="gotToMercadoPago" class="btn btn-primary">Mercado Pago</button>
          </div>
        </div>
</template>

<script>
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { mapActions } from 'vuex'

await loadMercadoPago();

const mp = new window.MercadoPago('TEST-592744d5-5762-48cc-8d83-9c42eee19dcd', {
    locale: "es-MX",
});        



export default {
    methods:{
        ...mapActions("orderStore", [
            "processPayment"            
        ]
        ),    

        async gotToMercadoPago(){
          const resp = await this.processPayment()          
        },
    },
    mounted(){                
        const cardForm = mp.cardForm({
      amount: "100.5",
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "Numero de tarjeta",
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de seguridad",
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular de la tarjeta",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emisor",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Cuotas",
        },        
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
      },
      callbacks: {
        onFormMounted: error => {
          if (error) return console.warn("Form Mounted handling error: ", error);
          console.log("Form mounted");
        },
        onSubmit: async event => {
          event.preventDefault();

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData();

          const requestData = {
                token,
                issuer_id,
                payment_method_id,
                transaction_amount: Number(amount),
                installments: Number(installments),
                description: "Descripción del producto",
                payer: {
                    email,
                    identification: {
                        type: identificationType,
                        number: identificationNumber,
                    },
                },
            };

            const resp = await this.processPayment(requestData)
        },
        
      },
    });
    }
}
</script>

<style lang='css' scoped>
#form-checkout {
    display: flex;
    flex-direction: column;
    max-width: 600px;
}

#form-checkout .container {
    height: 18px;
    display: inline-block;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 2px;
    padding: 1px 2px;
}

</style>