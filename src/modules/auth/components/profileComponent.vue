<template>
    <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
            <div class="col-md-5 border-right">
                <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                    <template v-if="!usuario.img">
                        <img class="rounded-circle mt-5" width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span
                            class="font-weight-bold mt-2">{{ usuario.nombre }}</span><span class="text-black-50">{{
                                usuario.correo }}</span><span>
                        </span>
                    </template>
                    <template v-else>
                        <img class="rounded-circle mt-5" width="150px" :src="usuario.img"><span
                            class="font-weight-bold mt-2">{{ usuario.nombre }}</span><span class="text-black-50">{{
                                usuario.correo }}</span><span>
                        </span>
                    </template>
                </div>
            </div>
            <div class="col-md-5 border-right">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h1 class="text-right">Usuario</h1>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12 row">
                            <label class="col-sm-2 col-form-label">Nombre</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Escribe tu nombre"
                                    v-model="usuario.nombre">
                            </div>
                        </div>
                    </div>
                    <div class="mt-3">
                        <div class="col-md-12 row">
                            <label class="col-sm-2 col-form-label">Correo</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" placeholder="Escribe tu correo"
                                    v-model="usuario.correo">
                            </div>
                        </div>
                    </div>

                    <div class="mt-3">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Cambiar contraseña
                        </button>
                    </div>

                    <div class="collapse" id="collapseExample">
                        <div>
                            <div class="mt-3">
                                <div class="col-md-12 row">
                                    <label class="col-sm-2 col-form-label">Contreña</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control" placeholder="Escribe tu contraseña"
                                            v-model="passwordOld">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="col-md-12 row">
                                    <label class="col-sm-2 col-form-label">Nueva contreña</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control"
                                            placeholder="Escribe una nueva contraseña" v-model="passwordNew">
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3">
                                <div class="col-md-12 row">
                                    <label class="col-sm-2 col-form-label">Confirma contreña</label>
                                    <div class="col-sm-10">
                                        <input type="password" class="form-control"
                                            placeholder="Confirma tu nueva contraseña" v-model="passwordConfirm">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 row" v-if="!verifyPassword" style="color: red;">
                                <p>Las contraseñas no son iguales</p>
                            </div>
                        </div>
                    </div>


                    <img
                        v-if="localImage"
                        :src="localImage" 
                        alt="Entry picture"
                        class="rounded-circle mt-5">

                    <div class="mt-3">
                        <input type="file" @change="onSelectdImage"
                        ref="imageSelector"
                        v-show="false"
                        accept="image/png, image/jpeg">

                        <button class="btn btn-primary"
                        v-if="usuario.uID"
                            @click="onPressImage"> <!--? Esta funcion llama a la referencia del boton de arriba para seleccionar imagenes -->
                            Subir foto
                            <i class="fa fa-upload"></i>
                        </button>
                    </div>



                    <!--<div class="col-md-12">
                            <label class="labels">Address Line 2</label>
                            <input type="text" class="form-control" placeholder="enter address line 2" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Postcode</label>
                            <input type="text" class="form-control" placeholder="enter address line 2" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">State</label>
                            <input type="text" class="form-control" placeholder="enter address line 2" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Area</label>
                            <input type="text" class="form-control" placeholder="enter address line 2" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Email ID</label>
                            <input type="text" class="form-control" placeholder="enter email id" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="labels">Education</label>
                            <input type="text" class="form-control" placeholder="education" value="">
                        </div> -->

                    <!-- <div class="row mt-3">
                        <div class="col-md-6">
                            <label class="labels">Country</label>
                            <input type="text" class="form-control" placeholder="country" value="">
                        </div>
                        <div class="col-md-6">
                            <label class="labels">State/Region</label>
                            <input type="text" class="form-control" value="" placeholder="state">
                        </div>
                    </div> -->
                    <div class="mt-3 text-center">
                        <button class="btn btn-secondary" type="button" @click="guardarPerfil">Guardar perfil</button>
                    </div>
                </div>
            </div>
            <!-- <div class="col-md-4">
                <div class="p-3 py-5">
                    <div class="d-flex justify-content-between align-items-center experience"><span>Edit
                            Experience</span><span class="border px-3 p-1 add-experience"><i
                                class="fa fa-plus"></i>&nbsp;Experience</span></div><br>
                    <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text"
                            class="form-control" placeholder="experience" value=""></div> <br>
                    <div class="col-md-12"><label class="labels">Additional Details</label><input type="text"
                            class="form-control" placeholder="additional details" value=""></div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Swal from "sweetalert2";

import uploadImage from '../helpers/uploadImage'


export default {
    data() {
        return {
            passwordOld: "",
            passwordNew: "",
            passwordConfirm: "",
            localImage: null,
            file: null,
        }
    },
    computed: {
        ...mapState('authStore', {
            usuario: 'usuario'
        }),
        verifyPassword() {
            return this.passwordNew === this.passwordConfirm
        }
    },
    methods: {

        ...mapActions('authStore', [
            'updateUSerAccount'
        ]),

        async guardarPerfil() {
            let objUsuario = Object
            new Swal({
                //? Mostrar alertas
                title: "Espere por favor",
                allowOutsideClick: false,
            });

            const picture = await uploadImage(this.file) //? subir foto al back, base de datos

            this.file = null

            if (this.passwordOld === "" || this.passwordOld === null) {            
                
                //! nos quedamos en el envio de datos en la action para cambiar los valores del usuario

                objUsuario.nombre = this.usuario.nombre
                objUsuario.correo = this.usuario.correo                
                objUsuario.passwordOld = undefined                 

                const resp = await this.updateUSerAccount(objUsuario)

                if(resp != true){
                    await Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Hubo un error al guardar tus datos`,
                    });
                    return
                }


                Swal.fire("Cambios gaurdados", "", "success");
                return
            }

            if (this.passwordOld !== "" && this.verifyPassword && this.passwordNew !== "" && this.passwordConfirm !== "") {
                objUsuario.nombre = this.usuario.nombre
                objUsuario.correo = this.usuario.correo
                objUsuario.passwordNew = this.passwordNew
                objUsuario.passwordOld = this.passwordOld                
                const resp = await this.updateUSerAccount(objUsuario)

                if(resp != true){
                    await Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `Hubo un error al guardar tus datos`,
                    });
                    return
                }

                Swal.fire("Cambios gaurdados", "", "success");
                return
            } else {
                await Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `Verifica tus contraseñas`,
                });
                return
            }
        },


        onSelectdImage($event){
            const file = $event.target.files[0]
            
            if (!file){

                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()

            fr.onload = () => this.localImage = fr.result //? Establece la imagen en el local
            fr.readAsDataURL(file)            


        },

        onPressImage(){
            this.$refs.imageSelector.click() //? Se busca una referencia para lanzar la seleccion de archivos
        }
    }
}
</script>

<style scoped>
body {
    background: rgb(99, 39, 120)
}

.form-control:focus {
    box-shadow: none;
    border-color: #1d6042
}

.profile-button {
    background: #1d6042;
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #1d6042
}

.profile-button:focus {
    background: #1d6042;
    box-shadow: none
}

.profile-button:active {
    background: #1d6042;
    box-shadow: none
}

.back:hover {
    color: #1d6042;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
</style>