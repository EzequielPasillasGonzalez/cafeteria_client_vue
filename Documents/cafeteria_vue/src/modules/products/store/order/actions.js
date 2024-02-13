// export const myAction = async ({commit}) => {

// }

export const setItems = async ({commit, rootGetters, /*rootState*/}, item) => {
  

    try {
        
        const  product = rootGetters['products/getProductsById'](item) // Llamar un getter de otro store

        

        //const userState = rootState.authStore; // Acceder al uId del usuario en el state        

        //console.log(userState.usuario.uID);

        let orderBody = Object

        orderBody.nombreProduct = product.nombre
        orderBody.productId = product.uID        
        orderBody.productPrice = product.price   

        commit('setItemOrderList', orderBody)

    } catch(error) {
        return error
    }
}

export const setItemsLocalStorage = async ({commit}) => {
  

    try {        
        
        let objUsuario = []

        objUsuario = localStorage.getItem('productList')

        console.log(objUsuario);


        commit('setItemOrderList', objUsuario)

    } catch(error) {
        return error
    }
}