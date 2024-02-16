// export const myMutations = (state) => {

// }

export const setProducts = (state, products) => {

    state.products = [ //? Para crear un nuevo arreglo con juntando los valores anteiorres y los nuevos valores
        ...state.products, //? se desestructura el state
        ...products //? Y tambien el entries  
    ]

    state.isLoading = false //? Se marca que ya se termino de cargar la informacion

}