import cafeteriaOrderApi from '@/api/apiOrderCafeteria';
import cafeteriaApi from '@/api/apiCafeteria';
import { writeBlock, checkIntegrity } from '@/scripts/blokchain'

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

        let pedido = []

        order.forEach(element => {
            pedido.push(element)
        });

        let pedidoDetallado = pedido.map(item => {
            return `Producto: ${item.name}, Precio: ${item.precio}`;
        });
        
        const objTotalPedidos  = await cafeteriaOrderApi.get("/order.json")                    

        const block = await writeBlock(pedido, objTotalPedidos.data)

        // checkIntegrity(objTotalPedidos.data)

        console.log(block);

        const respuestaCafeteriaApi = await cafeteriaApi.patch("/api/products/list", { order: block.pedido }, config)        

        
        
        const respuestaCafeteriaOrderApi = await cafeteriaOrderApi.post("/order.json", block) //? Le hace un peticion get al api    
        

        // extraer Id
        const { data } = respuestaCafeteriaOrderApi
        const idOrder = data.name        


        await cafeteriaApi.post("/api/email", 
        {
            to: localStorage.getItem('correo'),                 
            subject: "Pedido realizado",
            message: `Detalles del pedido:\n${pedidoDetallado.join('\n')}`
        }
        , config)

        localStorage.removeItem('productList')

        commit('cleanOrderList')

        

        return idOrder

    } catch(error) {
        return error
    }
}

export const loadOrder = async ({commit}, orderList) => {
    try {
        // Dividir el string por comas
        var lista = orderList.split(',');
        let pedidosHechos = []
        
        for (let index = 0; index < lista.length; index++) {
            const element = lista[index];            
            const {data} = await cafeteriaOrderApi.get(`/order/${element}.json`, )
            
            if(data !== null){
                pedidosHechos.push(data)
            }

        }
        
        

        return pedidosHechos

    } catch (error) {
        console.log(error);
        
    }
}

export const getOrder = async ({commit}, idOrder) => {
    try {                
            const {data} = await cafeteriaOrderApi.get(`/order/${idOrder}.json`, )

            return data


        }
        catch (error) {
        console.log(error);
        
    }
}

export const getProduct = async ({commit}, idOrder) => {
    try {                
            const {data} = await cafeteriaApi.get(`/api/products/${idOrder}`, )

            return data.body


        }
        catch (error) {
        console.log(error);
        
    }
}

export const processPayment = async ({commit}, order) => {
        // Configura los datos para la solicitud
    try {
        
         // Realiza la solicitud POST a la URL '/process_payment' con los datos
        const response = await cafeteriaApi.post('/api/paypal/create', order);        

        window.open(response.data.body.links[1].href, "_blank");        
        

        return response.data;
    } catch(error) {
        return  error;
    }
};

export const verifyOrderPaypal = async ({commit}, id) => {
    // Configura los datos para la solicitud
try {
     // Realiza la solicitud POST a la URL '/process_payment' con los datos
    const {data} = await cafeteriaApi.get(`/api/paypal/getOrder/${id}`);    

    const {body} = data

    const {status} = body
    

    if(status === 'APPROVED'){        
        return true;
    }else{
        return false;
    }
        
} catch(error) {
    return  error;
}
};