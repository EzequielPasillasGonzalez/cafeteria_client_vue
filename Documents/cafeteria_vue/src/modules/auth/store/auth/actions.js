import authApi from "@/api/apiCafeteria"
//import { decodeCredential } from 'vue3-google-login'

// export const myAction = async ({comit}) => {

// }

export const getLogin = async ( { commit },  user) => { 
        
    try {

        
        
        const { data } = await authApi.post("/api/auth/login", {correo: user.correo, password: user.password}) //? Le hace un peticion get al api

        const { usuario, token } = data

        let objUsuario = Object

        objUsuario.nombre = usuario.nombre

        objUsuario.uID = usuario.uID

        objUsuario.correo = usuario.correo

        objUsuario.token = token

        objUsuario.isLoading = false


        localStorage.setItem('token', token) // Poner el token de autorizacion en el local storage
        localStorage.setItem('nombre', usuario.nombre)
        localStorage.setItem('correo', usuario.correo)
        localStorage.setItem('uID', usuario.uID)

        commit('setUsuario', {...objUsuario}) //? Se llama la mutacion setUsuario para guardar la respuesta de la api desde la bd


        return true

    } catch (error) {
        
        return error

    }

}

export const postUser = async ( { commit },  user) => { 
        
    try {

        const role = "User_role"

        console.log(user.correo);
        
        const { data } = await authApi.post("/api/user", {nombre: user.nombre, correo: user.correo, password: user.password, role: role}) //? Le hace un peticion get al api

        const { ok } = data

        console.log(commit);
        

        
        if(ok === true){
            await getLogin(user)

            return true
        }
                

    } catch (error) {
        
        return error

    }

}


export const handleCredentialResponse = async ( { commit }, response) => {
    
    try {

        console.log(commit);

        // const userData = decodeCredential(response.credential)
        // console.log("Handle the userData", userData)

        const id_token =  response.credential;
        

        const { data } = await authApi.post("/api/auth/google", {id_token: id_token}) //? Le hace un peticion get al api

        const { usuario, token } = data

        let objUsuario = Object

        objUsuario.nombre = usuario.nombre

        objUsuario.uID = usuario.uID

        objUsuario.correo = usuario.correo

        objUsuario.isLoading = false

        objUsuario.token = token

        localStorage.setItem('token', token) // Poner el token de autorizacion en el local storage

        localStorage.setItem('nombre', usuario.nombre)
        localStorage.setItem('correo', usuario.correo)
        localStorage.setItem('uID', usuario.uID)


        commit('setUsuario', {...objUsuario}) //? Se llama la mutacion setUsuario para guardar la respuesta de la api desde la bd


        return true

    } catch (error) {

        return error
    }
}

export const setUserStorage = ({commit}, ) => {
    
    let objUsuario = Object

    objUsuario.nombre = localStorage.getItem('nombre')

    objUsuario.correo = localStorage.getItem('correo')

    objUsuario.token = localStorage.getItem('token')

    objUsuario.uID = localStorage.getItem('uID')

    if(objUsuario.token == null){
        objUsuario.isLoading = true
    }else{
        objUsuario.isLoading = false
    }

    

    commit('setUsuario', {...objUsuario})


}

export const closeSession = ({commit}, ) => {
    
    let objUsuario = Object

    objUsuario.nombre = null

    objUsuario.correo = null

    objUsuario.token = null

    objUsuario.uID = null

    objUsuario.isLoading = true

    localStorage.removeItem("nombre");

    localStorage.removeItem("correo");
    localStorage.removeItem("token");
    localStorage.removeItem("uID");


    commit('setUsuario', {...objUsuario})


}