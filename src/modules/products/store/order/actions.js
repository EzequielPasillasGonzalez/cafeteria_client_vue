import cafeteriaOrderApi from '@/api/apiOrderCafeteria';
import cafeteriaApi from '@/api/apiCafeteria';

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
        orderBody.productCantidad = product.cantidad   
        orderBody.productCategory = product.category   

        commit('setItemOrderList', orderBody)

    } catch(error) {
        return error
    }
}

export const setItemsLocalStorage = async ({commit}) => {
  

    try {        
        
        let objUsuario = []

        // Recuperar los datos del almacenamiento local y convertirlos en un array de objetos
        let storedData = localStorage.getItem('productList');
        if (storedData) {
            objUsuario = JSON.parse(storedData);
            // Asegurarse de que objUsuario sea un array
            if (!Array.isArray(objUsuario)) {
                objUsuario = []; // Si no es un array, inicializar como un array vacío
            }
        }


        

        commit('setItemOrderListLocalStorage', objUsuario)

    } catch(error) {
        return error
    }
}

export const makeOrder = async ({commit}, order) => {
  

    try {        

        const config = {
            headers: {
                'awt_token': localStorage.getItem('token') // Reemplaza 'tuToken' con el token real
            }
        };

        const resp = await cafeteriaApi.patch("/api/products/list", {order}, config)

        console.log(resp);

        


        //await processOrder(order, 0);        
        
       // const resp = await cafeteriaOrderApi.post("/order.json", order) //? Le hace un peticion get al api    

        // order.forEach(product => {
        //     await cafeteriaApi.patch(`/api/products/${product.id}`, {
        //         category: product.category.nombre,
        //         cantidad: product.cantidad
        //     }, config);
    
        // });


        // extraer Id
        // const { data } = resp
        // const idOrder = data.name        

        // commit('setItemOrderListLocalStorage', order)

        

        // return idOrder

    } catch(error) {
        return error
    }
}

// async function processOrder(order, index) {
//     if (index >= order.length) {
//         // Todas las solicitudes han sido procesadas
//         return;
//         }

//         const product = order[index];
//         product.cantidad -= 1;
//         const config = {
//             headers: {
//                 'awt_token': localStorage.getItem('token')
//             }
//         };

        
//         // Llamar recursivamente a la función para procesar el siguiente producto
//         await processOrder(order, index + 1);
//     }