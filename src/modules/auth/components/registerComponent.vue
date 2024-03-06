<template>
    <div class="container p-3 border bg-light parent">

        <div class="row mt-5">
            <div class="col-sm-6">

                <h1> Google Sign-in </h1>

                <hr>


                <GoogleLogin :callback="googleSign" />

                <br>

               


            </div>

            <div class="col-sm-6">

                <h1>¡Registrate!</h1>

                <div class="container">
                    <form class="d-grid">
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="inputPassword" v-model="nombre"
                                    autocomplete="off" required>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Correo eléctronico</label>
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="inputPassword" v-model="correo"
                                    autocomplete="off" required>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" v-model="password"
                                    autocomplete="off" required>
                            </div>
                        </div>

                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Confirma tu contraseña</label>
                            <div class="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" v-model="passwordConfirm"
                                    autocomplete="off" required>
                            </div>
                        </div>

                        <div class="mb-3 row" v-if="!verifyPassword" style="color: red;">
                            <p>Las contraseñas no son iguales</p>
                        </div>


                        <button @click="register" class="btn btn-primary">Registrarse</button>
                    </form>
                </div>
            </div>


        </div>

    </div>

    
</template>

<script >
import { mapActions } from 'vuex'
import Swal from 'sweetalert2';

export default {


    data() {
        return {
            correo: null,
            password: null,
            passwordConfirm: null,
            nombre: null,
            user: Object,
        }
    },
    methods: {

        ...mapActions('authStore', [
            'postUser',
            'handleCredentialResponse'
        ]),
        async register() {

            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()

            if(this.verifyPassword && this.verifyPassword !== null){
                this.user.correo = this.correo
            this.user.password = this.password
            this.user.nombre = this.nombre


            const ok = await this.postUser(this.user)


            if (ok === true) {

                Swal.fire('Registro exitoso', '', 'success')

                this.$router.push({ name: 'products' })
                
            } else {

                const { response } = ok
                const { data } = response
                const { body } = data
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${data}`,
                });

                return
            }
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Hubo un error al guardar tus datos`,
                });
            }

            
        

            
        },        
        async googleSign(response){   
            
            new Swal({ //? Mostrar alertas
                title: 'Espere por favor',
                allowOutsideClick: false
            })

            Swal.showLoading()


            const ok = await this.handleCredentialResponse(response)

            if (ok === true) {

                Swal.fire('Registro exitoso', '', 'success')

                this.$router.push({ name: 'products' })
            } else {
                        
                const { response } = ok
                const { data } = response 
                const { body } = data                            
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${body}`,
                });
            }
        }
        
    },   
    computed:{
        verifyPassword(){
            return this.password === this.passwordConfirm
        }
    } 

}
</script>

<style scoped>
.parent {
    margin-top: 5%;
}

</style>