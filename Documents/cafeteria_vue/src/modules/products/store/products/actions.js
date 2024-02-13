import cafeteriaApi from '../../../../api/apiCafeteria';

// export const myAction = async ({comit}) => {

// }

export const loadProducts = async ({ commit }) => {

    const { data } = await cafeteriaApi.get("/api/products/") //? Le hace un peticion get al api    

    const { body } = data

    const { product } = body

    const products = [] //? Se inicializa una lista para guaradar la data de la peticion

    for( let id of Object.keys(product) ){ //? Se va guardando los datos en la lista        
        products.push({
            id, //? Se guardar el id
            ...product[id] //? se guarda el resto de la data 
        })
    }

    commit('setProducts', products) //? Se llama la mutacion entries para guardar la respuesta de la api desde la bd

}